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
              <div className="edu-card">
                <div className="edu-icon"><GraduationCap size={22} /></div>
                <div className="edu-body">
                  <div className="edu-title-row">
                    <h3 className="edu-degree">{edu.degree}</h3>
                    {edu.status && (
                      <Badge variant={edu.status === 'Completed' ? 'muted' : 'success'}>
                        {edu.status}
                      </Badge>
                    )}
                  </div>
                  <p className="exp-role">{edu.institution}</p>
                  <div className="edu-footer">
                    <span className="edu-period">{edu.period}</span>
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
