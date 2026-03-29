import { useEffect } from 'react'

/**
 * Updates document title, meta description, and canonical when VITE_SITE_URL is set.
 */
export function usePageSeo({ title, description, path }) {
  const base = (import.meta.env.VITE_SITE_URL || '').replace(/\/$/, '')

  useEffect(() => {
    document.title = title
  }, [title])

  useEffect(() => {
    if (!description) return
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', description)
  }, [description])

  useEffect(() => {
    if (!base || !path) return
    let link = document.querySelector('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      document.head.appendChild(link)
    }
    link.setAttribute('href', `${base}${path}`)
  }, [base, path])
}
