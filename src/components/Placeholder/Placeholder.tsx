/** @jsx jsx */
import { jsx } from "@emotion/core"
import React, { useContext } from "react"
import { ThemeCss, Theme } from "../../theme"
import { SpacerSize } from "../Spacer"

const mergeCss = (sharedCss: any, css: any, theme: Theme) => {
  if (css) {
    if (typeof css === "function") {
      return { ...css(theme), ...sharedCss }
    }

    return { ...css(theme), ...sharedCss }
  }

  return sharedCss
}

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
  css,
  ...props
}) => {
  const computeCss: ThemeCss = theme => {
    const sharedCss = { display: "grid", gap: theme.space[space] }

    return mergeCss(sharedCss, css, theme)
  }

  return (
    <PlaceholderContext.Provider value={{ animation }}>
      <div css={computeCss} {...props}>
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
  css,
  ...props
}) => {
  const { animation } = useContext(PlaceholderContext)

  const computeCss: ThemeCss = theme => {
    const sharedCss = {
      width,
      height,

      borderRadius: theme.radii[radii],
      animation,
    }

    return mergeCss(sharedCss, css, theme)
  }

  return (
    <div
      css={(theme: Theme) => [placeholderLineCss(theme), computeCss(theme)]}
      {...props}
    />
  )
}
