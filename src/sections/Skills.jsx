import { Layout, Server, Database, Wrench, Cloud, Brain } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import { SKILLS } from '../constants'
import { getGroupedSkills, SKILL_ICONS, SKILL_DESCRIPTIONS } from '../utils/skillMeta'

const CATEGORY_META = {
  Frontend: { icon: Layout, color: '#61DAFB' },
  Backend: { icon: Server, color: '#339933' },
  Database: { icon: Database, color: '#47A248' },
  Tools: { icon: Wrench, color: '#94a3b8' },
  Cloud: { icon: Cloud, color: '#3b82f6' },
  'AI Tools': { icon: Brain, color: '#a78bfa' },
}

export default function Skills() {
  const groups = getGroupedSkills(SKILLS)

  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal>
          <SectionHeading
            label="Expertise"
            title="Skills & Technologies"
            subtitle="Technologies and tools I use to build modern web applications."
          />
        </Reveal>

        {Object.entries(groups).map(([category, skills], ci) => {
          if (!skills.length) return null
          const meta = CATEGORY_META[category] || CATEGORY_META.Tools
          const CatIcon = meta.icon
          return (
            <Reveal key={category} delay={ci * 0.05}>
              <div className="skills-category">
                <div className="skills-category-head">
                  <CatIcon size={22} style={{ color: meta.color }} />
                  <h3>{category}</h3>
                </div>
                <div className="skills-grid">
                  {skills.map((skill) => {
                    const Icon = SKILL_ICONS[skill.name]
                    return (
                      <div key={skill.name} className="skill-card card--glow">
                        <div className="skill-icon" style={{ color: meta.color }}>
                          {Icon ? <Icon /> : <CatIcon size={22} />}
                        </div>
                        <h4 className="t-card" style={{ fontSize: '1.125rem' }}>{skill.name}</h4>
                        <p className="t-muted" style={{ fontSize: '0.875rem', marginTop: '0.375rem' }}>
                          {SKILL_DESCRIPTIONS[skill.name] || `${category} technology`}
                        </p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
