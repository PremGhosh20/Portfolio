import { Loader2 } from 'lucide-react'
import { cn } from '../../utils'

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  loading,
  disabled,
  iconOnly,
  href,
  download,
  type = 'button',
  onClick,
  ...props
}) {
  const Tag = href ? 'a' : 'button'
  const isDisabled = disabled || loading

  const variants = {
    primary: 'btn--primary',
    secondary: 'btn--ghost',
    outline: 'btn--ghost',
    icon: 'btn--icon',
  }
  const sizes = { sm: 'btn--sm', md: '', lg: 'btn--lg', icon: 'btn--icon' }

  return (
    <Tag
      href={href}
      download={download}
      type={href ? undefined : type}
      disabled={isDisabled}
      onClick={onClick}
      className={cn(
        'btn',
        variants[iconOnly ? 'icon' : variant],
        sizes[iconOnly ? 'icon' : size],
        isDisabled && 'opacity-50 pointer-events-none',
        className,
      )}
      {...props}
    >
      {loading && <Loader2 className="animate-spin" size={16} />}
      {children}
    </Tag>
  )
}

export function IconButton(props) {
  return <Button iconOnly {...props} />
}
