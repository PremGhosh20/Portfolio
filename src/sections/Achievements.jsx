import { Trophy, Star, Briefcase, Rocket, Code2, TrendingUp } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import { ACHIEVEMENTS } from '../constants'
import { useCounter } from '../hooks/useCounter'

const iconMap = {
  trophy: Trophy,
  star: Star,
  briefcase: Briefcase,
  rocket: Rocket,
  code: Code2,
  growth: TrendingUp,
}

function Metric({ metric }) {
  const [count, ref] = useCounter(metric.value, 1800, metric.decimals || 0)
  return <div ref={ref} className="achievement-num">{metric.prefix || ''}{count}{metric.suffix || ''}</div>
}

function AchievementCard({ item, index }) {
  const Icon = iconMap[item.icon] || Star

  return (
    <Reveal delay={index * 0.06}>
      <div className="achievement-spotlight card--glow">
        <div className="achievement-icon"><Icon size={26} /></div>
        {item.metric ? (
          <Metric metric={item.metric} />
        ) : (
          <p className="t-card" style={{ fontSize: item.title.length > 20 ? '1rem' : '1.25rem' }}>{item.title}</p>
        )}
        {item.metric && (
          <p className="t-card" style={{ fontSize: '1rem', marginTop: '0.35rem' }}>{item.title}</p>
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
            subtitle="Academic and professional milestones from internships, projects, and coursework."
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
