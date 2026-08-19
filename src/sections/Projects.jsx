import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { MessageCircle, X, MoreVertical } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import Tilt from 'react-parallax-tilt'
import SectionHeading from '../components/ui/SectionHeading'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Reveal from '../components/ui/Reveal'
import { PROJECTS, getProjectWhatsAppLink } from '../constants'
import { getBrowserContext } from '../utils'

const GRADIENT_MAP = {
  'from-emerald-600 to-teal-500': 'linear-gradient(135deg, #059669, #14b8a6)',
  'from-blue-600 to-cyan-500': 'linear-gradient(135deg, #2563eb, #06b6d4)',
  'from-violet-600 to-purple-500': 'linear-gradient(135deg, #7c3aed, #a855f7)',
  'from-red-600 to-orange-500': 'linear-gradient(135deg, #dc2626, #f97316)',
}

function DemoRequestSheet({ project, onClose }) {
  const whatsappUrl = getProjectWhatsAppLink(project)
  const { inApp, appName } = getBrowserContext()

  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  const openWhatsApp = () => {
    const win = window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    if (!win) window.location.assign(whatsappUrl)
  }

  return createPortal(
    <div className="demo-sheet-root" role="presentation" onClick={onClose}>
      <div
        className={`demo-sheet ${inApp ? 'demo-sheet--inapp' : 'demo-sheet--browser'}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-sheet-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="demo-sheet-head">
          <div>
            <p className="demo-sheet-kicker">Request a demo</p>
            <h3 id="demo-sheet-title" className="demo-sheet-title">{project.title}</h3>
          </div>
          <button type="button" className="demo-sheet-close" onClick={onClose} aria-label="Close">
            <X size={18} />
          </button>
        </div>

        {inApp ? (
          <>
            <div className="demo-sheet-notice" role="status">
              <p className="demo-sheet-notice-title">
                You’re viewing this inside {appName || 'an app'}
              </p>
              <p className="demo-sheet-notice-text">
                WhatsApp cannot open from {appName || 'this app'}’s built-in browser.
                Follow these steps to request a demo:
              </p>
            </div>

            <ol className="demo-sheet-steps">
              <li>
                <span className="demo-sheet-step-num">1</span>
                <span>
                  Tap the <strong className="demo-sheet-menu-icon" aria-label="three vertical dots"><MoreVertical size={16} strokeWidth={2.5} /></strong>
                  {' '}menu (three vertical dots) at the top right.
                </span>
              </li>
              <li>
                <span className="demo-sheet-step-num">2</span>
                <span>
                  Choose <strong>Open in browser</strong> or <strong>Open in Chrome</strong>.
                </span>
              </li>
              <li>
                <span className="demo-sheet-step-num">3</span>
                <span>
                  Open this project again and tap <strong>Request Demo</strong> — WhatsApp will open so you can message me.
                </span>
              </li>
            </ol>

            <Button variant="secondary" size="md" type="button" onClick={onClose} className="demo-sheet-primary">
              Got it
            </Button>
          </>
        ) : (
          <>
            <p className="demo-sheet-text">
              Want to try <strong>{project.title}</strong>? Tap below to message me on WhatsApp
              and I’ll share the live demo access with you.
            </p>

            <div className="demo-sheet-actions">
              <Button variant="primary" size="md" type="button" onClick={openWhatsApp} className="demo-sheet-primary">
                <MessageCircle size={16} /> Message on WhatsApp
              </Button>
            </div>
          </>
        )}
      </div>
    </div>,
    document.body,
  )
}

export default function Projects() {
  const [demoProject, setDemoProject] = useState(null)

  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal>
          <SectionHeading
            label="Portfolio"
            title="Featured Projects"
            subtitle="End-to-end software applications and internship contributions."
          />
        </Reveal>

        <div className="projects-showcase">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.08}>
              <div className="project-wrap">
                <Tilt
                  className="project-tilt"
                  tiltMaxAngleX={4}
                  tiltMaxAngleY={4}
                  scale={1.005}
                  glareEnable={false}
                >
                  <article className={`project-case ${i % 2 === 1 ? 'project-case--reverse' : ''}`}>
                    <div
                      className="project-visual"
                      style={{ background: GRADIENT_MAP[project.gradient] || GRADIENT_MAP['from-blue-600 to-cyan-500'] }}
                    >
                      <span className="project-visual-letter">{project.title.charAt(0)}</span>
                      <div className="project-visual-overlay" />
                      <div className="project-visual-badge">
                        <Badge variant={project.status === 'Internship Contribution' ? 'accent' : project.status === 'In Production' ? 'success' : 'default'} style={{ fontSize: '0.6875rem' }}>
                          {project.status}
                        </Badge>
                      </div>
                    </div>

                    <div className="project-body">
                      <div>
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-subtitle">{project.subtitle}</p>
                      </div>

                      <p className="project-desc">{project.description}</p>

                      {project.note && (
                        <p className="project-note">{project.note}</p>
                      )}

                      {project.contributions && (
                        <div>
                          <p className="project-section-label">My Contribution</p>
                          <ul className="exp-list">
                            {project.contributions.map((c) => (
                              <li key={c}>
                                <span className="exp-bullet" aria-hidden="true">→</span>
                                <span className="exp-text">{c}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {project.features && (
                        <div>
                          <p className="project-section-label">Features</p>
                          <div className="project-features">
                            {project.features.map((f) => (
                              <Badge key={f} variant="muted">{f}</Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="chip-row">
                        {project.tech.map((t) => (
                          <Badge key={t} variant="accent">{t}</Badge>
                        ))}
                      </div>

                      <div className="project-actions">
                        <Button variant="secondary" size="sm" href={project.github} target="_blank" rel="noopener noreferrer">
                          <FaGithub size={13} /> GitHub
                        </Button>
                        <Button
                          variant="primary"
                          size="sm"
                          type="button"
                          onClick={() => setDemoProject(project)}
                        >
                          <MessageCircle size={13} /> Request Demo
                        </Button>
                      </div>
                    </div>
                  </article>
                </Tilt>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {demoProject && (
        <DemoRequestSheet project={demoProject} onClose={() => setDemoProject(null)} />
      )}
    </section>
  )
}
