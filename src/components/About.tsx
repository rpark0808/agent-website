import { site } from '../site.ts'

export function About() {
  return (
    <section id="about">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-signal">
            About
          </p>
          <h2 className="mt-3 font-display text-5xl font-semibold uppercase leading-[0.9] tracking-tight md:text-6xl">
            A new agent for players still looking
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
              {site.name} is newly certified as a FIFA football agent. His work is with young
              players who are athletic, serious about football, and do not have representation yet.
            </p>
            <p>
              He represents players. He does not hire them. When a club opportunity is worth
              pursuing, he is on the player’s side of that conversation — including the questions
              a family should ask before anyone signs.
            </p>
            <p>
              He is at the start of this work and plain about that. Players get a direct
              representative, not a promise of a contract he cannot make.
            </p>
          </div>
          <ul className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-3">
            {[
              ['Represents', 'The player, in conversations with clubs'],
              ['Guides', 'The player and the family together'],
              ['Focus', 'Young athletes without an agent'],
            ].map(([title, detail]) => (
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
