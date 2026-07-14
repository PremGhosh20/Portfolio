import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mouseX = 0
    let mouseY = 0
    let ringX = 0
    let ringY = 0

    const onMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15
      ringY += (mouseY - ringY) * 0.15
      ring.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`
      requestAnimationFrame(animate)
    }

    const onMouseEnter = () => {
      dot.style.transform += ' scale(1.5)'
      ring.style.width = '60px'
      ring.style.height = '60px'
      ring.style.opacity = '0.5'
    }

    const onMouseLeave = () => {
      ring.style.width = '40px'
      ring.style.height = '40px'
      ring.style.opacity = '1'
    }

    window.addEventListener('mousemove', onMouseMove)
    const animId = requestAnimationFrame(animate)

    const interactives = document.querySelectorAll('a, button, [role="button"]')
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnter)
      el.addEventListener('mouseleave', onMouseLeave)
    })

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(animId)
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnter)
        el.removeEventListener('mouseleave', onMouseLeave)
      })
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot hidden md:block w-2 h-2 bg-white rounded-full fixed top-0 left-0 z-[9999] pointer-events-none"
      />
      <div
        ref={ringRef}
        className="cursor-ring hidden md:block w-10 h-10 border border-white/30 rounded-full fixed top-0 left-0 z-[9998] pointer-events-none transition-all duration-200"
      />
    </>
  )
}
