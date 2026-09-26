const steps = [
  {
    number: '01',
    title: 'Reach out',
    copy: 'Send your name, age, position, and whether you are at a club or a free agent. A few lines on what you want help with is enough.',
  },
  {
    number: '02',
    title: 'Talk it through',
    copy: 'Rochan learns how you play, what you want next, and what you and your family need from someone who represents you.',
  },
  {
    number: '03',
    title: 'Pursue the next step',
    copy: 'If it is a fit, he represents you and helps you pursue club opportunities. If it is not, he will say so.',
  },
]

export function Process() {
  return (
    <section id="process" className="border-t border-line bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-signal">
          How it works
        </p>
        <h2 className="mt-3 max-w-3xl font-display text-5xl font-semibold uppercase leading-[0.9] tracking-tight md:text-6xl">
          Three steps, then a straight answer
        </h2>
        <ol className="mt-12 grid gap-10 md:grid-cols-3">
          {steps.map((step) => (
            <li key={step.number}>
              <p className="font-display text-6xl font-semibold leading-none text-signal">{step.number}</p>
              <h3 className="mt-4 font-display text-3xl font-semibold uppercase tracking-tight">
                {step.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted">{step.copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
