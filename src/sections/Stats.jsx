import { STATS } from '../constants'
import { useCounter } from '../hooks/useCounter'
import Reveal from '../components/ui/Reveal'

function StatCell({ stat }) {
  const [count, ref] = useCounter(stat.value, 1800, stat.decimals || 0)
  return (
    <div ref={ref} className="stats-bar-cell">
      <div className="stat-float-val">{count}{stat.suffix}</div>
      <div className="stat-float-label">{stat.label}</div>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="stats-bar" style={{ paddingBottom: 'var(--section-y)' }}>
      <div className="container">
        <Reveal>
          <div className="stats-bar-inner card">
            {STATS.map((stat) => (
              <StatCell key={stat.label} stat={stat} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
