/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { storiesOf } from "@storybook/react"

import { StoryUtils } from "../utils/storybook"
import {
  getTheme,
  ThemeFont,
  ThemeFontWeight,
  ThemeLineHeight,
  ThemeLetterSpacing,
} from "./"
// import README from "./README.md"

const theme = getTheme()

function LongText({
  title,
  className,
}: {
  title?: React.ReactNode
  className?: string
}) {
  return (
    <React.Fragment>
      {title && <h4>{title}</h4>}
      <p className={className}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus
        ut expedita quidem in animi sint nostrum laboriosam corrupti voluptas
        totam explicabo, molestiae blanditiis voluptatem libero alias id?
        Ratione, ab dolore!
      </p>
    </React.Fragment>
  )
}

storiesOf(`theme`, module)
  .addParameters({
    options: {
      showPanel: true,
    },
    readme: {
      // sidebar: README,
    },
  })
  .add(`fonts`, () => {
    return (
      <StoryUtils.Container>
        <div>
          {Object.keys(theme.fonts).map(font => {
            const fontFamily = theme.fonts[font as ThemeFont]

            return <LongText key={font} title={font} css={{ fontFamily }} />
          })}
        </div>
      </StoryUtils.Container>
    )
  })
  .add(`fonts sizes`, () => {
    return (
      <StoryUtils.Container>
        <div>
          {theme.fontSizes.map((_, size) => {
            const fontSize = theme.fontSizes[size]

            return <LongText key={size} title={size} css={{ fontSize }} />
          })}
        </div>
      </StoryUtils.Container>
    )
  })
  .add(`fonts weights`, () => {
    return (
      <StoryUtils.Container>
        <div>
          {Object.keys(theme.fontWeights).map(weight => {
            const fontWeight = theme.fontWeights[weight as ThemeFontWeight]

            return <LongText key={weight} title={weight} css={{ fontWeight }} />
          })}
        </div>
      </StoryUtils.Container>
    )
  })
  .add(`line heights`, () => {
    return (
      <StoryUtils.Container>
        <div>
          {Object.keys(theme.lineHeights)
            .sort()
            .map(height => {
              const lineHeight = theme.lineHeights[height as ThemeLineHeight]

              return (
                <LongText key={height} title={height} css={{ lineHeight }} />
              )
            })}
        </div>
      </StoryUtils.Container>
    )
  })
  .add(`letter spacings`, () => {
    return (
      <StoryUtils.Container>
        <div>
          {Object.keys(theme.letterSpacings).map(spacing => {
            const letterSpacing =
              theme.letterSpacings[spacing as ThemeLetterSpacing]

            return (
              <LongText key={spacing} title={spacing} css={{ letterSpacing }} />
            )
          })}
        </div>
      </StoryUtils.Container>
    )
  })
