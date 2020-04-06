/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

export type Density = `DENSE` | `DEFAULT` | `LOOSE`

export type DensityContextValue = Density

const DensityContext = React.createContext<DensityContextValue>(`DEFAULT`)

export type DensityProviderProps = {
  density?: Density
  children?: React.ReactNode
}

export function DensityProvider({
  density = `DEFAULT`,
  children,
}: DensityProviderProps) {
  return (
    <DensityContext.Provider value={density}>
      {children}
    </DensityContext.Provider>
  )
}

export function useDensity(): Density {
  return React.useContext(DensityContext)
}
