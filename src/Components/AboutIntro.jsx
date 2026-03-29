import { Link } from 'react-router-dom'
import { useI18n } from '../context/I18nContext'

export default function AboutIntro() {
  const { t } = useI18n()

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-20 border-y border-amber-200/40 bg-gradient-to-b from-white to-amber-50/40 px-4 py-16 md:py-24"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-amber-700/90">
          {t('aboutIntro.kicker')}
        </p>
        <h2 id="about-heading" className="mt-2 text-3xl font-extrabold text-zinc-900 md:text-4xl">
          {t('aboutIntro.title')}
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-zinc-600">{t('aboutIntro.body')}</p>
        <Link
          to="/about"
          className="mt-8 inline-flex items-center justify-center rounded-lg border-2 border-amber-600 bg-transparent px-6 py-3 text-sm font-bold uppercase tracking-wide text-amber-900 transition hover:bg-amber-100"
        >
          {t('aboutIntro.readMore')}
        </Link>
      </div>
    </section>
  )
}
