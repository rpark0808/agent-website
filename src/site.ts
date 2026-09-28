/**
 * Editable site details.
 * Social links are full URLs. Leave a social empty to hide it.
 */
export const site: {
  name: string
  role: string
  license: string
  credential: string
  email: string
  phone: string
  location: string
  photo: string
  logo: string
  socials: {
    instagram: string
    linkedin: string
    x: string
  }
} = {
  name: 'Sukkyun Lewis Lee',
  role: 'FIFA Agent',
  license: 'Licensed FIFA Agent (License ID: 202412-9540)',
  credential: 'Certified FIFA Agent and Lawyer (USA & Canada)',
  email: 'ltp.crew.sports@gmail.com',
  phone: '',
  location: '',
  photo: '',
  logo: `${import.meta.env.BASE_URL}ltp-crew-logo.jpg`,
  socials: {
    instagram: '',
    linkedin: '',
    x: '',
  },
}

export const nav = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'How it works' },
  { href: '#contact', label: 'Contact' },
] as const
