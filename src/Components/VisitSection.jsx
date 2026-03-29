import { MapPinIcon } from '@heroicons/react/24/outline'
import { useI18n } from '../context/I18nContext'

const MAP_QUERY = encodeURIComponent('12 Milo Close')

export default function VisitSection() {
  const { t } = useI18n()
  const mapHref = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`

  return (
    <section
      id="visit"
      aria-labelledby="visit-heading"
      className="scroll-mt-20 border-y border-amber-200/50 bg-white px-4 py-14 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center md:mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-800/90">
            {t('visit.kicker')}
          </p>
          <h2 id="visit-heading" className="mt-2 text-3xl font-extrabold text-zinc-900 md:text-4xl">
            {t('visit.title')}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-zinc-600">{t('visit.subtitle')}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-6 rounded-2xl border border-zinc-200 bg-zinc-50/80 p-8 shadow-sm">
            <div>
              <h3 className="text-lg font-bold text-zinc-900">{t('visit.timesTitle')}</h3>
              <p className="mt-2 text-zinc-600">{t('visit.timesBody')}</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-zinc-900">{t('visit.midweekTitle')}</h3>
              <p className="mt-2 text-zinc-600">{t('visit.midweekBody')}</p>
            </div>
            <a
              href={mapHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-amber-300 px-4 py-3 text-sm font-bold text-zinc-950 transition hover:bg-amber-200"
            >
              <MapPinIcon className="h-5 w-5 shrink-0" aria-hidden />
              {t('visit.mapCta')}
            </a>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-gradient-to-br from-amber-50 to-orange-50/80 p-8 shadow-sm">
            <h3 className="text-lg font-bold text-zinc-900">{t('visit.expectTitle')}</h3>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-zinc-700">
              <li>{t('visit.expect1')}</li>
              <li>{t('visit.expect2')}</li>
              <li>{t('visit.expect3')}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
