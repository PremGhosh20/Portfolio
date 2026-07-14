import { Building2, CheckCircle2 } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import Badge from '../components/ui/Badge'
import Reveal from '../components/ui/Reveal'
import { EXPERIENCE } from '../constants'

const EXP_TECH = {
  'Gohil Tech Empire Pvt. Ltd.': ['Next.js', 'Supabase', 'TypeScript'],
}

export default function Experience() {
  return (
    <section id="experience" className="section section--alt">
      <div className="container">
        <Reveal>
          <SectionHeading
            label="Career"
            title="Professional Experience"
            subtitle="Building real products across startups and technology companies."
          />
        </Reveal>

        <div className="exp-timeline">
          {EXPERIENCE.map((exp, i) => (
            <Reveal key={exp.company} delay={i * 0.1}>
              <div className="exp-item">
                <div className="exp-dot" />
                <div className="card exp-card card--hover">
                  <div className="exp-header">
                    <div className="exp-logo"><Building2 size={20} /></div>
                    <div className="exp-meta">
                      <div className="exp-title-row">
                        <h3 className="exp-company">{exp.company}</h3>
                        {exp.current && <Badge variant="success">Current</Badge>}
                      </div>
                      <p className="exp-role">{exp.role}</p>
                      <div className="exp-period">
                        <Badge variant="muted">{exp.period}</Badge>
                      </div>
                    </div>
                  </div>

                  {exp.project && (
                    <div className="panel exp-project">
                      <p className="exp-project-title">Project: {exp.project}</p>
                      <p className="t-muted" style={{ fontSize: '0.9375rem' }}>{exp.description}</p>
                      {EXP_TECH[exp.company] && (
                        <div className="chip-row" style={{ marginTop: '0.75rem' }}>
                          {EXP_TECH[exp.company].map((t) => (
                            <Badge key={t} variant="accent">{t}</Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  <ul className="exp-list">
                    {exp.responsibilities.map((item) => (
                      <li key={item}>
                        <CheckCircle2 size={16} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
