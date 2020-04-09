/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import React from "react"
import {
  getTheme,
  ThemeLineHeight,
  ThemeZIndex,
  ThemeMediaQuery,
  Theme,
} from "./"
import { number } from "@storybook/addon-knobs"
import README from "./README.md"
import { ThemeDocs } from "./utils/storybook"

const theme = getTheme()

const labelStyles = {
  color: theme.colors.grey[50],
  fontFamily: theme.fonts.monospace,
  fontSize: theme.fontSizes[1],
  marginBottom: theme.space[4],
}

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

function getStoryParameters(scale?: keyof Theme) {
  return {
    docs: {
      page: () => {
        return <ThemeDocs theme={theme} scale={scale} />
      },
    },
  }
}

export default {
  title: `Theme/Scales`,
  parameters: {
    layout: `padded`,
    options: {
      showRoots: true,
    },
    readme: {
      sidebar: README,
    },
    ...getStoryParameters(),
  },
}

export const Colors = () => <ThemeDocs theme={theme} scale="colors" />

Colors.story = {
  parameters: getStoryParameters(`colors`),
}

export const Tones = () => <ThemeDocs theme={theme} scale="tones" />

Tones.story = {
  parameters: getStoryParameters(`tones`),
}

export const Fonts = () => (
  <div>
    {Object.entries(theme.fonts).map(([token, fontFamily]) => {
      return <LongText key={token} title={token} css={{ fontFamily }} />
    })}
  </div>
)

Fonts.story = {
  parameters: getStoryParameters(`fonts`),
}

export const FontSizes = () => (
  <div>
    {theme.fontSizes.map((_, size) => {
      const fontSize = theme.fontSizes[size]

      return (
        <React.Fragment key={size}>
          <LongText title={`${size} (=${fontSize})`} css={{ fontSize }} />
          <hr css={{ ":last-of-type": { display: `none` } }} />
        </React.Fragment>
      )
    })}
  </div>
)

FontSizes.story = {
  parameters: getStoryParameters(`fontSizes`),
}

export const FontWeights = () => (
  <div>
    {Object.entries(theme.fontWeights).map(([token, fontWeight]) => {
      return (
        <LongText
          key={token}
          title={`${token} (=${fontWeight})`}
          css={{ fontWeight }}
        />
      )
    })}
  </div>
)

FontWeights.story = {
  parameters: getStoryParameters(`fontWeights`),
}

export const LineHeights = () => (
  <div>
    {Object.keys(theme.lineHeights)
      .sort()
      .map(height => {
        const lineHeight = theme.lineHeights[height as ThemeLineHeight]

        return (
          <LongText
            key={height}
            title={`${height} (=${lineHeight})`}
            css={{ lineHeight }}
          />
        )
      })}
  </div>
)

LineHeights.story = {
  parameters: getStoryParameters(`lineHeights`),
}

export const LetterSpacings = () => (
  <div>
    {Object.entries(theme.letterSpacings).map(([token, letterSpacing]) => {
      return (
        <LongText
          key={token}
          title={`${token} (=${letterSpacing})`}
          css={{ letterSpacing }}
        />
      )
    })}
  </div>
)

LetterSpacings.story = {
  parameters: getStoryParameters(`letterSpacings`),
}

export const Space = () => (
  <div
    css={{
      display: `grid`,
      gridTemplateColumns: `repeat(4, auto)`,
      columnGap: theme.space[10],
      rowGap: theme.space[3],
      maxWidth: 640,
      fontFamily: theme.fonts.monospace,
    }}
  >
    <div css={{ textAlign: `right`, ...labelStyles }}>Token</div>
    <div css={{ textAlign: `right`, ...labelStyles }}>Value</div>
    <div css={labelStyles}>Visual size</div>
    <div css={{ textAlign: `right`, ...labelStyles }}>Pixels</div>
    {theme.space.map((space, token) => {
      return (
        <React.Fragment key={space}>
          <div css={{ textAlign: `right` }}>{token}</div>
          <div css={{ textAlign: `right` }}>{space}</div>
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
          <div css={{ textAlign: `right` }}>{parseFloat(space) * 16}px</div>
        </React.Fragment>
      )
    })}
  </div>
)

Space.story = {
  parameters: getStoryParameters(`space`),
}

export const Radii = () => (
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
)

Radii.story = {
  parameters: getStoryParameters(`radii`),
}

export const Shadows = () => (
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
)

Shadows.story = {
  parameters: getStoryParameters(`shadows`),
}

export const ZIndices = () => {
  const offset = 3
  const labelWidth = 12
  const zIndicesCount = Object.keys(theme.zIndices).length
  const maxWidth = `calc(${zIndicesCount} * ${offset}rem + ${labelWidth}rem)`
  const maxHeight = `calc(${zIndicesCount} * ${offset}rem + 2rem)`

  const colorsByToken: Record<ThemeZIndex, string> = {
    base: theme.colors.white,
    background: theme.colors.grey[10],
    dropdowns: theme.colors.yellow[10],
    toasts: theme.colors.orange[30],
    modals: theme.colors.red[20],
    a11yIndicators: theme.colors.purple[30],
  }

  return (
    <div css={{ width: maxWidth, height: maxHeight }}>
      {Object.entries(theme.zIndices).map(([token, zIndex], idx) => {
        const space = `calc(${zIndicesCount - idx} * ${offset}rem)`

        return (
          <div
            key={token}
            css={{
              zIndex,
              background: colorsByToken[token as ThemeZIndex],
              position: `fixed`,
              padding: `${space} 1rem 1rem`,
              border: `1px solid ${theme.colors.blackFade[50]}`,
              borderRadius: theme.radii[2],
              width: `${(zIndicesCount - idx) * offset + labelWidth}rem`,
            }}
          >
            <div
              css={{
                display: "flex",
                alignItems: "baseline",
                fontFamily: theme.fonts.monospace,
                fontSize: theme.fontSizes[1],
                lineHeight: theme.lineHeights.solid,
              }}
            >
              {token}{" "}
              <span
                css={{
                  fontSize: theme.fontSizes[0],
                  color: theme.colors.blackFade[80],
                  marginLeft: "auto",
                }}
              >
                {zIndex}
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

ZIndices.story = {
  parameters: getStoryParameters(`zIndices`),
}

export const MediaQueries = () => {
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

  return <MediaQueryCase />
}

MediaQueries.story = {
  parameters: getStoryParameters(`mediaQueries`),
}

export const Transitions = () => {
  const curveSpeed = number(`Curve speed (ms)`, 500)
  const baseCss = css({
    fontSize: theme.fontSizes[3],
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
      transform: `translateX(50%)`,
      zIndex: 2,
    },
  })
  const colors = [
    theme.colors.green[90],
    theme.colors.blue[90],
    theme.colors.purple[70],
    theme.colors.magenta[70],
    theme.colors.orange[90],
    theme.colors.teal[70],
  ]

  return (
    <div
      css={{
        display: `grid`,
        gridGap: `1rem`,
        textAlign: `center`,
        maxWidth: 640,
      }}
    >
      <h4>
        Curve <br />
        <small>Hover on a card to start a transition</small>
      </h4>
      {Object.entries(theme.transitions.curve).map(([token, curve], idx) => {
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
      })}
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
  )
}

Transitions.story = {
  parameters: getStoryParameters(`transitions`),
}
