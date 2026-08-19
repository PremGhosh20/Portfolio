import { Layout, Server, Database, Wrench, Brain, Code2, Binary, Compass, Cpu } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import Badge from '../components/ui/Badge'
import Reveal from '../components/ui/Reveal'
import { SKILLS, SOFT_SKILLS } from '../constants'
import { SKILL_ICONS, SKILL_DESCRIPTIONS } from '../utils/skillMeta'

const CATEGORY_META = {
  'Programming Languages': { icon: Code2, color: '#60a5fa' },
  'Core Computer Science': { icon: Binary, color: '#38bdf8' },
  'AI / ML': { icon: Brain, color: '#a78bfa' },
  'Currently Exploring': { icon: Compass, color: '#fbbf24' },
  Frontend: { icon: Layout, color: '#61DAFB' },
  Backend: { icon: Server, color: '#339933' },
  Databases: { icon: Database, color: '#47A248' },
  'Development Tools': { icon: Wrench, color: '#94a3b8' },
  'Software Engineering': { icon: Cpu, color: '#818cf8' },
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal>
          <SectionHeading
            label="Expertise"
            title="Skills & Technologies"
            subtitle="Software engineering and full-stack skills, with a clearly marked set of AI/ML topics I am actively exploring."
          />
        </Reveal>

        {Object.entries(SKILLS).map(([category, skills], ci) => {
          if (!skills.length) return null
          const meta = CATEGORY_META[category] || CATEGORY_META['Development Tools']
          const CatIcon = meta.icon
          const exploring = category === 'Currently Exploring'
          return (
            <Reveal key={category} delay={ci * 0.05}>
              <div className={`skills-category ${exploring ? 'skills-category--exploring' : ''}`}>
                <div className="skills-category-head">
                  <CatIcon size={22} style={{ color: meta.color }} />
                  <h3>{category}</h3>
                  {exploring && <Badge variant="muted">Learning</Badge>}
                </div>
                {exploring && (
                  <p className="skills-exploring-note">
                    These tools and topics are areas I am actively studying. They are not claimed as professional work experience.
                  </p>
                )}
                <div className="skills-grid">
                  {skills.map((skill) => {
                    const Icon = SKILL_ICONS[skill.name]
                    return (
                      <div
                        key={`${category}-${skill.name}`}
                        className={`skill-card card--glow ${exploring ? 'skill-card--exploring' : ''}`}
                      >
                        <div className="skill-icon" style={{ color: meta.color }}>
                          {Icon ? <Icon /> : <CatIcon size={22} />}
                        </div>
                        <h4 className="t-card" style={{ fontSize: '1.125rem' }}>{skill.name}</h4>
                        <p className="t-muted" style={{ fontSize: '0.875rem', marginTop: '0.375rem' }}>
                          {SKILL_DESCRIPTIONS[skill.name] || `${category} skill`}
                        </p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </Reveal>
          )
        })}

        <Reveal delay={0.1}>
          <div className="skills-category">
            <div className="skills-category-head">
              <h3>Soft Skills</h3>
            </div>
            <div className="soft-skills-row">
              {SOFT_SKILLS.map((skill) => (
                <Badge key={skill} variant="accent">{skill}</Badge>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
