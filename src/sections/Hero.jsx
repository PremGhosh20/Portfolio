import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import Typed from 'typed.js'
import { useEffect, useRef } from 'react'
import { Download, ArrowDown, FolderOpen } from 'lucide-react'
import { SITE_CONFIG, TYPED_STRINGS, HERO_SUMMARY, STATS } from '../constants'
import Button from '../components/ui/Button'
import Reveal from '../components/ui/Reveal'
import HeroVisual from '../components/effects/HeroVisual'
import { useCounter } from '../hooks/useCounter'

function StatFloat({ stat }) {
  const [count, ref] = useCounter(stat.value, 1800, stat.decimals || 0)
  return (
    <div ref={ref} className="stat-float">
      <div className="stat-float-val">{count}{stat.suffix}</div>
      <div className="stat-float-label">{stat.label}</div>
    </div>
  )
}

export default function Hero() {
  const typedRef = useRef(null)

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: TYPED_STRINGS,
      typeSpeed: 45,
      backSpeed: 28,
      backDelay: 2200,
      loop: true,
    })
    return () => typed.destroy()
  }, [])

  const lastName = SITE_CONFIG.name.split(' ').slice(-1)[0]
  const firstNames = SITE_CONFIG.name.split(' ').slice(0, -1).join(' ')

  return (
    <section id="hero" className="hero">
      <div className="hero-bg" />
      <div className="container hero-grid">
        <Reveal>
          <span className="t-label">Hello, I'm</span>
          <h1 className="t-hero" style={{ marginTop: '1rem' }}>
            {firstNames}{' '}
            <span className="t-gradient">{lastName}</span>
          </h1>
          <div style={{ height: '2.25rem', marginTop: '1rem' }}>
            <span ref={typedRef} style={{ fontSize: '1.25rem', fontWeight: 600, color: '#60a5fa' }} />
          </div>
          <p className="t-body hero-summary">{HERO_SUMMARY}</p>
          <div className="hero-ctas">
            <Link to="projects" spy smooth offset={-80} duration={600}>
              <Button variant="primary" size="lg">
                <FolderOpen size={18} /> View Projects
              </Button>
            </Link>
            <Button variant="outline" size="lg" href={SITE_CONFIG.resumePath} download>
              <Download size={18} /> Download Resume
            </Button>
          </div>
          <div className="stat-floats">
            {STATS.slice(0, 4).map((s) => (
              <StatFloat key={s.label} stat={s} />
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <HeroVisual />
        </Reveal>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}
        className="hidden md:flex"
      >
        <Link to="about" spy smooth offset={-80} className="t-muted link-underline" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem', fontSize: '0.75rem' }}>
          Scroll
          <ArrowDown size={16} className="animate-bounce" />
        </Link>
      </motion.div>
    </section>
  )
}
