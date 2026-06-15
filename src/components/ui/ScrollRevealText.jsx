import { useEffect, useRef, useMemo } from 'react'
import { getLenis } from '../SmoothScroll'

function splitWords(text) {
  return text.trim().split(/\s+/).filter(Boolean)
}

export function ScrollRevealParagraph({ text, className = '' }) {
  const wordRefs = useRef([])

  const words = useMemo(() => splitWords(text), [text])

  useEffect(() => {
    wordRefs.current = wordRefs.current.slice(0, words.length)

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      wordRefs.current.forEach((el) => {
        if (el) el.style.opacity = '1'
      })
      return
    }

    const update = () => {
      const vh = window.innerHeight
      // Full opacity when word reaches mid-screen; starts revealing from below viewport
      const targetLine = vh * 0.5
      const startLine = vh * 1.05

      wordRefs.current.forEach((el) => {
        if (!el) return
        const { top, bottom } = el.getBoundingClientRect()
        const center = (top + bottom) / 2
        const progress = (startLine - center) / (startLine - targetLine)
        const opacity = Math.min(1, Math.max(0.12, progress))
        el.style.opacity = String(opacity)
      })
    }

    let scrollCleanup = () => {}
    const lenis = getLenis()
    if (lenis) {
      lenis.on('scroll', update)
      scrollCleanup = () => lenis.off('scroll', update)
    } else {
      window.addEventListener('scroll', update, { passive: true })
      scrollCleanup = () => window.removeEventListener('scroll', update)
    }

    update()
    window.addEventListener('resize', update, { passive: true })

    return () => {
      scrollCleanup()
      window.removeEventListener('resize', update)
    }
  }, [words])

  return (
    <p className={`max-w-full break-words text-pretty ${className}`}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          ref={(el) => {
            wordRefs.current[i] = el
          }}
          className="scroll-reveal-word transition-opacity duration-150 ease-out"
        >
          {word}
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </p>
  )
}
