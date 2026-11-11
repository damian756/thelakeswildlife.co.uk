/**
 * Serve a remote image (for example from Wikimedia) through this site's own
 * image endpoint, so the visitor's browser never requests it from the remote
 * host. Local paths are returned unchanged. Width must be one of Next's
 * default image sizes (640, 750, 828, 1080, 1200, 1920, 2048, 3840).
 */
export function siteImage(src: string, width = 1920): string {
  if (!/^https?:\/\//i.test(src)) return src;
  return `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=75`;
}
