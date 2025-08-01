import { useEffect, useRef } from 'react'

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

 useEffect(() => {
  const canvas = canvasRef.current
  if (!canvas) return

  const ctx = canvas.getContext('2d')!

  let width = window.innerWidth
  let height = window.innerHeight
  canvas.width = width
  canvas.height = height

  const numStars = 200
  let stars = Array.from({ length: numStars }).map(() => ({
    x: Math.random() * width,
    y: Math.random() * height,
    z: Math.random() * 1 + 0.2,
    size: Math.random() * 1.2 + 0.3,
  }))

  const handleResize = () => {
    width = window.innerWidth
    height = window.innerHeight
    canvas.width = width
    canvas.height = height

    // Re-generate stars to fill new space
    stars = Array.from({ length: numStars }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      z: Math.random() * 1 + 0.2,
      size: Math.random() * 1.2 + 0.3,
    }))
  }

  window.addEventListener('resize', handleResize)

  const render = () => {
    ctx.clearRect(0, 0, width, height)
    ctx.fillStyle = '#000'
    ctx.fillRect(0, 0, width, height)

    for (const star of stars) {
      star.x -= star.z * 0.1
      if (star.x < 0) star.x = width

      ctx.beginPath()
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255, 255, 255, ${star.z})`
      ctx.fill()
    }

    requestAnimationFrame(render)
  }

  render()

  return () => {
    window.removeEventListener('resize', handleResize)
  }
}, [])
 return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        background: 'black',
      }}
    />
  )
}

