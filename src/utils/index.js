import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...classes) {
  return twMerge(clsx(...classes))
}

export function copyToClipboard(text) {
  return navigator.clipboard.writeText(text)
}

export function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export function getIconComponent(name, icons) {
  return icons[name] || null
}

/** Detect LinkedIn / Instagram / etc. in-app browsers where tel: and WhatsApp deep links often fail */
export function getBrowserContext() {
  if (typeof navigator === 'undefined') {
    return { inApp: false, appName: null }
  }
  const ua = navigator.userAgent || ''
  if (/LinkedInApp|LinkedIn/i.test(ua)) return { inApp: true, appName: 'LinkedIn' }
  if (/Instagram/i.test(ua)) return { inApp: true, appName: 'Instagram' }
  if (/FBAN|FBAV/i.test(ua)) return { inApp: true, appName: 'Facebook' }
  if (/TikTok|BytedanceWebview/i.test(ua)) return { inApp: true, appName: 'TikTok' }
  if (/Twitter/i.test(ua)) return { inApp: true, appName: 'X' }
  if (/Snapchat/i.test(ua)) return { inApp: true, appName: 'Snapchat' }
  if (/MicroMessenger/i.test(ua)) return { inApp: true, appName: 'WeChat' }
  if (/Line\//i.test(ua)) return { inApp: true, appName: 'LINE' }
  return { inApp: false, appName: null }
}
