import { Link } from 'react-router-dom'
import { PlayCircleIcon, BookOpenIcon } from '@heroicons/react/24/outline'
import { useI18n } from '../context/I18nContext'

export default function ResourcesTeaser() {
  const { t } = useI18n()

  return (
    <section
      id="resources"
      aria-labelledby="resources-heading"
      className="scroll-mt-20 bg-white px-4 py-16 md:py-20"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center md:mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-700/90">
            {t('resources.kicker')}
          </p>
          <h2 id="resources-heading" className="mt-2 text-3xl font-extrabold text-zinc-900 md:text-4xl">
            {t('resources.title')}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-zinc-600">{t('resources.subtitle')}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <article className="flex flex-col rounded-2xl border border-zinc-200 bg-zinc-50/80 p-8 shadow-sm transition hover:border-amber-300/60 hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-800">
              <PlayCircleIcon className="h-7 w-7" aria-hidden />
            </div>
            <h3 className="text-xl font-bold text-zinc-900">{t('resources.sermonsTitle')}</h3>
            <p className="mt-2 flex-1 text-zinc-600">{t('resources.sermonsText')}</p>
            <span className="mt-4 inline-flex w-fit rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-900">
              {t('resources.soon')}
            </span>
            <Link
              to="/sermons"
              className="mt-6 inline-flex text-sm font-bold uppercase tracking-wide text-amber-800 underline-offset-4 hover:underline"
            >
              {t('resources.openSermons')}
            </Link>
          </article>

          <article className="flex flex-col rounded-2xl border border-zinc-200 bg-zinc-50/80 p-8 shadow-sm transition hover:border-amber-300/60 hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-800">
              <BookOpenIcon className="h-7 w-7" aria-hidden />
            </div>
            <h3 className="text-xl font-bold text-zinc-900">{t('resources.blogTitle')}</h3>
            <p className="mt-2 flex-1 text-zinc-600">{t('resources.blogText')}</p>
            <span className="mt-4 inline-flex w-fit rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-900">
              {t('resources.soon')}
            </span>
            <Link
              to="/blog"
              className="mt-6 inline-flex text-sm font-bold uppercase tracking-wide text-amber-800 underline-offset-4 hover:underline"
            >
              {t('resources.openBlog')}
            </Link>
          </article>
        </div>
      </div>
    </section>
  )
}
