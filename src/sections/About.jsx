import { MapPin } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import { ABOUT_CONTENT } from '../constants'

const milestones = [
  { year: '2023', title: 'Started BSc IT', desc: 'University of Mumbai' },
  { year: '2026', title: 'First Internship', desc: 'ElevanceSkills — Full Stack Developer' },
  { year: '2026', title: 'Software Engineer Intern', desc: 'Gohil Tech Empire — Way To Event' },
  { year: 'Now', title: 'Web Trainee', desc: 'BrandBase Capsule Pvt. Ltd.' },
]

export default function About() {
  return (
    <section id="about" className="section section--alt">
      <div className="container">
        <Reveal>
          <SectionHeading
            label="About"
            title="About Me"
            subtitle="Passionate developer with a drive for building impactful digital solutions."
          />
        </Reveal>

        <div className="about-layout">
          <Reveal delay={0.1}>
            <aside>
              <div className="card card-pad-lg" style={{ textAlign: 'center' }}>
                <div className="about-avatar" style={{ margin: '0 auto 1.5rem' }}>PG</div>
                <h3 className="t-card" style={{ fontSize: '1.25rem' }}>Prem Shrikant Ghosh</h3>
                <p className="exp-role">Full Stack Developer</p>
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
                {milestones.map((m, i) => (
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
