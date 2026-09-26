const services = [
  {
    number: '01',
    title: 'Representation',
    copy: 'Rochan represents the player. He is the point of contact who carries the player’s interests into conversations with clubs.',
  },
  {
    number: '02',
    title: 'Contracts',
    copy: 'When an offer is on the table, he helps the player and family understand the terms and what to ask before anything is signed.',
  },
  {
    number: '03',
    title: 'Club opportunities',
    copy: 'He helps players pursue club opportunities that fit their age, position, and the level they are ready for — at a club now, or as a free agent.',
  },
  {
    number: '04',
    title: 'Career guidance',
    copy: 'Practical guidance for the player and the family: how to prepare, what to share, and how to think about the next step without rushing it.',
  },
]

export function Services() {
  return (
    <section id="services" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="max-w-2xl">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-signal">
            Services
          </p>
          <h2 className="mt-3 font-display text-5xl font-semibold uppercase leading-[0.9] tracking-tight md:text-6xl">
            What representation covers
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Four parts of the same job: stand with the player, make the paperwork understandable,
            and help pursue the right club opportunity.
          </p>
        </div>
        <ol className="mt-12 grid gap-px border border-line bg-line md:grid-cols-2">
          {services.map((service) => (
            <li key={service.number} className="bg-bone p-6 md:p-8">
              <p className="font-display text-sm font-semibold tracking-[0.18em] text-signal">
                {service.number}
              </p>
              <h3 className="mt-3 font-display text-4xl font-semibold uppercase tracking-tight">
                {service.title}
              </h3>
              <p className="mt-3 max-w-md text-base leading-relaxed text-muted">{service.copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
