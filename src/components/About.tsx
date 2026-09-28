import { site } from '../site.ts'

const pillars = [
  ['Represents', 'Connecting players directly to elite clubs.'],
  ['Guides', 'Navigating every step with players and families.'],
  ['Focus', 'Unlocking the next generation of football talent.'],
]

export function About() {
  return (
    <section id="about">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-signal">
            About
          </p>
          <h2 className="mt-3 font-display text-5xl font-semibold uppercase leading-[0.9] tracking-tight md:text-6xl">
            Developing the game’s future stars
          </h2>
          {site.photo ? (
            <img
              src={site.photo}
              alt={`${site.name}, ${site.role}`}
              className="mt-8 aspect-[4/5] w-full max-w-sm object-cover"
            />
          ) : null}
        </div>
        <div className="lg:col-span-7">
          <div className="max-w-prose space-y-5 text-lg leading-relaxed text-muted">
            <p>
              Driven by a passion for developing the game’s future stars, the agency provides
              personalized representation, strategic career planning, and elite support tailored to
              the modern football landscape. Whether navigating crucial transfer windows, securing
              commercial partnerships, or managing long-term athletic development, Lewis serves as a
              trusted partner committed to turning raw promise into lasting professional success.
            </p>
          </div>
          <ul className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-3">
            {pillars.map(([title, detail]) => (
              <li key={title} className="bg-paper p-5">
                <p className="font-display text-2xl font-semibold uppercase tracking-wide">{title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
