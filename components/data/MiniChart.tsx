import React from 'react'

export interface MiniChartProps {
  data: number[]
  width?: number
  height?: number
  color?: string
  className?: string
}

export function MiniChart({
  data,
  width = 100,
  height = 40,
  color = '#3A8BFF',
  className = '',
}: MiniChartProps) {
  if (data.length === 0) {
    return (
      <div
        className={`flex items-center justify-center bg-slate-100 rounded ${className}`}
        style={{ width, height }}
      >
        <span className="text-[10px] text-slate-400">No data</span>
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

  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
    >
      <polyline
        fill="none"
        stroke={color}
        strokeWidth="2"
        points={points}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}
