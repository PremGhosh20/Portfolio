import { MapPin } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import { ABOUT_CONTENT, ABOUT_MILESTONES, SITE_CONFIG } from '../constants'

export default function About() {
  return (
    <section id="about" className="section section--alt">
      <div className="container">
        <Reveal>
          <SectionHeading
            label="About"
            title="About Me"
            subtitle="Software engineering and full-stack development, with a growing focus on AI systems."
          />
        </Reveal>

        <div className="about-layout">
          <Reveal delay={0.1}>
            <aside>
              <div className="card card-pad-lg" style={{ textAlign: 'center' }}>
                <div className="about-avatar" style={{ margin: '0 auto 1.5rem' }}>PG</div>
                <h3 className="t-card" style={{ fontSize: '1.25rem' }}>{SITE_CONFIG.name}</h3>
                <p className="exp-role">{SITE_CONFIG.title}</p>
                <p className="t-muted" style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>{SITE_CONFIG.location}</p>
              </div>
              <div className="card card-pad" style={{ marginTop: '1.25rem', display: 'flex', gap: '1rem' }}>
                <div className="contact-icon"><MapPin size={20} /></div>
                <div>
                  <p className="t-label" style={{ marginBottom: '0.375rem', fontSize: '0.6875rem' }}>Current Position</p>
                  <p className="t-body" style={{ fontSize: '0.9375rem' }}>{ABOUT_CONTENT.currentPosition}</p>
                </div>
              </div>
            </aside>
          </Reveal>

          <div>
            <Reveal delay={0.15}>
              <p className="t-body">{ABOUT_CONTENT.intro}</p>
            </Reveal>
            <Reveal delay={0.2}>
              <div style={{ marginTop: '2rem' }}>
                <h3 className="t-card" style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Career Journey</h3>
                <p className="t-muted">{ABOUT_CONTENT.journey}</p>
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <div style={{ marginTop: '2rem' }}>
                <h3 className="t-card" style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Professional Goals</h3>
                <p className="t-muted">{ABOUT_CONTENT.goals}</p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="milestone-grid">
                {ABOUT_MILESTONES.map((m) => (
                  <div key={`${m.year}-${m.title}`} className="milestone-card">
                    <span className="timeline-year">{m.year}</span>
                    <p className="timeline-title">{m.title}</p>
                    <p className="t-muted" style={{ fontSize: '0.875rem', marginTop: '0.25rem' }}>{m.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
