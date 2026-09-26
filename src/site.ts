/**
 * Editable site details. This is the only file Rochan needs to personalize.
 *
 * Rochan: replace hello@example.com with the real address players should use.
 * Add a phone number and location, or leave them as empty strings to hide them.
 * Social links are full URLs. Leave a social empty to hide it.
 * For a photo, add the image to public/ and set photo to that path
 * (for example "/portrait.jpg"). Leave photo empty until then — the site
 * does not show a stand-in portrait.
 */
export const site: {
  name: string
  role: string
  email: string
  phone: string
  location: string
  photo: string
  socials: {
    instagram: string
    linkedin: string
    x: string
  }
} = {
  name: 'Rochan Park',
  role: 'FIFA Football Agent',
  // Rochan: replace this with your real email before you publish.
  email: 'hello@example.com',
  phone: '',
  location: '',
  photo: '',
  socials: {
    instagram: '',
    linkedin: '',
    x: '',
  },
}

export const nav = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#players', label: 'Players' },
  { href: '#process', label: 'How it works' },
  { href: '#contact', label: 'Contact' },
] as const
