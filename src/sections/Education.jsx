import { GraduationCap } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import Badge from '../components/ui/Badge'
import Reveal from '../components/ui/Reveal'
import { EDUCATION } from '../constants'

export default function Education() {
  return (
    <section id="education" className="section section--alt">
      <div className="container">
        <Reveal>
          <SectionHeading
            label="Academics"
            title="Education"
            subtitle="Academic foundation in Information Technology."
          />
        </Reveal>

        <div className="edu-timeline">
          {EDUCATION.map((edu, i) => (
            <Reveal key={edu.degree} delay={i * 0.08}>
              <div className="edu-card card--glow">
                <div className="edu-icon"><GraduationCap size={24} /></div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.5rem', marginBottom: '0.375rem' }}>
                    <h3 className="t-card" style={{ fontSize: '1.125rem' }}>{edu.degree}</h3>
                    {edu.status && (
                      <Badge variant={edu.status === 'Completed' ? 'muted' : 'success'}>
                        {edu.status}
                      </Badge>
                    )}
                  </div>
                  <p className="exp-role">{edu.institution}</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
                    <span className="t-muted" style={{ fontSize: '0.9375rem' }}>{edu.period}</span>
                    <Badge variant="accent">{edu.highlight}</Badge>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
