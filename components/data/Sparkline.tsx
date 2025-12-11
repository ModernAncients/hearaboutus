import React from 'react'
import { MiniChart } from './MiniChart'

export interface SparklineProps {
  data: number[]
  width?: number
  height?: number
  showArea?: boolean
  className?: string
}

export function Sparkline({
  data,
  width = 80,
  height = 20,
  showArea = false,
  className = '',
}: SparklineProps) {
  if (data.length === 0) {
    return (
      <div
        className={`flex items-center justify-center bg-slate-100 rounded ${className}`}
        style={{ width, height }}
      >
        <span className="text-[8px] text-slate-400">—</span>
      </div>
    )
  }

  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1

  const points = data.map((value, index) => {
    const x = (index / (data.length - 1 || 1)) * width
    const y = height - ((value - min) / range) * height
    return `${x},${y}`
  }).join(' ')

  const areaPoints = `${points} ${width},${height} 0,${height}`

  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
    >
      {showArea && (
        <polygon
          fill="rgba(58, 139, 255, 0.1)"
          points={areaPoints}
        />
      )}
      <polyline
        fill="none"
        stroke="#3A8BFF"
        strokeWidth="1.5"
        points={points}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}
