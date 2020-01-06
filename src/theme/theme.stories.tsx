/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import React from "react"
import { storiesOf } from "@storybook/react"

import { StoryUtils } from "../utils/storybook"
import { getTheme, ThemeLineHeight, ThemeZIndex, ThemeMediaQuery } from "./"
import { number } from "@storybook/addon-knobs"
import README from "./README.md"

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
      sidebar: README,
    },
  })
  .add(`fonts`, () => {
    return (
      <StoryUtils.Container>
        <div>
          {Object.entries(theme.fonts).map(([token, fontFamily]) => {
            return <LongText key={token} title={token} css={{ fontFamily }} />
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
          {Object.entries(theme.fontWeights).map(([token, fontWeight]) => {
            return <LongText key={token} title={token} css={{ fontWeight }} />
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
          {Object.entries(theme.letterSpacings).map(
            ([token, letterSpacing]) => {
              return (
                <LongText key={token} title={token} css={{ letterSpacing }} />
              )
            }
          )}
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
  .add(`radii`, () => {
    return (
      <StoryUtils.Container>
        <div css={{ display: `grid`, gridGap: `1rem` }}>
          {theme.radii.map((radius, token) => {
            return (
              <div
                key={radius}
                css={{
                  backgroundColor: theme.colors.purple[50],
                  color: theme.colors.white,
                  width: `6rem`,
                  height: `6rem`,
                  textAlign: `center`,
                  display: `flex`,
                  alignItems: `center`,
                  justifyContent: `space-around`,
                  borderRadius: radius,
                }}
              >
                <span>
                  {token} ({radius})
                </span>
              </div>
            )
          })}
        </div>
      </StoryUtils.Container>
    )
  })
  .add(`shadows`, () => {
    return (
      <StoryUtils.Container>
        <div css={{ display: `grid`, gridGap: `1rem` }}>
          {Object.entries(theme.shadows).map(([token, shadow]) => {
            return (
              <div
                key={token}
                css={{
                  boxShadow: shadow,
                  width: `6rem`,
                  height: `6rem`,
                  textAlign: `center`,
                  display: `flex`,
                  alignItems: `center`,
                  justifyContent: `space-around`,
                }}
              >
                <span>{token}</span>
              </div>
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
          {Object.entries(theme.zIndices).map(([token, zIndex], idx) => {
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
  .add(`media queries`, () => {
    const colorsByMediaQuery: Record<ThemeMediaQuery, string> = {
      mobile: theme.colors.green[50],
      phablet: theme.colors.orange[50],
      tablet: theme.colors.magenta[50],
      desktop: theme.colors.purple[50],
      hd: theme.colors.blue[50],
    }

    function MediaQueryCase() {
      const mediaCss = Object.entries(theme.mediaQueries).reduce(
        (memo, [token, mediaQuery]) => {
          return {
            ...memo,
            [mediaQuery]: {
              backgroundColor: colorsByMediaQuery[token as ThemeMediaQuery],
            },
          }
        },
        {}
      )

      const [media, setMedia] = React.useState<string>("")

      React.useEffect(() => {
        const getQuery = (token: ThemeMediaQuery) => {
          return `(min-width: ${theme.mediaBreakpoints[token]}px)`
        }

        const listener = () => {
          let matchedMedia = false
          Object.keys(theme.mediaQueries).forEach(token => {
            const query = getQuery(token as ThemeMediaQuery)

            if (window.matchMedia && window.matchMedia(query).matches) {
              matchedMedia = true
              setMedia(token)
            }
          })
          if (!matchedMedia) {
            setMedia(``)
          }
        }

        /**
         * using "resize" event instead of window.matchMedia(query).addEventListener
         * since the latter seems to be throttled by browser,
         * and we want immediate feedback for the purpose of this story
         */
        window.addEventListener(`resize`, listener)
        listener()

        return () => {
          window.removeEventListener(`resize`, listener)
        }
      }, [])

      return (
        <div>
          <p>Resize the window to see media queries in action</p>
          <div
            css={[
              {
                color: theme.colors.white,
                textAlign: `center`,
                display: `flex`,
                alignItems: `center`,
                justifyContent: `space-around`,
                padding: theme.space[5],
                backgroundColor: theme.colors.grey[50],
              },
              mediaCss,
            ]}
          >
            <span>
              Media: <strong>{media || "no media"}</strong>
            </span>
          </div>
        </div>
      )
    }

    return (
      <StoryUtils.Container>
        <MediaQueryCase />
      </StoryUtils.Container>
    )
  })
  .add(`transitions`, () => {
    const curveSpeed = number(`Curve speed (ms)`, 500)
    const baseCss = css({
      boxShadow: theme.shadows.raised,
      color: theme.colors.white,
      height: `6rem`,
      textAlign: `center`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-around`,
      padding: `0 ${theme.space[4]}`,
      position: "relative",
      zIndex: 1,
      "&:hover": {
        transform: `scale(2)`,
        zIndex: 2,
      },
    })
    const colors = [
      theme.colors.green[50],
      theme.colors.blue[50],
      theme.colors.purple[50],
      theme.colors.magenta[50],
      theme.colors.orange[50],
      theme.colors.teal[50],
    ]

    return (
      <StoryUtils.Container>
        <div css={{ display: `grid`, gridGap: `1rem`, textAlign: `center` }}>
          <h4>
            Curve <br />
            <small>Hover on a card to start a transition</small>
          </h4>
          {Object.entries(theme.transitions.curve).map(
            ([token, curve], idx) => {
              return (
                <div
                  key={token}
                  css={[
                    baseCss,
                    {
                      backgroundColor: colors[idx % colors.length],
                      transition: `all ${curveSpeed}ms ${curve}`,
                    },
                  ]}
                >
                  {token}
                </div>
              )
            }
          )}
          <h4>
            Speed <br />
            <small>Hover on a card to start a transition</small>
          </h4>
          {Object.entries(theme.transitions.speed)
            .sort(([_tokenA, speedA], [_tokenB, speedB]) => {
              return parseInt(speedA) - parseInt(speedB)
            })
            .map(([token, speed], idx) => {
              return (
                <div
                  key={token}
                  css={[
                    baseCss,
                    {
                      backgroundColor: colors[idx % colors.length],
                      transition: `all ${speed} linear`,
                    },
                  ]}
                >
                  {token}
                </div>
              )
            })}
        </div>
      </StoryUtils.Container>
    )
  })
