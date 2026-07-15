import { MessageCircle } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import Tilt from 'react-parallax-tilt'
import SectionHeading from '../components/ui/SectionHeading'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Reveal from '../components/ui/Reveal'
import { PROJECTS, getProjectWhatsAppLink } from '../constants'

const GRADIENT_MAP = {
  'from-blue-600 to-cyan-500': 'linear-gradient(135deg, #2563eb, #06b6d4)',
  'from-violet-600 to-purple-500': 'linear-gradient(135deg, #7c3aed, #a855f7)',
  'from-red-600 to-orange-500': 'linear-gradient(135deg, #dc2626, #f97316)',
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal>
          <SectionHeading
            label="Portfolio"
            title="Featured Projects"
            subtitle="Full-stack applications built with modern technologies — each one a case study in problem-solving."
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
                        <Badge variant={project.status === 'In Production' ? 'success' : 'default'} style={{ fontSize: '0.6875rem' }}>
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
                          href={getProjectWhatsAppLink(project)}
                          target="_blank"
                          rel="noopener noreferrer"
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
    </section>
  )
}
