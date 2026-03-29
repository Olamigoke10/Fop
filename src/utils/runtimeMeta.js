/**
 * When VITE_SITE_URL is set, point og:image and twitter:image at absolute URLs
 * (required by many social crawlers).
 */
export function applyAbsoluteSocialUrls() {
  const base = (import.meta.env.VITE_SITE_URL || '').replace(/\/$/, '')
  if (!base || typeof document === 'undefined') return

  const abs = `${base}/og.jpg`
  document.querySelector('meta[property="og:image"]')?.setAttribute('content', abs)
  document.querySelector('meta[name="twitter:image"]')?.setAttribute('content', abs)
}
