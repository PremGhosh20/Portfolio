import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, XCircle, X } from 'lucide-react'

export default function Toast({ message, type = 'success', onClose, duration = 4000 }) {
  useEffect(() => {
    if (!message) return
    const timer = setTimeout(() => onClose?.(), duration)
    return () => clearTimeout(timer)
    // intentionally only re-run when message changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message, duration])

  return (
    <div className="toast-root" aria-live="polite">
      <AnimatePresence>
        {message && (
          <motion.div
            className={`toast toast--${type}`}
            role="status"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={`toast-icon toast-icon--${type}`}>
              {type === 'success' ? <CheckCircle2 size={18} /> : <XCircle size={18} />}
            </div>
            <div className="toast-body">
              <p className="toast-title">{type === 'success' ? 'Message sent' : 'Something went wrong'}</p>
              <p className="toast-text">{message}</p>
            </div>
            <button type="button" className="toast-close" onClick={onClose} aria-label="Dismiss">
              <X size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
