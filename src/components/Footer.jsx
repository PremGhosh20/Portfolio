import { Link } from 'react-scroll'
import { Mail, Download, ArrowUp } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { NAV_LINKS, SITE_CONFIG } from '../constants'
import { IconButton } from '../components/ui/Button'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-divider" />
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              <span className="nav-logo-mark">PG</span>
              Prem Shrikant Ghosh
            </div>
            <p className="t-muted" style={{ maxWidth: '320px', fontSize: '0.9375rem' }}>
              Full Stack Developer building modern, scalable web applications.
            </p>
          </div>

          <div>
            <p style={{ fontWeight: 600, color: 'var(--text)', marginBottom: '1rem', fontSize: '0.9375rem' }}>Navigation</p>
            <ul className="footer-links">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} spy smooth offset={-72} className="link-underline">{l.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p style={{ fontWeight: 600, color: 'var(--text)', marginBottom: '1rem', fontSize: '0.9375rem' }}>Connect</p>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
              <IconButton href={SITE_CONFIG.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub size={16} /></IconButton>
              <IconButton href={SITE_CONFIG.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin size={16} /></IconButton>
              <IconButton href={`mailto:${SITE_CONFIG.email}`} aria-label="Email"><Mail size={16} /></IconButton>
              <IconButton href={SITE_CONFIG.resumePath} download aria-label="Resume"><Download size={16} /></IconButton>
            </div>
            <p className="t-muted" style={{ fontSize: '0.875rem' }}>{SITE_CONFIG.email}</p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Prem Shrikant Ghosh</span>
          <span>Crafted with precision</span>
        </div>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="back-top"
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  )
}
