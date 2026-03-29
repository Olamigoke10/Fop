import AboutSvg from '../assets/svgs/AboutSvg.svg'
import bibleSvg from '../assets/svgs/bibleStudy.svg'
import WorshipSvg from '../assets/svgs/WorshipSvg.svg'
import { useI18n } from '../context/I18nContext'

const cardKeys = [
  { titleKey: 'fellowship.aboutTitle', textKey: 'fellowship.aboutText', icon: AboutSvg },
  { titleKey: 'fellowship.bibleTitle', textKey: 'fellowship.bibleText', icon: bibleSvg },
  { titleKey: 'fellowship.worshipTitle', textKey: 'fellowship.worshipText', icon: WorshipSvg },
]

export default function Relevant() {
  const { t } = useI18n()

  return (
    <section
      id="fellowship"
      aria-labelledby="fellowship-heading"
      className="scroll-mt-20 w-full bg-gradient-to-b from-amber-50 to-orange-50/80 px-4 py-14 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center md:mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-800/80">
            {t('fellowship.kicker')}
          </p>
          <h2 id="fellowship-heading" className="mt-2 text-3xl font-extrabold text-zinc-900 md:text-4xl">
            {t('fellowship.title')}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-zinc-600">{t('fellowship.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {cardKeys.map((card) => (
            <article
              key={card.titleKey}
              className="flex flex-col rounded-2xl border border-amber-200/50 bg-white p-8 text-center shadow-sm transition hover:-translate-y-0.5 hover:border-amber-300 hover:shadow-lg"
            >
              <div className="mb-5 flex justify-center">
                <div className="flex h-[100px] w-[100px] items-center justify-center rounded-full bg-amber-300 shadow-inner ring-4 ring-amber-100">
                  <img
                    src={card.icon}
                    alt=""
                    className="h-10 w-10"
                    width={40}
                    height={40}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-orange-800">{t(card.titleKey)}</h3>
              <p className="mt-3 flex-1 text-left text-sm leading-relaxed text-zinc-600 md:text-[15px]">
                {t(card.textKey)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
