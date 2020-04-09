/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { text, radios } from "@storybook/addon-knobs"
import { radioKnobOptions } from "../../utils/storybook/knobs"
import {
  StickyObserver,
  StickyObserverProvider,
  StickyObservedContainer,
  StickyObserverSentinel,
  StickyLipShadow,
} from "."
import { Theme } from "../../theme"
import { LipShadowPosition } from "./StickyObserver"

export default {
  title: `StickyObserver`,
  component: StickyObserver,
  subcomponents: {
    StickyObserverProvider,
    StickyObservedContainer,
    StickyObserverSentinel,
    StickyLipShadow,
  },
}

function ScrollableContent({ blocksCount = 5 }: { blocksCount?: number }) {
  return (
    <React.Fragment>
      {Array(blocksCount)
        .fill(0)
        .map((_, idx, list) => {
          const colors: Array<keyof Theme["colors"]> = [
            "purple",
            "orange",
            "teal",
            "green",
            "magenta",
          ]

          const color = colors[idx % colors.length]

          return (
            <div
              key={idx}
              css={theme => ({
                borderWidth: 1,
                borderStyle: `solid`,
                borderColor: theme.colors[color][50],
                backgroundColor: theme.colors[color][10],
                height: `${100 / list.length}vh`,
                width: `100%`,
                margin: `${theme.space[8]} auto`,
              })}
            />
          )
        })}
    </React.Fragment>
  )
}

const LONG_TEXT = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non urna gravida, placerat nulla in, euismod odio. Proin pharetra nisl erat, at convallis leo accumsan quis. Nullam semper auctor sapien, eu condimentum orci tristique a. Nulla tempor aliquet fermentum. Pellentesque eget vestibulum lectus, eget tempus nisi`

export const Basic = () => {
  return (
    <React.Fragment>
      <StickyObserver lipShadowPosition="bottom">{LONG_TEXT}</StickyObserver>
      <ScrollableContent />
      <StickyObserver lipShadowPosition="top">{LONG_TEXT}</StickyObserver>
    </React.Fragment>
  )
}

const LIP_SHADOW_POSIITONS: LipShadowPosition[] = [`top`, `bottom`]

export const Sandbox = () => {
  const lipShadowPosition = radios(
    `lipShadowPosition`,
    radioKnobOptions(LIP_SHADOW_POSIITONS),
    "top"
  )

  return (
    <React.Fragment>
      <ScrollableContent blocksCount={1} />
      <StickyObserver lipShadowPosition={lipShadowPosition}>
        {text(`content`, LONG_TEXT)}
      </StickyObserver>
      <ScrollableContent blocksCount={1} />
    </React.Fragment>
  )
}

Sandbox.story = {
  parameters: {
    chromatic: { disable: true },
  },
}
