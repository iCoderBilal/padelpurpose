import { getLenis } from '../components/SmoothScroll'

export function getScrollRevealOpacity(element, stagger = 0) {
  const vh = window.innerHeight
  const targetLine = vh * 0.5
  const startLine = vh * 1.05 + stagger * vh * 0.12
  const { top, bottom } = element.getBoundingClientRect()
  const center = (top + bottom) / 2
  const progress = (startLine - center) / (startLine - targetLine)
  return Math.min(1, Math.max(0.12, progress))
}

export function subscribeScrollReveal(onScroll) {
  let scrollCleanup = () => {}
  const lenis = getLenis()

  if (lenis) {
    lenis.on('scroll', onScroll)
    scrollCleanup = () => lenis.off('scroll', onScroll)
  } else {
    window.addEventListener('scroll', onScroll, { passive: true })
    scrollCleanup = () => window.removeEventListener('scroll', onScroll)
  }

  window.addEventListener('resize', onScroll, { passive: true })

  return () => {
    scrollCleanup()
    window.removeEventListener('resize', onScroll)
  }
}
