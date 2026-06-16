import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { getLenis } from '../SmoothScroll'

function LightboxControl({ direction, onClick, disabled, className = '' }) {
  const label = direction === 'prev' ? 'Previous image' : 'Next image'

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={`flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-md transition-all duration-300 hover:border-lime hover:bg-white/10 hover:text-lime disabled:pointer-events-none disabled:opacity-25 md:h-14 md:w-14 ${className}`}
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {direction === 'prev' ? (
          <path d="M15 18l-6-6 6-6" />
        ) : (
          <path d="M9 18l6-6-6-6" />
        )}
      </svg>
    </button>
  )
}

export default function LightboxGallery({ images, open, index, onClose, onIndexChange }) {
  const closeRef = useRef(null)
  const image = images[index]

  useEffect(() => {
    if (!open) return

    const lenis = getLenis()
    lenis?.stop()
    document.body.classList.add('lightbox-open')

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') onIndexChange(Math.max(0, index - 1))
      if (event.key === 'ArrowRight') onIndexChange(Math.min(images.length - 1, index + 1))
    }

    window.addEventListener('keydown', onKeyDown)
    closeRef.current?.focus()

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.classList.remove('lightbox-open')
      lenis?.start()
    }
  }, [open, index, images.length, onClose, onIndexChange])

  if (!open || !image) return null

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery"
      className="lightbox-backdrop fixed inset-0 z-[120] flex flex-col bg-black"
    >
      <button
        type="button"
        aria-label="Close gallery"
        onClick={onClose}
        className="absolute inset-0 z-0 cursor-zoom-out bg-transparent"
        tabIndex={-1}
      />

      <div className="relative z-10 flex items-center justify-between px-4 py-5 md:px-8 md:py-6 lg:px-[3vw] lg:py-[1.5vw]">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-white/50 md:text-sm">
          {String(index + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
        </p>

        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close gallery"
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-md transition-all duration-300 hover:border-lime hover:bg-white/10 hover:text-lime md:h-12 md:w-12"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="relative z-10 flex min-h-0 flex-1 items-center justify-center gap-3 px-3 md:gap-5 md:px-8 lg:gap-[1.5vw] lg:px-[3vw]">
        <LightboxControl
          direction="prev"
          onClick={() => onIndexChange(index - 1)}
          disabled={index === 0}
          className="hidden sm:flex"
        />

        <figure key={image.src} className="lightbox-image mx-auto flex max-h-full max-w-full flex-col items-center">
          <img
            src={image.src}
            alt={image.alt}
            width={1100}
            height={740}
            className="block max-h-[68vh] w-auto max-w-[min(92vw,1100px)] md:max-h-[72vh] lg:max-h-[74vh]"
          />
        </figure>

        <LightboxControl
          direction="next"
          onClick={() => onIndexChange(index + 1)}
          disabled={index === images.length - 1}
          className="hidden sm:flex"
        />
      </div>

      <div className="relative z-10 flex items-center justify-center gap-4 px-4 pb-6 sm:hidden md:pb-8">
        <LightboxControl
          direction="prev"
          onClick={() => onIndexChange(index - 1)}
          disabled={index === 0}
        />
        <LightboxControl
          direction="next"
          onClick={() => onIndexChange(index + 1)}
          disabled={index === images.length - 1}
        />
      </div>
    </div>,
    document.body
  )
}
