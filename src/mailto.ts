export type PlayerEnquiry = {
  name: string
  age: string
  nationality: string
  position: string
  club: string
  freeAgent: boolean
  message: string
}

/** Opens the visitor's email app with the enquiry filled in. No data is stored. */
export function buildPlayerEnquiryMailto(email: string, enquiry: PlayerEnquiry): string {
  const subject = `Player enquiry — ${enquiry.name.trim()}`
  const body = [
    `Name: ${enquiry.name.trim()}`,
    `Age: ${enquiry.age.trim()}`,
    `Nationality: ${enquiry.nationality.trim()}`,
    `Position: ${enquiry.position.trim()}`,
    `Current or previous club: ${enquiry.club.trim()}`,
    `Free agent: ${enquiry.freeAgent ? 'Yes' : 'No'}`,
    '',
    enquiry.message.trim(),
  ].join('\n')

  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export function openMailto(href: string) {
  const anchor = document.createElement('a')
  anchor.href = href
  document.body.append(anchor)
  anchor.click()
  anchor.remove()
}
