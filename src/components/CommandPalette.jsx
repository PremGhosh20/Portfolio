import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search } from 'lucide-react'
import { COMMAND_ITEMS, SITE_CONFIG } from '../constants'
import { useTheme } from '../hooks/useTheme'
import { copyToClipboard, scrollToSection } from '../utils'

export default function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const { toggleTheme } = useTheme()

  const handleAction = useCallback(
    (action) => {
      setOpen(false)
      setQuery('')
      switch (action) {
        case 'resume':
          window.open(SITE_CONFIG.resumePath, '_blank')
          break
        case 'theme':
          toggleTheme()
          break
        case 'email':
          copyToClipboard(SITE_CONFIG.email)
          break
        case 'github':
          window.open(SITE_CONFIG.github, '_blank')
          break
        case 'linkedin':
          window.open(SITE_CONFIG.linkedin, '_blank')
          break
        default:
          scrollToSection(action)
      }
    },
    [toggleTheme],
  )

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        setOpen((o) => !o)
      }
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const filtered = COMMAND_ITEMS.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase()),
  )

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] flex items-start justify-center pt-[18vh] bg-black/50 backdrop-blur-sm px-4"
            onClick={() => setOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -12 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg bg-card border border-border rounded-[20px] overflow-hidden shadow-[var(--shadow-card-hover)]"
            >
              <div className="flex items-center gap-3 px-5 py-4 border-b border-border">
                <Search className="w-5 h-5 text-muted shrink-0" />
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Type a command or search..."
                  className="flex-1 bg-transparent text-primary-fg placeholder:text-muted outline-none text-base"
                />
                <kbd className="hidden sm:inline px-2 py-1 text-xs text-muted bg-bg-secondary rounded-md border border-border">
                  ESC
                </kbd>
              </div>
              <div className="max-h-72 overflow-y-auto py-2">
                {filtered.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleAction(item.action)}
                    className="w-full flex items-center justify-between px-5 py-3 text-sm text-left text-text-secondary hover:bg-bg-secondary hover:text-primary-fg transition-colors cursor-pointer"
                  >
                    <span>{item.label}</span>
                    <span className="text-xs text-muted">{item.category}</span>
                  </button>
                ))}
                {filtered.length === 0 && (
                  <p className="px-5 py-8 text-sm text-muted text-center">No results found</p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-24 right-6 z-[9990] hidden md:flex items-center gap-2 px-3 py-2 text-xs text-muted bg-card border border-border rounded-[14px] hover:text-primary-fg hover:border-border-hover transition-colors cursor-pointer"
        aria-label="Open command palette"
      >
        <Search className="w-3.5 h-3.5" />
        <kbd className="px-1.5 py-0.5 bg-bg-secondary rounded border border-border">Ctrl+K</kbd>
      </button>
    </>
  )
}
