import { type FormEvent, useState } from 'react'
import { buildPlayerEnquiryMailto, openMailto } from '../mailto.ts'
import { site } from '../site.ts'

const fieldClass =
  'w-full border border-line bg-paper px-3 py-3 text-base text-ink outline-none focus:border-signal'

export function Contact() {
  const [notice, setNotice] = useState('')

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const href = buildPlayerEnquiryMailto(site.email, {
      name: String(data.get('name') ?? ''),
      age: String(data.get('age') ?? ''),
      position: String(data.get('position') ?? ''),
      club: String(data.get('club') ?? ''),
      message: String(data.get('message') ?? ''),
    })
    form.dataset.mailto = href
    setNotice(`Your email app should open a message to ${site.email}. Nothing was saved on this website.`)
    openMailto(href)
  }

  return (
    <section id="contact" className="bg-ink text-bone">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-[#e7b8a2]">
            Contact
          </p>
          <h2 className="mt-3 font-display text-5xl font-semibold uppercase leading-[0.9] tracking-tight md:text-6xl">
            Tell him where you play
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-bone/80">
            The form opens your email app with your name, age, position, club, and message
            already filled in. Rochan reads the note himself.
          </p>
          <dl className="mt-8 space-y-4 text-sm">
            <div>
              <dt className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-bone/60">
                Email
              </dt>
              <dd className="mt-1 text-lg">
                <a className="underline underline-offset-4" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </dd>
            </div>
            {site.phone ? (
              <div>
                <dt className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-bone/60">
                  Phone
                </dt>
                <dd className="mt-1 text-lg">
                  <a className="underline underline-offset-4" href={`tel:${site.phone.replace(/[^\d+]/g, '')}`}>
                    {site.phone}
                  </a>
                </dd>
              </div>
            ) : null}
            {site.location ? (
              <div>
                <dt className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-bone/60">
                  Location
                </dt>
                <dd className="mt-1 text-lg">{site.location}</dd>
              </div>
            ) : null}
          </dl>
        </div>

        <form
          id="enquiry-form"
          className="bg-bone p-5 text-ink sm:p-8 lg:col-span-7"
          onSubmit={onSubmit}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-display text-sm font-semibold uppercase tracking-[0.16em]">
                Name
              </label>
              <input id="name" name="name" type="text" required autoComplete="name" className={fieldClass} />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="age" className="font-display text-sm font-semibold uppercase tracking-[0.16em]">
                Age
              </label>
              <input
                id="age"
                name="age"
                type="number"
                inputMode="numeric"
                min={8}
                max={45}
                required
                className={fieldClass}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="position"
                className="font-display text-sm font-semibold uppercase tracking-[0.16em]"
              >
                Position
              </label>
              <input
                id="position"
                name="position"
                type="text"
                required
                placeholder="For example, winger"
                className={fieldClass}
              />
            </div>
            <div className="flex flex-col gap-2 sm:col-span-2">
              <label htmlFor="club" className="font-display text-sm font-semibold uppercase tracking-[0.16em]">
                Current club or free agent
              </label>
              <input
                id="club"
                name="club"
                type="text"
                required
                placeholder="Club name, or free agent"
                className={fieldClass}
              />
            </div>
            <div className="flex flex-col gap-2 sm:col-span-2">
              <label
                htmlFor="message"
                className="font-display text-sm font-semibold uppercase tracking-[0.16em]"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="What you want help with"
                className={fieldClass}
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 w-full bg-signal px-6 py-3 font-display text-xl font-semibold uppercase tracking-wide text-paper hover:bg-signal-dark sm:w-auto"
          >
            Send enquiry
          </button>
          <p className="mt-4 text-sm leading-relaxed text-muted" role="status">
            {notice || 'This opens your email app. Nothing is stored on this website.'}
          </p>
        </form>
      </div>
    </section>
  )
}
