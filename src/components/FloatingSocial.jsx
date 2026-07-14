import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { SITE_CONFIG } from '../constants'
import { IconButton } from '../components/ui/Button'

export default function FloatingSocial() {
  const links = [
    { icon: FaGithub, href: SITE_CONFIG.github, label: 'GitHub' },
    { icon: FaLinkedin, href: SITE_CONFIG.linkedin, label: 'LinkedIn' },
    { icon: FaEnvelope, href: `mailto:${SITE_CONFIG.email}`, label: 'Email' },
  ]

  return (
    <div className="fixed left-5 top-1/2 -translate-y-1/2 z-[9980] hidden xl:flex flex-col gap-3">
      {links.map(({ icon: Icon, href, label }) => (
        <IconButton
          key={label}
          href={href}
          target={href.startsWith('mailto') ? undefined : '_blank'}
          rel="noopener noreferrer"
          aria-label={label}
        >
          <Icon size={18} />
        </IconButton>
      ))}
      <div className="w-px h-12 bg-border mx-auto mt-1" />
    </div>
  )
}
