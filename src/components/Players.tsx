const fits = [
  'Young athletic players who do not have an agent',
  'Players at a club, and players who are free agents',
  'Families who want one clear person to talk with',
  'Players ready to pursue a club opportunity seriously',
]

export function Players() {
  return (
    <section id="players" className="bg-pitch text-bone">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-5">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-bone/70">
            Who he works with
          </p>
          <h2 className="mt-3 font-display text-5xl font-semibold uppercase leading-[0.9] tracking-tight md:text-6xl">
            Players without an agent
          </h2>
        </div>
        <div className="lg:col-span-7">
          <p className="max-w-prose text-lg leading-relaxed text-bone/85">
            This page is for players who are looking for representation. If you already have an
            agent, you do not need another one. If you do not, this is the place to start.
          </p>
          <ul className="mt-8 divide-y divide-bone/20 border-y border-bone/20">
            {fits.map((item) => (
              <li key={item} className="py-4 text-lg leading-snug">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
