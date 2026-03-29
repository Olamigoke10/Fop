import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline'

const quickLinks = [
  { label: 'About us', href: '#about' },
  { label: 'Fellowship', href: '#fellowship' },
  { label: 'Sermons', href: '#sermons' },
  { label: 'Blog', href: '#blog' },
]

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="scroll-mt-20 bg-blue-950 text-zinc-200">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-16">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-300/90">
              Flames of Power
            </p>
            <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">Faith that moves hearts</h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-400">
              A community committed to Christ, His Word, and one another. We would love to meet you.
            </p>
            <p className="mt-6 text-xs text-zinc-500">© {year} Flames of Power. All rights reserved.</p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Quick links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className="text-zinc-400 transition hover:text-amber-300">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Connect</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href="tel:+234903999822"
                  className="flex items-start gap-3 text-zinc-300 transition hover:text-amber-300"
                >
                  <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-amber-400/90" aria-hidden />
                  +234 903 999 822
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3 text-zinc-300">
                  <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-amber-400/90" aria-hidden />
                  12, Milo Close
                </span>
              </li>
              <li>
                <a
                  href="mailto:fop@gmail.com"
                  className="flex items-start gap-3 text-zinc-300 transition hover:text-amber-300"
                >
                  <EnvelopeIcon className="mt-0.5 h-5 w-5 shrink-0 text-amber-400/90" aria-hidden />
                  fop@gmail.com
                </a>
              </li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-2" aria-label="Social media coming soon">
              {['Facebook', 'Instagram', 'YouTube'].map((label) => (
                <span
                  key={label}
                  className="rounded-full border border-dashed border-zinc-600 px-3 py-1.5 text-xs font-medium text-zinc-500"
                >
                  {label} · soon
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
