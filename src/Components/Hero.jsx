import { PhoneIcon } from '@heroicons/react/24/outline'
import { useI18n } from '../context/I18nContext'

const WA = 'https://wa.me/234903999822?text=Hello%20Flames%20of%20Power'

export default function Hero() {
  const { t } = useI18n()

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-zinc-900"
      aria-labelledby="hero-heading"
    >
      <div className="relative isolate min-h-[22rem] md:min-h-[32rem]">
        <picture>
          <source type="image/webp" media="(min-width: 768px)" srcSet="/hero-1920.webp" />
          <source type="image/webp" srcSet="/hero-1280.webp" />
          <img
            src="/hero-1920.jpg"
            alt=""
            width={1920}
            height={1080}
            sizes="100vw"
            decoding="async"
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover object-center md:object-[center_30%]"
          />
        </picture>
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/35"
          aria-hidden
        />

        <div className="relative z-10 mx-auto flex min-h-[22rem] max-w-6xl flex-col justify-center px-5 py-16 md:min-h-[32rem] md:px-16 md:py-24">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-amber-300 md:text-base">
            {t('hero.welcome')}
          </p>
          <h1
            id="hero-heading"
            className="max-w-3xl text-3xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl lg:leading-[1.1]"
          >
            {t('hero.title')}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-zinc-200 md:text-xl">{t('hero.subtitle')}</p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-lg bg-amber-300 px-6 py-3 text-sm font-bold uppercase tracking-wide text-zinc-950 shadow-lg transition hover:bg-amber-200 focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
            >
              {t('hero.learnMore')}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              {t('hero.contactUs')}
            </a>
            <a
              href="tel:+234903999822"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <PhoneIcon className="h-5 w-5" aria-hidden />
              <span className="uppercase tracking-wide">{t('hero.callUs')}</span>
            </a>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-emerald-400/40 bg-emerald-500/15 px-4 py-3 text-sm font-semibold text-emerald-100 transition hover:bg-emerald-500/25"
            >
              {t('hero.whatsapp')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
