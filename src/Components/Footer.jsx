import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { useI18n } from '../context/I18nContext'

const quickLinks = [
  { to: '/about', labelKey: 'nav.about' },
  { to: '/#fellowship', labelKey: 'footer.fellowship' },
  { to: '/sermons', labelKey: 'nav.sermons' },
  { to: '/blog', labelKey: 'nav.blog' },
]

export default function Footer() {
  const { t } = useI18n()
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="scroll-mt-20 bg-blue-950 text-zinc-200 print:border-t print:border-zinc-300 print:bg-white print:text-zinc-900">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-16">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-300/90 print:text-amber-800">
              {t('footer.brand')}
            </p>
            <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl print:text-zinc-900">
              {t('footer.headline')}
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-400 print:text-zinc-600">
              {t('footer.blurb')}
            </p>
            <p className="mt-6 text-xs text-zinc-500 print:text-zinc-500">
              © {year} Flames of Power. {t('footer.rights')}
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white print:text-zinc-900">
              {t('footer.quickLinks')}
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {quickLinks.map(({ to, labelKey }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-zinc-400 transition hover:text-amber-300 print:text-zinc-700 print:underline"
                  >
                    {t(labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white print:text-zinc-900">
              {t('footer.connect')}
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href="tel:+234903999822"
                  className="flex items-start gap-3 text-zinc-300 transition hover:text-amber-300 print:text-zinc-800"
                >
                  <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-amber-400/90 print:text-amber-700" aria-hidden />
                  +234 903 999 822
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3 text-zinc-300 print:text-zinc-800">
                  <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-amber-400/90 print:text-amber-700" aria-hidden />
                  12, Milo Close
                </span>
              </li>
              <li>
                <a
                  href="mailto:fop@gmail.com"
                  className="flex items-start gap-3 text-zinc-300 transition hover:text-amber-300 print:text-zinc-800"
                >
                  <EnvelopeIcon className="mt-0.5 h-5 w-5 shrink-0 text-amber-400/90 print:text-amber-700" aria-hidden />
                  fop@gmail.com
                </a>
              </li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-2" aria-label="Social media coming soon">
              {['Facebook', 'Instagram', 'YouTube'].map((label) => (
                <span
                  key={label}
                  className="rounded-full border border-dashed border-zinc-600 px-3 py-1.5 text-xs font-medium text-zinc-500 print:border-zinc-400 print:text-zinc-500"
                >
                  {label} · {t('footer.socialSoon')}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
