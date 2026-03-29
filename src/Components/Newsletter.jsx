import { useState } from 'react'
import { useI18n } from '../context/I18nContext'

const FORMSPREE = import.meta.env.VITE_FORMSPREE_ENDPOINT

export default function Newsletter() {
  const { t } = useI18n()
  const [status, setStatus] = useState('idle')
  const [email, setEmail] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    if (!email.trim()) return

    if (FORMSPREE) {
      setStatus('loading')
      try {
        const res = await fetch(FORMSPREE, {
          method: 'POST',
          headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: email.trim() }),
        })
        if (res.ok) {
          setStatus('success')
          setEmail('')
        } else {
          setStatus('error')
        }
      } catch {
        setStatus('error')
      }
      return
    }

    window.location.href = `mailto:fop@gmail.com?subject=${encodeURIComponent('Newsletter signup')}&body=${encodeURIComponent(email.trim())}`
    setStatus('success')
    setEmail('')
  }

  return (
    <section
      id="newsletter"
      aria-labelledby="newsletter-heading"
      className="scroll-mt-20 bg-blue-950 px-4 py-14 text-zinc-100 md:py-16"
    >
      <div className="mx-auto max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-amber-300/90">
          {t('newsletter.kicker')}
        </p>
        <h2 id="newsletter-heading" className="mt-2 text-2xl font-extrabold text-white md:text-3xl">
          {t('newsletter.title')}
        </h2>
        <p className="mt-3 text-sm text-zinc-400 md:text-base">{t('newsletter.desc')}</p>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-stretch">
          <label htmlFor="newsletter-email" className="sr-only">
            {t('newsletter.emailLabel')}
          </label>
          <input
            id="newsletter-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('newsletter.emailPlaceholder')}
            className="min-h-12 flex-1 rounded-lg border border-zinc-600 bg-zinc-900/80 px-4 text-white placeholder:text-zinc-500 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="min-h-12 rounded-lg bg-amber-300 px-6 text-sm font-bold uppercase tracking-wide text-zinc-950 transition hover:bg-amber-200 disabled:opacity-60"
          >
            {status === 'loading' ? '…' : t('newsletter.submit')}
          </button>
        </form>

        {status === 'success' && (
          <p className="mt-4 text-sm font-medium text-amber-300" role="status">
            {t('newsletter.success')}
          </p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-sm font-medium text-red-300" role="alert">
            {t('newsletter.error')}
          </p>
        )}
      </div>
    </section>
  )
}
