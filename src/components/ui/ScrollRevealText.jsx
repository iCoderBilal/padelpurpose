import { useEffect, useRef, useMemo } from 'react'
import { getScrollRevealOpacity, subscribeScrollReveal } from '../../utils/scrollReveal'

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
      wordRefs.current.forEach((el) => {
        if (!el) return
        el.style.opacity = String(getScrollRevealOpacity(el))
      })
    }

    update()
    return subscribeScrollReveal(update)
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
