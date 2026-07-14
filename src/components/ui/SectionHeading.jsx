import { cn } from '../../utils'

export default function SectionHeading({ title, subtitle, label, align = 'center', className }) {
  return (
    <header className={cn('section-head', align === 'center' && 'section-head--center', className)}>
      {label && <span className="t-label">{label}</span>}
      <h2 className="t-section">{title}</h2>
      {subtitle && <p className="t-section-sub">{subtitle}</p>}
    </header>
  )
}
