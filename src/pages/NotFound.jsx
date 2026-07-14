import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '../components/ui/Button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center section-padding">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-md"
      >
        <p className="accent-label mb-4">Error 404</p>
        <h1 className="text-[7rem] md:text-[9rem] font-bold text-primary-fg leading-none tracking-tighter mb-4">
          404
        </h1>
        <p className="text-heading-card !text-xl mb-2">Page not found</p>
        <p className="text-small mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button variant="primary" size="lg">Back to Home</Button>
        </Link>
      </motion.div>
    </div>
  )
}
