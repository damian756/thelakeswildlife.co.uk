// Contact form checks (11 Nov 2026). Run: npm run test:contact
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import {
  DELIVERY_EMAIL,
  FROM_EMAIL,
  buildEnquiryEmail,
  escapeHtml,
  isValidEmail,
  logSendError,
} from "../lib/contact.ts";

const root = new URL("..", import.meta.url);
const read = (p) => readFileSync(new URL(p, root), "utf8");
const walk = (dir) =>
  readdirSync(new URL(dir, root)).flatMap((name) => {
    const rel = join(dir, name).split(String.fromCharCode(92)).join("/");
    return statSync(new URL(rel, root)).isDirectory() ? walk(rel + "/") : [rel];
  });
const base = { name: "n", email: "e@x.co", subject: "s", message: "m" };

test("the form delivers to damian@churchtownmedia.co.uk from the verified stand-in sender", () => {
  assert.equal(DELIVERY_EMAIL, "damian@churchtownmedia.co.uk");
  assert.equal(FROM_EMAIL, "The Lakes Wildlife <noreply@southportguide.co.uk>");
  const mail = buildEnquiryEmail(base);
  assert.deepEqual(mail.to, [DELIVERY_EMAIL]);
  assert.equal(mail.from, FROM_EMAIL);
});

test("the route builds the mail in lib/contact.ts, checks the send result and fails loudly", () => {
  const src = read("app/api/contact/route.ts");
  assert.match(src, /from "@\/lib\/contact"/);
  assert.match(src, /const\s*\{\s*error\s*\}\s*=\s*await\s+new Resend\(key\)\.emails\.send\(\s*buildEnquiryEmail\(/);
  assert.match(src, /if\s*\(error\)\s*\{\s*logSendError\(error\);\s*return NextResponse\.json\([^)]*status:\s*502/);
  assert.match(src, /catch\s*\(err\)\s*\{\s*logSendError\(err\);/);
  assert.match(src, /isValidEmail\(email\)/);
  assert.match(src, /HONEYPOT_FIELD/);
  // The only ok answers: the honeypot (nothing sent) and the last line, after the send is checked.
  const oks = [...src.matchAll(/success:\s*true/g)].map((m) => m.index);
  assert.equal(oks.length, 2);
  assert.ok(oks[0] > src.indexOf("body[HONEYPOT_FIELD]") && oks[0] < src.indexOf("const name"), "first ok must be the honeypot answer");
  assert.ok(oks[1] > src.indexOf("logSendError(err)"), "last ok must come after the send is checked");
});

test("the client form never imports lib/contact.ts and has the honeypot", () => {
  const cf = read("components/ContactForm.tsx");
  assert.doesNotMatch(cf, /from\s+["'](?:@\/|\.\.\/)+lib\/contact["']/);
  assert.match(cf, /name="website"/);
  assert.match(cf, /namedItem\("website"\)/);
});

test("every typed value is escaped in the html", () => {
  assert.equal(escapeHtml(`&<>"'`), "&amp;&lt;&gt;&quot;&#39;");
  const evil = "<script>x</script>&";
  for (const field of ["name", "email", "subject", "message"]) {
    const html = buildEnquiryEmail({ ...base, [field]: evil }).html;
    assert.ok(!html.includes("<script>"), field + " not escaped");
    assert.ok(html.includes("&lt;script&gt;x&lt;/script&gt;&amp;"), field + " missing escaped text");
  }
  assert.ok(buildEnquiryEmail({ ...base, message: "a\nb" }).html.includes("a<br>b"));
});

test("replyTo is the enquirer's address; unsafe addresses are rejected", () => {
  assert.equal(buildEnquiryEmail({ ...base, email: "visitor@example.com" }).replyTo, "visitor@example.com");
  for (const bad of ["a@b.co, c@d.co", "a@b.co\nBcc: x@y.co", "a b@c.co", "<a@b.co>", "nodomain", "a@b", "x".repeat(250) + "@b.co"]) {
    assert.equal(isValidEmail(bad), false, bad);
    assert.equal(buildEnquiryEmail({ ...base, email: bad }).replyTo, undefined, bad);
  }
});

test("the subject has no CR or LF", () => {
  const { subject } = buildEnquiryEmail({ ...base, name: "a\r\nBcc: x", subject: "b\nc" });
  assert.doesNotMatch(subject, /[\r\n]/);
});

test("logSendError logs only the error's name and message", () => {
  const calls = [];
  const orig = console.error;
  console.error = (...args) => calls.push(args);
  try {
    logSendError({ name: "validation_error", message: "domain not verified", to: "secret@x.co", body: "private text" });
  } finally {
    console.error = orig;
  }
  assert.equal(calls.length, 1);
  const out = calls[0].join(" ");
  assert.match(out, /validation_error/);
  assert.match(out, /domain not verified/);
  assert.doesNotMatch(out, /secret@x\.co|private text/);
});

test("no address of ours is printed on any page or public file", () => {
  const ours = /[A-Za-z0-9._%+-]+@(?:[a-z0-9-]+\.)*(?:thelakes\.network|thelakesguide\.co\.uk|hikethelakes\.com|thelakeswildlife\.co\.uk|churchtownmedia\.co\.uk|southportguide\.co\.uk)/gi;
  const allowed = { "lib/contact.ts": ["damian@churchtownmedia.co.uk", "noreply@southportguide.co.uk"] };
  const files = [...walk("app/"), ...walk("components/"), ...walk("lib/"), ...walk("content/"), ...walk("public/")].filter((f) =>
    /\.(ts|tsx|js|mjs|json|txt|xml|md|html)$/.test(f),
  );
  for (const f of files) {
    const src = read(f).replace(/^\s*\/\/.*$/gm, "");
    const found = (src.match(ours) ?? []).map((a) => a.toLowerCase());
    assert.deepEqual(found, allowed[f] ?? [], `${f} prints ${found.join(", ")}`);
  }
});

test("no route or helper can fall back to Resend's test sender (resend.dev)", () => {
  const files = [...walk("app/"), ...walk("lib/"), ...walk("components/")].filter((f) => /\.(ts|tsx|js|mjs)$/.test(f));
  for (const f of files) assert.ok(!read(f).replace(/^\s*\/\/.*$/gm, "").includes("resend.dev"), `${f} mentions resend.dev`);
});
