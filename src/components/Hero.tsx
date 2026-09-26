import { site } from '../site.ts'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink text-bone">
      <PitchMark />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-8">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-[#e7b8a2]">
            Newly certified FIFA football agent
          </p>
          <h1 className="mt-4 font-display text-[4.6rem] font-semibold uppercase leading-[0.82] tracking-tight sm:text-8xl lg:text-[8.4rem]">
            Lewis
            <br />
            Lee
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-bone/85 md:text-xl">
            {site.name} represents young athletic players who do not already have an agent.
            He helps them pursue club opportunities, and he keeps the player and the family
            clear on what comes next.
          </p>
          {site.location ? (
            <p className="mt-4 text-sm font-medium uppercase tracking-[0.16em] text-bone/70">
              Based in {site.location}
            </p>
          ) : null}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              data-cta="reach-out"
              className="inline-flex w-full items-center justify-center bg-signal px-6 py-3 text-center font-display text-xl font-semibold uppercase tracking-wide text-paper hover:bg-signal-dark sm:w-auto"
            >
              Reach out
            </a>
            <a
              href="#process"
              className="inline-flex w-full items-center justify-center border border-bone/40 px-6 py-3 text-center font-display text-xl font-semibold uppercase tracking-wide text-bone hover:bg-bone hover:text-ink sm:w-auto"
            >
              How it works
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function PitchMark() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 480 480"
      className="pointer-events-none absolute -right-6 top-10 hidden h-[34rem] w-[34rem] text-bone/20 xl:block"
    >
      <circle cx="470" cy="240" r="168" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="470" cy="240" r="5" fill="currentColor" />
      <path d="M302 240h168M470 72v336" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}
