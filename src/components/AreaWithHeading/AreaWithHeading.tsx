/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6

const HeadingLevelContext = React.createContext<HeadingLevel | 0>(0)

export function useHeadingLevel(): number {
  return React.useContext(HeadingLevelContext)
}

export type AreaWithHeadingProps = {
  children?: React.ReactNode
}

export function AreaWithHeading({ children }: AreaWithHeadingProps) {
  const parentHeadingLevel = useHeadingLevel()
  const headingLevel = Math.min(parentHeadingLevel + 1, 6) as HeadingLevel

  return (
    <HeadingLevelContext.Provider value={headingLevel}>
      {children}
    </HeadingLevelContext.Provider>
  )
}
