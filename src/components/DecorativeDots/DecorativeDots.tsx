import * as React from "react"

import colors from "../../theme/colors"
import {
  testSafeMathRandom,
  testSafeSample,
} from "../../utils/helpers/testSafeRandomness"

import { getLikelihoodOfBeingBlank } from "./DecorativeDots.helpers"
import Dot, { DotProps } from "./Dot"

const dotSvgStyles = {
  // We want to let the circles at the edge of the SVG spill out, not get
  // cropped by the SVG boundaries. Cropping will naturally occur if we
  // position this SVG at an edge of the viewport =)
  overflow: `visible`,
}

export type DecorativeDotsProps = {
  width: number
  height: number
  dotSize: number
  angle?: number
  fadeStrength?: number
  __random?: () => number
  __sample?: Sample
}

export function DecorativeDots({
  width,
  height,
  dotSize,
  angle = 0,
  fadeStrength = 0.25,
  __random,
  __sample,
}: DecorativeDotsProps) {
  const dots = React.useMemo(() => {
    const numRows = Math.floor(height / dotSize)
    const numCols = Math.floor(width / dotSize)

    return generateDotData({
      numRows,
      numCols,
      angle,
      dotSize,
      fadeStrength,
      random: __random,
      sample: __sample,
    })
  }, [height, width, angle, dotSize, fadeStrength, __random, __sample])

  return (
    <svg width={width} height={height} style={dotSvgStyles} aria-hidden={true}>
      {dots.map((dot, i) => (
        <Dot
          key={i}
          x={dot.x}
          y={dot.y}
          color={dot.color}
          opacity={dot.opacity}
          size={dot.size}
        />
      ))}
    </svg>
  )
}

// These colors were chosen somewhat haphazardly from previous assets.
// For now, this is not customizable, colors are meant to be semi-randomly
// drawn from our design palette.
const COLORS = [
  colors.red[40],
  colors.red[60],
  colors.orange[40],
  colors.orange[60],
  colors.yellow[40],
  colors.green[20],
  colors.green[40],
  colors.blue[20],
  colors.blue[40],
  colors.magenta[20],
  colors.magenta[50],
  colors.purple[40],
  colors.purple[60],
  colors.teal[20],
  colors.teal[50],
  colors.teal[70],
]

// Every circle is given a random opacity, but it's weighted so that outliers
// don't happen much.
const OPACITIES = [0.15, 0.25, 0.25, 0.25, 0.5, 0.5, 0.75]

type Sample = <T>(values: T[]) => T

function generateDotData<T>({
  numRows,
  numCols,
  angle,
  dotSize,
  fadeStrength,
  random = testSafeMathRandom,
  sample = testSafeSample,
}: {
  numRows: number
  numCols: number
  angle: number
  dotSize: number
  fadeStrength: number
  random?: () => number
  sample?: Sample
}): DotProps[] {
  const dots = []

  const dotSpacing = Math.round(dotSize / 10)
  const totalDotSpace = dotSize + dotSpacing

  for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
    for (let colIndex = 0; colIndex < numCols; colIndex++) {
      const likelihoodOfBeingBlank = getLikelihoodOfBeingBlank(
        angle,
        colIndex,
        rowIndex,
        numCols,
        numRows
      )

      const isBlank = likelihoodOfBeingBlank * random() < fadeStrength

      if (!isBlank) {
        dots.push({
          x: colIndex * totalDotSpace,
          y: rowIndex * totalDotSpace,
          color: sample(COLORS),
          opacity: sample(OPACITIES),
          size: dotSize,
        })
      }
    }
  }

  return dots
}
