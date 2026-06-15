import { useState, useEffect } from 'react'
import { ZEFFY_URL } from '../../constants/links'
import Button from './Button'

export default function StickyCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <div
      id="sticky-cta"
      className="fixed right-5 bottom-5 z-40 animate-[fadeInUp_0.4s_ease-out] transition-all duration-500 ease-out"
      role="complementary"
      aria-label="Quick ticket purchase"
    >
      <Button href={ZEFFY_URL} external variant="lime" size="md" className="shadow-lift">
        Get Tickets
      </Button>
    </div>
  )
}
