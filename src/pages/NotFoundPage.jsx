import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useI18n } from '../context/I18nContext'

export default function NotFoundPage() {
  const { t } = useI18n()

  useEffect(() => {
    document.title = '404 | Flames of Power'
  }, [])

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-zinc-50 px-4 py-20 text-center">
      <p className="text-8xl font-black text-amber-300/90 md:text-9xl" aria-hidden>
        404
      </p>
      <h1 className="mt-4 text-2xl font-bold text-zinc-900 md:text-3xl">{t('notFound.title')}</h1>
      <p className="mt-3 max-w-md text-zinc-600">{t('notFound.body')}</p>
      <Link
        to="/"
        className="mt-8 inline-flex rounded-lg bg-amber-300 px-6 py-3 text-sm font-bold uppercase tracking-wide text-zinc-950 transition hover:bg-amber-200"
      >
        {t('notFound.home')}
      </Link>
    </div>
  )
}
