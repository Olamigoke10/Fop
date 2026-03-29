import { usePageSeo } from '../utils/usePageSeo'
import { useI18n } from '../context/I18nContext'

/** Replace with your YouTube video IDs (youtube.com/watch?v=VIDEO_ID) */
const SERMON_VIDEOS = [
  { id: 'M7lc1UVf-VE', title: 'Sample embed — replace with your sermon video' },
]

export default function SermonsPage() {
  const { t } = useI18n()

  usePageSeo({
    title: 'Sermons | Flames of Power',
    description: 'Watch recent sermons and teaching from Flames of Power.',
    path: '/sermons',
  })

  return (
    <div className="bg-zinc-50">
      <div className="border-b border-amber-200/40 bg-white px-4 py-14 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold text-zinc-900 md:text-5xl">{t('sermonsPage.title')}</h1>
          <p className="mt-4 text-lg text-zinc-600">{t('sermonsPage.meta')}</p>
          <p className="mx-auto mt-6 max-w-2xl rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950">
            {t('sermonsPage.intro')}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl space-y-10 px-4 py-12 md:py-16">
        {SERMON_VIDEOS.map((video) => (
          <article
            key={video.id}
            className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm"
          >
            <div className="flex items-center justify-between border-b border-zinc-100 px-4 py-3">
              <h2 className="font-semibold text-zinc-900">{video.title}</h2>
              <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-600">
                {t('sermonsPage.sampleBadge')}
              </span>
            </div>
            <div className="aspect-video w-full bg-zinc-900">
              <iframe
                title={video.title}
                className="h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
