import { usePageSeo } from '../utils/usePageSeo'
import { useI18n } from '../context/I18nContext'

const leaders = [
  { name: 'Pastor (name)', roleKey: 'aboutPage.leadRole', initials: 'P' },
  { name: 'Associate (name)', roleKey: 'aboutPage.associateRole', initials: 'A' },
]

export default function AboutPage() {
  const { t } = useI18n()

  usePageSeo({
    title: 'About | Flames of Power',
    description:
      'Our story, beliefs, and leadership at Flames of Power — a church community in Nigeria.',
    path: '/about',
  })

  return (
    <div className="bg-white">
      <div className="border-b border-amber-200/40 bg-gradient-to-b from-amber-50/60 to-white px-4 py-14 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold text-zinc-900 md:text-5xl">{t('aboutPage.title')}</h1>
          <p className="mt-4 text-lg text-zinc-600">{t('aboutPage.meta')}</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-14 md:py-16">
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-zinc-900">{t('aboutPage.storyTitle')}</h2>
          <p className="mt-4 leading-relaxed text-zinc-600">{t('aboutPage.storyP1')}</p>
          <p className="mt-4 leading-relaxed text-zinc-600">{t('aboutPage.storyP2')}</p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-zinc-900">{t('aboutPage.beliefsTitle')}</h2>
          <ul className="mt-6 list-disc space-y-3 pl-5 text-zinc-600">
            <li>{t('aboutPage.belief1')}</li>
            <li>{t('aboutPage.belief2')}</li>
            <li>{t('aboutPage.belief3')}</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-zinc-900">{t('aboutPage.leadersTitle')}</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {leaders.map((person) => (
              <article
                key={person.name}
                className="flex gap-4 rounded-2xl border border-zinc-200 bg-zinc-50/80 p-6 shadow-sm"
              >
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-amber-200 text-lg font-bold text-amber-950"
                  aria-hidden
                >
                  {person.initials}
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900">{person.name}</h3>
                  <p className="text-sm font-medium text-amber-800">{t(person.roleKey)}</p>
                  <p className="mt-2 text-sm text-zinc-600">{t('aboutPage.leaderBio')}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
