const services = [
  {
    number: '01',
    title: 'Club Representation',
    copy: 'Your direct line to decision-makers. Lewis leads all club communications, advocating fiercely for your vision and best interests.',
  },
  {
    number: '02',
    title: 'Contract & Negotiation',
    copy: 'Terms decoded and interests protected. Expert negotiation to ensure every contract secures your value before pen meets paper.',
  },
  {
    number: '03',
    title: 'Club Opportunities',
    copy: 'Strategic placements matched to your talent. Finding the right stage, right league, and right club at every phase of your growth.',
  },
  {
    number: '04',
    title: 'Career Guidance',
    copy: 'A dedicated partnership for player and family. Clear, practical support to navigate the pressures and decisions of modern football.',
  },
]

export function Services() {
  return (
    <section id="services" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-signal">
          Services
        </p>
          <h2 className="mt-3 max-w-3xl font-display text-5xl font-semibold uppercase leading-[0.9] tracking-tight md:text-6xl">
            Club representation to career guidance
          </h2>
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
