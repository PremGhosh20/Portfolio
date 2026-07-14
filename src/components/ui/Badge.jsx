import { cn } from '../../utils'

export default function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default: 'badge--primary',
    muted: 'badge',
    success: 'badge--success',
    accent: 'badge--accent',
  }
  return (
    <span className={cn('badge', variants[variant] || variants.default, className)}>
      {children}
    </span>
  )
}
