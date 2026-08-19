import { Compass } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import { TECHNICAL_INTERESTS } from '../constants'

export default function Interests() {
  return (
    <section id="interests" className="section section--alt">
      <div className="container">
        <Reveal>
          <SectionHeading
            label="Direction"
            title="Areas of Technical Interest"
            subtitle="Topics I am studying and growing toward — not presented as professional specialization."
          />
        </Reveal>

        <div className="interests-grid">
          {TECHNICAL_INTERESTS.map((item, i) => (
            <Reveal key={item} delay={i * 0.04}>
              <div className="interest-card">
                <div className="interest-icon"><Compass size={18} /></div>
                <p className="interest-title">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
