import { useState } from 'react'
import { Bars3BottomLeftIcon, XMarkIcon } from '@heroicons/react/24/solid'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About us', href: '#about' },
  { label: 'Sermons', href: '#sermons' },
  { label: 'Blog', href: '#blog' },
]

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  const closeMobile = () => setMobileOpen(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur-md">
      <div className="relative flex h-16 w-full items-center justify-between px-4 md:px-8">
        <a
          href="#home"
          className="font-bold tracking-tight text-amber-300 transition hover:text-amber-200"
          onClick={closeMobile}
        >
          FLAMES<span className="px-1.5 text-white">OF</span>POWER
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex gap-8 text-sm font-semibold uppercase tracking-wide text-amber-100/90">
            {navItems.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="transition hover:text-amber-300"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
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
            {navItems.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="block rounded-lg px-3 py-3 text-amber-100 transition hover:bg-zinc-800 hover:text-amber-300"
                  onClick={closeMobile}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Navbar
