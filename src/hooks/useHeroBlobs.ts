import { useEffect, useRef } from 'react'

interface BlobConfig {
  color: string
  darkColor: string
  size: number // vw
  speed: number
  a: number // x amplitude multiplier
  b: number // y amplitude multiplier
  phaseX: number
  phaseY: number
}

const BLOBS: BlobConfig[] = [
  {
    color: 'rgba(120, 160, 255, 0.45)',
    darkColor: 'rgba(80, 120, 220, 0.5)',
    size: 55,
    speed: 0.00035,
    a: 0.38,
    b: 0.32,
    phaseX: 0,
    phaseY: Math.PI / 2,
  },
  {
    color: 'rgba(255, 160, 200, 0.38)',
    darkColor: 'rgba(180, 80, 140, 0.45)',
    size: 48,
    speed: 0.00028,
    a: 0.42,
    b: 0.28,
    phaseX: Math.PI / 3,
    phaseY: Math.PI,
  },
  {
    color: 'rgba(160, 220, 180, 0.35)',
    darkColor: 'rgba(60, 180, 120, 0.42)',
    size: 42,
    speed: 0.0004,
    a: 0.3,
    b: 0.38,
    phaseX: Math.PI,
    phaseY: Math.PI / 4,
  },
  {
    color: 'rgba(255, 210, 120, 0.32)',
    darkColor: 'rgba(200, 140, 40, 0.40)',
    size: 50,
    speed: 0.00022,
    a: 0.35,
    b: 0.4,
    phaseX: Math.PI * 1.5,
    phaseY: Math.PI * 0.75,
  },
  {
    color: 'rgba(180, 140, 255, 0.30)',
    darkColor: 'rgba(120, 60, 220, 0.40)',
    size: 38,
    speed: 0.0005,
    a: 0.45,
    b: 0.25,
    phaseX: Math.PI * 0.6,
    phaseY: Math.PI * 1.2,
  },
]

export function useHeroBlobs(
  containerRef: React.RefObject<HTMLDivElement | null>,
  isDark: boolean
) {
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Create canvas — fixed so it covers the full viewport
    const canvas = document.createElement('canvas')
    canvas.style.cssText = `
      position: fixed;
      inset: 0;
      width: 100vw;
      height: 100vh;
      pointer-events: none;
      z-index: 0;
    `
    container.appendChild(canvas)

    const ctx = canvas.getContext('2d')!
    let startTime: number | null = null

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()

    const ro = new ResizeObserver(resize)
    ro.observe(document.documentElement)

    const draw = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const t = timestamp - startTime

      const w = canvas.width
      const h = canvas.height

      ctx.clearRect(0, 0, w, h)

      // Elliptical vignette mask — blobs fade at edges
      const gradient = ctx.createRadialGradient(
        w / 2,
        h / 2,
        0,
        w / 2,
        h / 2,
        Math.max(w, h) * 0.65
      )
      gradient.addColorStop(0, 'rgba(0,0,0,1)')
      gradient.addColorStop(1, 'rgba(0,0,0,0)')

      // Draw each blob
      BLOBS.forEach((blob) => {
        const px = w / 2 + Math.sin(t * blob.speed + blob.phaseX) * (w * blob.a)
        const py = h / 2 + Math.cos(t * blob.speed + blob.phaseY) * (h * blob.b)
        const r = (blob.size / 100) * w * 0.5

        const radial = ctx.createRadialGradient(px, py, 0, px, py, r)
        const color = isDark ? blob.darkColor : blob.color
        radial.addColorStop(0, color)
        radial.addColorStop(1, 'rgba(0,0,0,0)')

        ctx.save()
        ctx.globalCompositeOperation = isDark ? 'screen' : 'multiply'
        ctx.fillStyle = radial
        ctx.beginPath()
        ctx.ellipse(px, py, r, r * 0.8, 0, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      })

      rafRef.current = requestAnimationFrame(draw)
    }

    rafRef.current = requestAnimationFrame(draw)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      ro.disconnect()
      canvas.remove()
    }
  }, [containerRef, isDark])
}
