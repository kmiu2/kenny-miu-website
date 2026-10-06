import { useEffect, useRef } from 'react'

/**
 * Returns a ref to attach to a container. When the element enters the viewport
 * it gains the `fade-in-visible` class, triggering a CSS opacity/translate
 * transition. The observer disconnects after first trigger (one-shot).
 */
export function useFadeIn<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.12
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('fade-in-visible')
          observer.disconnect()
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}
