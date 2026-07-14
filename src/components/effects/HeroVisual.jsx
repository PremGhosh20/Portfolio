import { motion } from 'framer-motion'
import {
  SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiJavascript, SiGit,
} from 'react-icons/si'
import { SITE_CONFIG } from '../../constants'

const TECH_STACK = [
  { Icon: SiReact, label: 'React', color: '#61DAFB' },
  { Icon: SiNextdotjs, label: 'Next.js', color: '#ffffff' },
  { Icon: SiNodedotjs, label: 'Node.js', color: '#339933' },
  { Icon: SiMongodb, label: 'MongoDB', color: '#47A248' },
  { Icon: SiJavascript, label: 'JavaScript', color: '#F7DF1E' },
  { Icon: SiGit, label: 'Git', color: '#F05032' },
]

export default function HeroVisual() {
  return (
    <div className="hero-visual-wrap" aria-hidden="true">
      <motion.div
        className="hero-terminal"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.5 }}
      >
        <div className="hero-terminal-bar">
          <span className="hero-terminal-dot" style={{ background: '#ef4444' }} />
          <span className="hero-terminal-dot" style={{ background: '#eab308' }} />
          <span className="hero-terminal-dot" style={{ background: '#22c55e' }} />
          <span className="hero-terminal-title">developer.js</span>
        </div>
        <div className="hero-terminal-body">
          <p><span className="hero-code-kw">const</span> developer = {'{'}</p>
          <p>&nbsp;&nbsp;name: <span className="hero-code-str">"{SITE_CONFIG.shortName}"</span>,</p>
          <p>&nbsp;&nbsp;role: <span className="hero-code-str">"{SITE_CONFIG.title}"</span>,</p>
          <p>&nbsp;&nbsp;stack: [<span className="hero-code-str">"React"</span>, <span className="hero-code-str">"Node.js"</span>, <span className="hero-code-str">"Next.js"</span>],</p>
          <p>&nbsp;&nbsp;passion: <span className="hero-code-str">"Building products"</span></p>
          <p>{'};'}</p>
        </div>
      </motion.div>

      <motion.div
        className="hero-tech-row"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.5 }}
      >
        {TECH_STACK.map(({ Icon, label, color }) => (
          <div key={label} className="hero-tech-chip">
            <span className="hero-tech-chip-icon" style={{ color }}>
              <Icon />
            </span>
            <span className="hero-tech-chip-label">{label}</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
