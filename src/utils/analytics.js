/**
 * Optional privacy-friendly analytics (Umami).
 * Set in .env: VITE_UMAMI_WEBSITE_ID and VITE_UMAMI_SRC (script URL, e.g. https://cloud.umami.is/script.js)
 */
export function initAnalytics() {
  const websiteId = import.meta.env.VITE_UMAMI_WEBSITE_ID
  const src = import.meta.env.VITE_UMAMI_SRC
  if (!websiteId || !src || typeof document === 'undefined') return

  if (document.querySelector(`script[data-website-id="${websiteId}"]`)) return

  const script = document.createElement('script')
  script.async = true
  script.src = src
  script.setAttribute('data-website-id', websiteId)
  document.head.appendChild(script)
}
