/** @jsx jsx */
import { jsx } from "@emotion/core"
import React, { useContext } from "react"
import { ThemeCss, Theme } from "../../theme"
import { SpacerSize } from "../Spacer"

const PlaceholderContext = React.createContext<{
  animation: string
}>({
  animation: "",
})

export interface PlaceholderProps
  extends React.ComponentPropsWithoutRef<"div"> {
  space?: SpacerSize
  animation?: string
  css?: any
}

export const Placeholder: React.FC<PlaceholderProps> = ({
  children,
  space = 3,
  animation = "",
  ...props
}) => {
  return (
    <PlaceholderContext.Provider value={{ animation }}>
      <div
        css={theme => ({ display: "grid", gap: theme.space[space] })}
        {...props}
      >
        {children}
      </div>
    </PlaceholderContext.Provider>
  )
}

const placeholderLineCss: ThemeCss = theme => ({
  background: theme.colors.grey[30],
  height: theme.fontSizes[3],
})

export interface PlaceholderBoxProps
  extends React.ComponentPropsWithoutRef<"div"> {
  width?: string
  height?: string
  noSpace?: boolean
  radii?: number
  css?: any
}

export const PlaceholderBox: React.FC<PlaceholderBoxProps> = ({
  height = "14px",
  width = "100%",
  radii = 2,
  ...props
}) => {
  const { animation } = useContext(PlaceholderContext)

  return (
    <div
      css={(theme: Theme) => [
        placeholderLineCss(theme),
        {
          width,
          height,

          borderRadius: theme.radii[radii],
          animation,
        },
      ]}
      {...props}
    />
  )
}
