import { site } from '../site.ts'

const socials = [
  ['Instagram', site.socials.instagram],
  ['LinkedIn', site.socials.linkedin],
  ['X', site.socials.x],
] as const

export function Footer() {
  const visibleSocials = socials.filter(([, href]) => href.length > 0)
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-bone">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <p className="font-display text-2xl font-semibold uppercase tracking-wide">{site.name}</p>
          <p className="mt-1 text-sm text-muted">{site.role}</p>
        </div>
        <div className="flex flex-col gap-2 text-sm md:items-end">
          {visibleSocials.length > 0 ? (
            <ul className="flex flex-wrap gap-4">
              {visibleSocials.map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="underline underline-offset-4">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
          <p className="text-muted">
            <a className="underline underline-offset-4" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            {' · '}
            {year}
          </p>
        </div>
      </div>
    </footer>
  )
}
