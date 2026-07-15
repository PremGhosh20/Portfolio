import { useState, useEffect, useCallback, useMemo, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search,
  Home,
  User,
  Sparkles,
  Briefcase,
  FolderOpen,
  Mail,
  Download,
  SunMoon,
  Copy,
  X,
} from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { COMMAND_ITEMS, SITE_CONFIG } from '../constants'
import { useTheme } from '../hooks/useTheme'
import { useCommandPalette } from '../hooks/useCommandPalette'
import { copyToClipboard, scrollToSection } from '../utils'

const ICON_MAP = {
  home: Home,
  user: User,
  sparkles: Sparkles,
  briefcase: Briefcase,
  folder: FolderOpen,
  mail: Mail,
  download: Download,
  theme: SunMoon,
  copy: Copy,
  github: FaGithub,
  linkedin: FaLinkedin,
}

const CATEGORY_ORDER = ['Navigation', 'Actions', 'Social']

function CommandIcon({ name }) {
  const Icon = ICON_MAP[name] || Search
  return <Icon size={18} />
}

export default function CommandPalette() {
  const { open, setOpen, closePalette } = useCommandPalette()
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)
  const listRef = useRef(null)
  const { toggleTheme } = useTheme()

  const close = useCallback(() => {
    closePalette()
    setQuery('')
    setActiveIndex(0)
  }, [closePalette])

  const handleAction = useCallback(
    (action) => {
      close()
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
    [close, toggleTheme],
  )

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return COMMAND_ITEMS
    return COMMAND_ITEMS.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q),
    )
  }, [query])

  const grouped = useMemo(() => {
    const map = {}
    for (const cat of CATEGORY_ORDER) map[cat] = []
    for (const item of filtered) {
      if (!map[item.category]) map[item.category] = []
      map[item.category].push(item)
    }
    return CATEGORY_ORDER.filter((cat) => map[cat]?.length).map((cat) => ({
      category: cat,
      items: map[cat],
    }))
  }, [filtered])

  useEffect(() => {
    setActiveIndex(0)
  }, [query])

  useEffect(() => {
    if (!open || !listRef.current) return
    const el = listRef.current.querySelector(`[data-cmd-index="${activeIndex}"]`)
    el?.scrollIntoView({ block: 'nearest' })
  }, [activeIndex, open])

  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen((prev) => {
          if (prev) {
            setQuery('')
            setActiveIndex(0)
            return false
          }
          return true
        })
        return
      }
      if (!open) return

      if (e.key === 'Escape') {
        e.preventDefault()
        close()
        return
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setActiveIndex((i) => Math.min(i + 1, Math.max(filtered.length - 1, 0)))
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault()
        setActiveIndex((i) => Math.max(i - 1, 0))
      }
      if (e.key === 'Enter' && filtered[activeIndex]) {
        e.preventDefault()
        handleAction(filtered[activeIndex].action)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, filtered, activeIndex, handleAction, close, setOpen])

  useEffect(() => {
    if (!open) return

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.documentElement.classList.add('cmd-open')
    window.dispatchEvent(new Event('portfolio:scroll-lock'))
    window.__lenis?.stop?.()

    const onWheel = (e) => {
      const list = listRef.current
      if (list && list.contains(e.target)) {
        const { scrollTop, scrollHeight, clientHeight } = list
        const atTop = scrollTop <= 0 && e.deltaY < 0
        const atBottom = scrollTop + clientHeight >= scrollHeight - 1 && e.deltaY > 0
        if (atTop || atBottom) e.preventDefault()
        e.stopPropagation()
        return
      }
      e.preventDefault()
    }

    const onTouchMove = (e) => {
      const list = listRef.current
      if (list && list.contains(e.target)) return
      e.preventDefault()
    }

    document.addEventListener('wheel', onWheel, { passive: false, capture: true })
    document.addEventListener('touchmove', onTouchMove, { passive: false, capture: true })

    return () => {
      document.body.style.overflow = prevOverflow
      document.documentElement.classList.remove('cmd-open')
      window.dispatchEvent(new Event('portfolio:scroll-unlock'))
      window.__lenis?.start?.()
      document.removeEventListener('wheel', onWheel, { capture: true })
      document.removeEventListener('touchmove', onTouchMove, { capture: true })
    }
  }, [open])

  let flatIndex = -1

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            className="cmd-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
          >
            <motion.div
              className="cmd-panel"
              initial={{ opacity: 0, scale: 0.96, y: -18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: -10 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="cmd-search-wrap">
                <div className="cmd-search">
                  <Search size={20} className="cmd-search-icon" strokeWidth={2} />
                  <input
                    autoFocus
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search sections, projects or actions..."
                    className="cmd-input"
                    aria-label="Search commands"
                  />
                  <button
                    type="button"
                    className="cmd-close"
                    onClick={close}
                    aria-label="Close"
                  >
                    <X size={18} strokeWidth={2.25} />
                  </button>
                </div>
              </div>

              <div className="cmd-list" ref={listRef}>
                {grouped.map(({ category, items }) => (
                  <div key={category} className="cmd-group">
                    <p className="cmd-group-label">{category}</p>
                    <div className="cmd-group-items">
                      {items.map((item) => {
                        flatIndex += 1
                        const index = flatIndex
                        return (
                          <button
                            key={item.label}
                            type="button"
                            data-cmd-index={index}
                            className={`cmd-item ${index === activeIndex ? 'cmd-item--active' : ''}`}
                            onClick={() => handleAction(item.action)}
                            onMouseEnter={() => setActiveIndex(index)}
                          >
                            <span className="cmd-item-accent" aria-hidden="true" />
                            <span className="cmd-item-icon">
                              <CommandIcon name={item.icon} />
                            </span>
                            <span className="cmd-item-text">
                              <span className="cmd-item-title">{item.label}</span>
                              <span className="cmd-item-desc">{item.description}</span>
                            </span>
                          </button>
                        )
                      })}
                    </div>
                  </div>
                ))}

                {filtered.length === 0 && (
                  <div className="cmd-empty">
                    <Search size={22} />
                    <p>No results for “{query}”</p>
                    <span>Try another keyword</span>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
