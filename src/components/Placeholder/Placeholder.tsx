/** @jsx jsx */
import { jsx } from "@emotion/core"
import React, { useContext } from "react"
import { ThemeCss, Theme } from "../../theme"
import { Spacer } from "../Spacer"
import { SpaceToken } from "../../theme/space"

const PlaceholderContext = React.createContext<{ space: string }>({
  space: "",
})

export interface PlaceholderProps
  extends React.ComponentPropsWithoutRef<"div"> {
  Left?: React.ComponentType
  Right?: React.ComponentType
  space?: string
}

export const Placeholder: React.FC<PlaceholderProps> = ({
  children,
  Left,
  Right,
  space = "0.5rem",
  ...props
}) => {
  return (
    <PlaceholderContext.Provider value={{ space }}>
      <div
        css={{
          display: "flex",
          flexDirection: "row",
        }}
        {...props}
      >
        {Left && (
          <div css={{ marginRight: space }}>
            <Left />
          </div>
        )}
        <div css={{ flex: 1 }}>{children}</div>
        {Right && (
          <div css={{ marginLeft: space }}>
            <Right />
          </div>
        )}
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
  radii?: string
}

export const PlaceholderBox: React.FC<PlaceholderBoxProps> = ({
  height = "14px",
  width = "100%",
  noSpace,
  radii,
  ...props
}) => {
  const { space } = useContext(PlaceholderContext)

  const marginBottom = noSpace ? 0 : space

  return (
    <div
      css={(theme: Theme) => [
        placeholderLineCss(theme),
        { width, height, marginBottom, borderRadius: radii || theme.radii[2] },
      ]}
      {...props}
    />
  )
}
