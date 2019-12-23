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
  ThemeZIndex,
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
  .add(`space`, () => {
    return (
      <StoryUtils.Container>
        <div
          css={{
            display: `grid`,
            gridTemplateColumns: `1fr auto 1fr`,
            columnGap: `1rem`,
            rowGap: `0.5rem`,
            fontFamily: theme.fonts.monospace,
          }}
        >
          <div css={{ textAlign: `right` }}>Token</div>
          <div>Visual size</div>
          <div>CSS Value</div>
          {theme.space.map((space, token) => {
            return (
              <React.Fragment key={space}>
                <div css={{ textAlign: `right` }}>{token}</div>
                <div
                  css={{
                    boxSizing: `border-box`,
                    borderLeft: `2px solid ${theme.colors.red[20]}`,
                    borderRight: `2px solid ${theme.colors.red[20]}`,
                    width: space,
                    height: "1em",
                    position: `relative`,
                    [`:before`]: {
                      content: `" "`,
                      position: `absolute`,
                      top: `0.5em`,
                      width: `100%`,
                      height: `1px`,
                      background: theme.colors.red[30],
                    },
                  }}
                ></div>
                <div>{space}</div>
              </React.Fragment>
            )
          })}
        </div>
      </StoryUtils.Container>
    )
  })
  .add(`z indices`, () => {
    const zIndicesCount = Object.keys(theme.zIndices).length
    const maxSize = `calc(${zIndicesCount} * 3rem + 10rem)`

    const colorsByToken: Record<ThemeZIndex, string> = {
      base: theme.colors.white,
      background: theme.colors.grey[30],
      dropdowns: theme.colors.purple[20],
      toasts: theme.colors.green[20],
      modals: theme.colors.orange[20],
      a11yIndicators: theme.colors.teal[20],
    }

    return (
      <StoryUtils.Container>
        <div css={{ width: maxSize, height: maxSize }}>
          {Object.keys(theme.zIndices).map((token, idx) => {
            const zIndex = theme.zIndices[token as ThemeZIndex]

            const space = `calc(${zIndicesCount - idx} * 3rem)`

            return (
              <div
                key={token}
                css={{
                  zIndex,
                  background: colorsByToken[token as ThemeZIndex],
                  position: `fixed`,
                  padding: `${space} ${space} 1rem 1rem`,
                  border: `1px solid ${theme.colors.black}`,
                  borderRadius: `4px`,
                }}
              >
                <div css={{ width: `10rem` }}>{token}</div>
              </div>
            )
          })}
        </div>
      </StoryUtils.Container>
    )
  })
