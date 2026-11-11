"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Sends the page path (no query string) to /api/count on each route change.
// No cookies, no storage, nothing about the visitor.
export function VisitCount() {
  const pathname = usePathname();
  useEffect(() => {
    if (!pathname || typeof navigator === "undefined" || typeof navigator.sendBeacon !== "function") return;
    navigator.sendBeacon("/api/count", pathname);
  }, [pathname]);
  return null;
}
