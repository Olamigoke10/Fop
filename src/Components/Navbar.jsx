import { useEffect, useState } from 'react'
import { Bars3Icon, GlobeAltIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom'
import { useI18n } from '../context/I18nContext'

const navItems = [
  { to: '/', labelKey: 'nav.home', end: true },
  { to: '/about', labelKey: 'nav.about' },
  { to: '/sermons', labelKey: 'nav.sermons' },
  { to: '/blog', labelKey: 'nav.blog' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t, language, toggleLanguage } = useI18n()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMobile = () => setMobileOpen(false)

  return (
    <header
      className={`sticky top-0 z-50 w-full print:hidden transition-[box-shadow,background-color] duration-300 ${
        scrolled
          ? 'border-b border-zinc-800/90 bg-zinc-950/95 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.65)] backdrop-blur-xl'
          : 'border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md'
      }`}
    >
      {/* Top accent line */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <NavLink
          to="/"
          className="group flex shrink-0 items-center gap-3 rounded-xl py-1 outline-none transition hover:opacity-95 focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          onClick={closeMobile}
        >
          <span
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-amber-300 via-amber-400 to-amber-600 text-sm font-black leading-none text-zinc-950 shadow-lg shadow-amber-900/40 ring-2 ring-amber-300/30 transition group-hover:scale-[1.03] group-hover:shadow-amber-500/25 group-hover:ring-amber-200/40"
            aria-hidden
          >
            FOP
          </span>
          <span className="hidden flex-col sm:flex">
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-amber-500/90">
              {t('nav.brandTagline')}
            </span>
            <span className="text-lg font-extrabold leading-tight tracking-tight md:text-xl">
              <span className="bg-gradient-to-r from-amber-100 via-amber-300 to-amber-200 bg-clip-text text-transparent">
                FLAMES
              </span>
              <span className="mx-1 text-white">OF</span>
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-300 bg-clip-text text-transparent">
                POWER
              </span>
            </span>
          </span>
        </NavLink>

        <nav aria-label="Primary" className="hidden items-center gap-3 md:flex">
          <ul className="flex items-center gap-1 rounded-full border border-zinc-700/60 bg-zinc-900/70 p-1.5 shadow-inner shadow-black/20 ring-1 ring-white/5">
            {navItems.map(({ to, labelKey, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  className={({ isActive }) =>
                    [
                      'relative block rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] transition-all duration-200',
                      isActive
                        ? 'bg-gradient-to-b from-amber-400/25 to-amber-600/15 text-amber-200 shadow-[inset_0_1px_0_0_rgba(253,224,71,0.25)] ring-1 ring-amber-400/35'
                        : 'text-zinc-400 hover:bg-zinc-800/90 hover:text-amber-200',
                    ].join(' ')
                  }
                >
                  {t(labelKey)}
                </NavLink>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={toggleLanguage}
            className="group flex items-center gap-2 rounded-full border border-zinc-600/80 bg-zinc-900/60 px-3.5 py-2 text-xs font-bold uppercase tracking-wide text-amber-100/90 shadow-sm transition hover:border-amber-500/50 hover:bg-zinc-800 hover:text-amber-200 hover:shadow-amber-900/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
            aria-label={t('nav.language')}
            title={`${t('nav.language')}: ${language === 'en' ? 'English / Pidgin' : 'Pidgin / English'}`}
          >
            <GlobeAltIcon className="h-4 w-4 text-amber-400/90 transition group-hover:text-amber-300" aria-hidden />
            {language === 'en' ? 'EN' : 'PCM'}
          </button>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-700/80 bg-zinc-900/50 text-amber-200 transition hover:border-amber-500/40 hover:bg-zinc-800 hover:text-amber-100 md:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span className="sr-only">{mobileOpen ? 'Close menu' : 'Open menu'}</span>
          {mobileOpen ? <XMarkIcon className="h-6 w-6" aria-hidden /> : <Bars3Icon className="h-6 w-6" aria-hidden />}
        </button>
      </div>

      {mobileOpen && (
        <div
          id="mobile-menu"
          className="border-t border-amber-500/15 bg-gradient-to-b from-zinc-950 to-zinc-900 px-4 pb-6 pt-2 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.85)] md:hidden"
        >
          <nav aria-label="Mobile">
            <ul className="flex flex-col gap-2 pt-2">
              {navItems.map(({ to, labelKey, end }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={end}
                    className={({ isActive }) =>
                      [
                        'block rounded-xl border px-4 py-3.5 text-sm font-bold uppercase tracking-[0.12em] transition',
                        isActive
                          ? 'border-amber-500/40 bg-amber-500/10 text-amber-200 shadow-[inset_0_0_0_1px_rgba(251,191,36,0.15)]'
                          : 'border-transparent bg-zinc-900/40 text-zinc-300 hover:border-zinc-600 hover:bg-zinc-800/80 hover:text-amber-200',
                      ].join(' ')
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
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-600/70 bg-zinc-900/60 px-4 py-3.5 text-sm font-bold uppercase tracking-wide text-amber-200 transition hover:border-amber-500/40 hover:bg-zinc-800"
                >
                  <GlobeAltIcon className="h-5 w-5 text-amber-400" aria-hidden />
                  {t('nav.language')}: {language === 'en' ? 'English → Pidgin' : 'Pidgin → English'}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
