import { useEffect, useRef } from 'react'
import { getScrollRevealOpacity, subscribeScrollReveal } from '../utils/scrollReveal'

export function useScrollRevealOpacity(stagger = 0) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.style.opacity = '1'
      return
    }

    const update = () => {
      el.style.opacity = String(getScrollRevealOpacity(el, stagger))
    }

    update()
    return subscribeScrollReveal(update)
  }, [stagger])

  return ref
}
