import { useState } from 'react'
import { Bars3BottomLeftIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { NavLink } from 'react-router-dom'
import { useI18n } from '../context/I18nContext'

const navItems = [
  { to: '/', labelKey: 'nav.home', end: true },
  { to: '/about', labelKey: 'nav.about' },
  { to: '/sermons', labelKey: 'nav.sermons' },
  { to: '/blog', labelKey: 'nav.blog' },
]

const linkClass = ({ isActive }) =>
  [
    'transition',
    isActive ? 'text-amber-300' : 'text-amber-100/90 hover:text-amber-300',
  ].join(' ')

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { t, language, toggleLanguage } = useI18n()

  const closeMobile = () => setMobileOpen(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur-md print:hidden">
      <div className="relative flex h-16 w-full items-center justify-between px-4 md:px-8">
        <NavLink
          to="/"
          className="font-bold tracking-tight text-amber-300 transition hover:text-amber-200"
          onClick={closeMobile}
        >
          FLAMES<span className="px-1.5 text-white">OF</span>POWER
        </NavLink>

        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          <ul className="flex gap-8 text-sm font-semibold uppercase tracking-wide">
            {navItems.map(({ to, labelKey, end }) => (
              <li key={to}>
                <NavLink to={to} end={end} className={linkClass}>
                  {t(labelKey)}
                </NavLink>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={toggleLanguage}
            className="rounded-lg border border-zinc-600 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-amber-200 transition hover:border-amber-400 hover:text-amber-300"
            aria-label={t('nav.language')}
            title={`${t('nav.language')}: ${language === 'en' ? 'English / Pidgin' : 'Pidgin / English'}`}
          >
            {language === 'en' ? 'EN' : 'PCM'}
          </button>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-amber-100 md:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span className="sr-only">{mobileOpen ? 'Close menu' : 'Open menu'}</span>
          {mobileOpen ? <XMarkIcon className="h-7 w-7" aria-hidden /> : <Bars3BottomLeftIcon className="h-7 w-7" aria-hidden />}
        </button>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-menu"
          className="border-t border-zinc-800 bg-zinc-950 px-4 py-4 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1 text-sm font-semibold uppercase tracking-wide">
            {navItems.map(({ to, labelKey, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  className={({ isActive }) =>
                    `block rounded-lg px-3 py-3 transition hover:bg-zinc-800 ${
                      isActive ? 'bg-zinc-800 text-amber-300' : 'text-amber-100 hover:text-amber-300'
                    }`
                  }
                  onClick={closeMobile}
                >
                  {t(labelKey)}
                </NavLink>
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={() => {
                  toggleLanguage()
                  closeMobile()
                }}
                className="w-full rounded-lg px-3 py-3 text-left text-amber-100 transition hover:bg-zinc-800 hover:text-amber-300"
              >
                {t('nav.language')}: {language === 'en' ? 'English → Pidgin' : 'Pidgin → English'}
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
