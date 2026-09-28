import { useEffect, useState } from 'react'
import { nav, site } from '../site.ts'

export function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  function close() {
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bone">
      <div className="h-1 bg-signal" />
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <a href="#top" onClick={close} className="flex items-center gap-3">
          <img src={site.logo} alt="LTP Crew Sports" className="h-12 w-auto" />
          <span className="leading-none">
            <span className="block font-display text-base font-semibold uppercase tracking-wide sm:text-[1.15rem]">
              {site.name}
            </span>
            <span className="mt-1 block text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted">
              {site.role}
            </span>
          </span>
        </a>

        <nav aria-label="Page" className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink underline-offset-4 hover:underline"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-signal px-4 py-2 font-display text-lg font-semibold uppercase tracking-wide text-paper hover:bg-signal-dark"
          >
            Reach out
          </a>
        </nav>

        <button
          type="button"
          className="min-h-11 border border-ink px-3 font-display text-lg font-semibold uppercase tracking-wide lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      {open ? (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line px-5 py-3 lg:hidden">
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={close}
                  className="block py-3 font-display text-3xl font-semibold uppercase tracking-wide"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
