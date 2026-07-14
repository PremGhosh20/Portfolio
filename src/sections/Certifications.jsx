import { Code2, Brain, Cpu, GraduationCap, Award } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import Badge from '../components/ui/Badge'
import Reveal from '../components/ui/Reveal'
import { CERTIFICATIONS } from '../constants'

const iconMap = { code: Code2, ai: Brain, claude: Cpu, computer: GraduationCap }

export default function Certifications() {
  return (
    <section id="certifications" className="section section--alt">
      <div className="container">
        <Reveal>
          <SectionHeading
            label="Credentials"
            title="Certifications"
            subtitle="Professional certifications and continuous learning."
          />
        </Reveal>

        <div className="certs-grid">
          {CERTIFICATIONS.map((cert, i) => {
            const Icon = iconMap[cert.icon] || Award
            return (
              <Reveal key={cert.title} delay={i * 0.06}>
                <div className="cert-card card--glow">
                  <div className="cert-icon-wrap"><Icon size={24} /></div>
                  <h3 className="t-card" style={{ fontSize: '1.125rem' }}>{cert.title}</h3>
                  <p className="t-muted" style={{ marginTop: '0.375rem', fontSize: '0.9375rem' }}>{cert.issuer}</p>
                  <span className="cert-credential">Verified Credential</span>
                  <Badge variant="accent" style={{ marginTop: '0.75rem' }}>Certified</Badge>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
