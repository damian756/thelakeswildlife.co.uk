import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { countablePath, isBot } from "@/lib/count";

// Plain visit counts: adds one to today's count for the page. Stores the path,
// the day and the number only. Writes nothing outside production, and drops
// bots, unknown paths and cross-site requests.
export async function POST(req: NextRequest) {
  const done = new Response(null, { status: 204 });
  if (process.env.VERCEL_ENV !== "production") return done;

  const fetchSite = req.headers.get("sec-fetch-site");
  if (fetchSite && fetchSite !== "same-origin") return done;
  if (isBot(req.headers.get("user-agent") ?? "")) return done;

  let body = "";
  try {
    body = (await req.text()).slice(0, 400);
  } catch {
    return done;
  }
  const path = countablePath(body);
  if (!path) return done;

  try {
    await prisma.$executeRaw`INSERT INTO "PageCount" ("path", "day", "count") VALUES (${path}, CURRENT_DATE, 1) ON CONFLICT ("path", "day") DO UPDATE SET "count" = "PageCount"."count" + 1`;
  } catch (err) {
    console.error("page count failed:", err instanceof Error ? err.name : "unknown error");
  }
  return done;
}
