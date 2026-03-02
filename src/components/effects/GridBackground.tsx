import { useEffect, useRef } from 'react'

export function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let offset = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const cellSize = 60
      const cols = Math.ceil(canvas.width / cellSize) + 1
      const rows = Math.ceil(canvas.height / cellSize) + 1

      ctx.strokeStyle = 'rgba(108, 99, 255, 0.07)'
      ctx.lineWidth = 1

      for (let x = 0; x < cols; x++) {
        ctx.beginPath()
        ctx.moveTo(x * cellSize, 0)
        ctx.lineTo(x * cellSize, canvas.height)
        ctx.stroke()
      }

      for (let y = 0; y < rows; y++) {
        const yPos = (y * cellSize + offset) % canvas.height
        ctx.beginPath()
        ctx.moveTo(0, yPos)
        ctx.lineTo(canvas.width, yPos)
        ctx.stroke()
      }

      ctx.strokeStyle = 'rgba(0, 212, 255, 0.04)'
      ctx.lineWidth = 1

      for (let x = 0; x < cols; x++) {
        for (let y = 0; y < rows; y++) {
          const xPos = x * cellSize
          const yPos = (y * cellSize + offset) % canvas.height
          const dist = Math.sqrt((xPos - canvas.width / 2) ** 2 + (yPos - canvas.height / 2) ** 2)
          if (dist < 300) {
            ctx.globalAlpha = (1 - dist / 300) * 0.3
            ctx.beginPath()
            ctx.arc(xPos, yPos, 1.5, 0, Math.PI * 2)
            ctx.fillStyle = '#00D4FF'
            ctx.fill()
          }
        }
      }

      ctx.globalAlpha = 1
      offset = (offset + 0.3) % cellSize

      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-70"
      style={{ zIndex: 0 }}
    />
  )
}
