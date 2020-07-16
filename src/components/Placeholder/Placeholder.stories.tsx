/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { Placeholder, PlaceholderBox } from "./"
import { useTheme } from "../ThemeProvider"

export default {
  title: `Placeholder`,
  component: Placeholder,
  subcomponents: {
    Placeholder,
    PlaceholderBox,
  },
}

export const PlaceholderDefault = () => {
  return (
    <div css={{ width: "400px" }}>
      <Placeholder
        Left={() => <PlaceholderBox height="40px" width="40px" />}
        Right={() => <PlaceholderBox height="40px" width="40px" />}
      >
        <PlaceholderBox />
        <PlaceholderBox width="30%" />
        <PlaceholderBox width="80%" noSpace />
      </Placeholder>
    </div>
  )
}

export const PlaceholderOnlyRight = () => {
  return (
    <div css={{ width: "400px" }}>
      <Placeholder Right={() => <PlaceholderBox height="40px" width="40px" />}>
        <PlaceholderBox />
        <PlaceholderBox width="40%" />
        <PlaceholderBox width="30%" noSpace />
      </Placeholder>
    </div>
  )
}

export const PlaceholderOnlyLeft = () => {
  return (
    <div css={{ width: "400px" }}>
      <Placeholder
        Left={() => <PlaceholderBox height="40px" width="40px" radii="50%" />}
      >
        <PlaceholderBox />
        <PlaceholderBox width="70%" />
        <PlaceholderBox width="20%" noSpace />
      </Placeholder>
    </div>
  )
}
