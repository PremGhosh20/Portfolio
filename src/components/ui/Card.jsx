import { cn } from '../../utils'
import { paddingStyles } from './cardStyles'

export default function Card({
  children,
  className,
  hover = true,
  accentTop = false,
  padding = 'md',
  stretch = false,
  clip = true,
  as: Tag = 'div',
  ...props
}) {
  const paddingClass = paddingStyles[padding] ?? paddingStyles.md

  return (
    <Tag
      className={cn(
        'ui-card',
        hover && 'ui-card-interactive',
        accentTop && 'card-accent-top',
        clip && 'overflow-hidden',
        stretch && 'h-full flex flex-col',
        paddingClass,
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}

export function CardContent({ children, className }) {
  return (
    <div className={cn('flex flex-col flex-1 gap-4', className)}>
      {children}
    </div>
  )
}

export function CardPanel({ children, className }) {
  return (
    <div className={cn('ui-panel', className)}>
      {children}
    </div>
  )
}
