import * as React from "react"

export interface DotProps {
  x: number
  y: number
  color: string
  opacity: number
  size: number
}

const Dot: React.FC<DotProps> = ({ x, y, color, opacity, size }) => (
  <circle r={size / 2} cx={x} cy={y} opacity={opacity} fill={color} />
)

export default Dot
