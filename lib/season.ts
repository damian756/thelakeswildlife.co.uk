import type { SpeciesCategory } from "./types";

export type SeasonTag = "year-round" | "winter" | "summer" | "passage" | "spring" | "autumn";

/**
 * Derives a structured season tag from the free-text seasonalPresence field.
 * Returns null when the text is ambiguous or empty.
 * Client-safe — no Node.js APIs.
 */
export function classifySeason(
  text: string | undefined,
  category: SpeciesCategory
): SeasonTag | null {
  if (!text) return null;
  const t = text.toLowerCase();

  if (category === "birds") {
    if (t.includes("year-round") || t.includes("year round")) return "year-round";
    if (t.includes("passage") && !t.includes("year-round")) return "passage";
    if (
      /october|november|december|january|february/.test(t) &&
      /winter|wintering|overwinter|migrant/.test(t)
    )
      return "winter";
    if (/august.{0,30}(april|march)/.test(t)) return "winter";
    if (/(april|may|june|july).{0,40}(breed|summer|visitor|nesting)/.test(t))
      return "summer";
    if (/october.{0,30}march/.test(t)) return "winter";
    return null;
  }

  if (category === "insects") {
    if (/march|april|may/.test(t) && !/june|july|august|september/.test(t))
      return "spring";
    if (/september|october/.test(t) && !/may|june|july|august/.test(t))
      return "autumn";
    if (/june|july|august/.test(t)) return "summer";
    if (/april|may/.test(t)) return "spring";
    return null;
  }

  if (category === "plants") {
    if (
      t.includes("year-round") ||
      (t.includes("perennial") && !/flowers/.test(t))
    )
      return "year-round";
    if (/flowers? (june|july|august|september)/.test(t)) return "summer";
    if (/flowers? (march|april|may)/.test(t)) return "spring";
    if (/flowers? (september|october)/.test(t)) return "autumn";
    return null;
  }

  return null;
}
