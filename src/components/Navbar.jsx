import { Link } from 'react-scroll'
import { Download, Sun, Moon, Search } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { NAV_LINKS, SITE_CONFIG } from '../constants'
import { useTheme } from '../hooks/useTheme'
import { useActiveSection } from '../hooks/useActiveSection'
import { useCommandPalette } from '../hooks/useCommandPalette'
import Button, { IconButton } from '../components/ui/Button'

const OFFSET = -72

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const { openPalette } = useCommandPalette()
  const active = useActiveSection(NAV_LINKS.map((l) => l.to))

  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link to="hero" spy smooth offset={OFFSET} className="nav-logo">
          <span className="nav-logo-mark">PG</span>
          <span className="nav-logo-name">Prem Ghosh</span>
        </Link>

        <nav className="nav-links">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy smooth offset={OFFSET}
              className={`nav-link ${active === link.to ? 'nav-link--active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            type="button"
            className="nav-search"
            onClick={openPalette}
            aria-label="Search portfolio (Ctrl+K)"
          >
            <Search size={15} strokeWidth={2.25} />
            <span className="nav-search-label">Search</span>
            <kbd className="nav-search-kbd">
              <span>Ctrl</span>
              <span>K</span>
            </kbd>
          </button>
          <IconButton href={SITE_CONFIG.github} target="_blank" rel="noopener noreferrer" className="nav-action-hide-sm" aria-label="GitHub">
            <FaGithub size={16} />
          </IconButton>
          <IconButton href={SITE_CONFIG.linkedin} target="_blank" rel="noopener noreferrer" className="nav-action-hide-sm" aria-label="LinkedIn">
            <FaLinkedin size={16} />
          </IconButton>
          <IconButton onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </IconButton>
          <Button variant="primary" size="sm" href={SITE_CONFIG.resumePath} download className="nav-action-hide-sm">
            <Download size={14} /> Resume
          </Button>
        </div>
      </div>
    </header>
  )
}
