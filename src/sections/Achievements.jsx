import { Trophy, Star, Briefcase, Rocket, Cloud } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import { ACHIEVEMENTS } from '../constants'
import { useCounter } from '../hooks/useCounter'

const iconMap = { trophy: Trophy, star: Star, briefcase: Briefcase, rocket: Rocket, cloud: Cloud }

function CgpiCounter() {
  const [count, ref] = useCounter(9.53, 1800, 2)
  return <div ref={ref} className="achievement-num">CGPI {count}</div>
}

function AchievementCard({ item, index }) {
  const Icon = iconMap[item.icon] || Star
  const isCgpi = item.title === 'CGPI 9.53'

  return (
    <Reveal delay={index * 0.06}>
      <div className="achievement-spotlight card--glow">
        <div className="achievement-icon"><Icon size={26} /></div>
        {isCgpi ? (
          <CgpiCounter />
        ) : (
          <p className="t-card" style={{ fontSize: item.title.length > 20 ? '1rem' : '1.25rem' }}>{item.title}</p>
        )}
        <p className="t-muted" style={{ marginTop: '0.5rem', fontSize: '0.9375rem' }}>{item.description}</p>
      </div>
    </Reveal>
  )
}

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <Reveal>
          <SectionHeading
            label="Highlights"
            title="Achievements"
            subtitle="Milestones that define my journey as a developer."
          />
        </Reveal>

        <div className="achievements-grid">
          {ACHIEVEMENTS.map((item, i) => (
            <AchievementCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
