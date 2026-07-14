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
