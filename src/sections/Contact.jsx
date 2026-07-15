import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Mail, Send, Phone } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import Toast from '../components/ui/Toast'
import Reveal from '../components/ui/Reveal'
import { SITE_CONFIG } from '../constants'

const EMAILJS_SERVICE = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id'
const EMAILJS_TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id'
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key'

function ContactCard({ icon: Icon, label, value, href }) {
  const isExternal = href && !href.startsWith('mailto:') && !href.startsWith('tel:')
  const Tag = href ? 'a' : 'div'
  return (
    <Tag
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="contact-card"
      style={{ cursor: href ? 'pointer' : 'default', textDecoration: 'none', color: 'inherit' }}
    >
      <div className="contact-icon"><Icon size={20} /></div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <p className="t-label" style={{ marginBottom: '0.25rem', fontSize: '0.6875rem' }}>{label}</p>
        <p style={{ fontWeight: 500, color: 'var(--text)', fontSize: '0.9375rem' }}>{value}</p>
      </div>
    </Tag>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState({ message: '', type: 'success' })

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Required'
    if (!form.email.trim()) e.email = 'Required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Invalid email'
    if (!form.subject.trim()) e.subject = 'Required'
    if (!form.message.trim()) e.message = 'Required'
    setErrors(e)
    return !Object.keys(e).length
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault()
    if (!validate()) return
    setLoading(true)
    try {
      await emailjs.send(EMAILJS_SERVICE, EMAILJS_TEMPLATE, {
        to_name: SITE_CONFIG.shortName,
        from_name: form.name.trim(),
        from_email: form.email.trim(),
        subject: form.subject.trim(),
        message: form.message.trim(),
        reply_to: form.email.trim(),
      }, EMAILJS_PUBLIC_KEY)
      setToast({ message: 'Thanks for reaching out — I’ll get back to you soon.', type: 'success' })
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setToast({ message: `Couldn't send right now. Email me at ${SITE_CONFIG.email}`, type: 'error' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="section section--alt">
      <div className="container">
        <Reveal>
          <SectionHeading label="Contact" title="Get In Touch" subtitle="Have a project in mind? I'd love to hear from you." />
        </Reveal>

        <div className="contact-split">
          <Reveal delay={0.1}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p className="t-muted">I'm open to opportunities and collaborations. Reach out anytime.</p>
              <ContactCard icon={Mail} label="Email" value={SITE_CONFIG.email} href={`mailto:${SITE_CONFIG.email}`} />
              <ContactCard
                icon={Phone}
                label="Phone"
                value={SITE_CONFIG.phoneDisplay}
                href={`tel:${SITE_CONFIG.phoneTel}`}
              />
              <ContactCard icon={FaGithub} label="GitHub" value={`@${SITE_CONFIG.githubUsername}`} href={SITE_CONFIG.github} />
              <ContactCard icon={FaLinkedin} label="LinkedIn" value="Prem Shrikant Ghosh" href={SITE_CONFIG.linkedin} />
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <form onSubmit={handleSubmit} noValidate>
              <div className="card card-pad-lg">
                {['name', 'email', 'subject'].map((f) => (
                  <div key={f} className="form-group">
                    <label htmlFor={f} className="form-label capitalize">{f}</label>
                    <input
                      id={f} name={f} type={f === 'email' ? 'email' : 'text'}
                      value={form[f]} onChange={(e) => setForm({ ...form, [f]: e.target.value })}
                      className={`form-input ${errors[f] ? 'form-input-error' : ''}`}
                    />
                    {errors[f] && <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.25rem' }}>{errors[f]}</p>}
                  </div>
                ))}
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea id="message" name="message" rows={4} value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`form-input ${errors.message ? 'form-input-error' : ''}`} />
                  {errors.message && <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.25rem' }}>{errors.message}</p>}
                </div>
                <Button type="submit" variant="primary" size="lg" className="w-full" loading={loading} disabled={loading} style={{ width: '100%' }}>
                  <Send size={18} />
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>

      <Toast message={toast.message} type={toast.type} onClose={() => setToast({ message: '', type: 'success' })} />
    </section>
  )
}
