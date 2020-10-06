/** @jsx jsx */
import { jsx, keyframes } from "@emotion/core"
import * as React from "react"
import { getTheme, ThemeCss } from ".."
import { Heading } from "../../components/Heading"

const baseTheme = getTheme()

const baseCss: ThemeCss = theme => ({
  fontFamily: theme.fonts.monospace,
  fontSize: theme.fontSizes[1],
  paddingBottom: theme.space[4],
})

// delay animation so that bars are in sync
// @see https://github.com/uber/baseweb/blob/07befaffd7b5e61792adac44e66da70918f54487/documentation-site/components/theming/animations.js 🙏
const transitionAnimation = (speed: string) =>
  keyframes({
    from: { width: "0px" },
    to: { width: "100%" },
    ...(speed !== "100%" && {
      [parseInt(speed) / 10 + "%"]: {
        width: "100%",
      },
    }),
  })

const Token = ({ children }: { children?: React.ReactNode }) => (
  <div>{children}</div>
)
const TokenValue = ({ children }: { children?: React.ReactNode }) => (
  <div
    css={theme => ({
      fontSize: theme.fontSizes[0],
      color: theme.colors.blackFade[80],
    })}
  >
    {children}
  </div>
)
const TransitionDemo = ({
  color,
  curve = "linear",
  speed,
}: {
  color?: string
  curve?: string
  speed?: any
}) => (
  <div>
    <div
      css={theme => ({
        background: theme.colors.grey[20],
        height: theme.space[2],
        width: "100%",
        marginTop: theme.space[3],
        marginBottom: theme.space[3],
        borderRadius: theme.radii[0],
      })}
    >
      <div
        css={theme => ({
          animationDuration: `1s`,
          animationTimingFunction: curve,
          animationIterationCount: `infinite`,
          animationDirection: `alternate`,
          height: `100%`,
          background: color,
          borderRadius: theme.radii[0],
          animationName: transitionAnimation(speed),
        })}
      />
    </div>
  </div>
)

export function TransitionsShowcase() {
  const curveSpeed = 1000

  const colors = [
    baseTheme.colors.yellow[50],
    baseTheme.colors.orange[50],
    baseTheme.colors.red[40],
    baseTheme.colors.magenta[40],
    baseTheme.colors.purple[40],
    baseTheme.colors.blue[50],
  ]

  return (
    <div
      css={theme => ({
        display: `grid`,
        gridGap: theme.space[5],
        maxWidth: 560,
      })}
    >
      <Heading as="h2" css={{ marginTop: 0 }}>
        Speed
      </Heading>
      {Object.entries(baseTheme.transitions.speed)
        .sort(([_tokenA, speedA], [_tokenB, speedB]) => {
          return parseInt(speedA) - parseInt(speedB)
        })
        .map(([token, speed], idx) => {
          return (
            <div key={token} css={baseCss}>
              <Token>{token}</Token>
              <TransitionDemo
                color={colors[idx % colors.length]}
                speed={speed}
              />
              <TokenValue>{speed}</TokenValue>
            </div>
          )
        })}
      <Heading as="h2">
        Curve{" "}
        <small
          css={theme => ({
            fontFamily: theme.fonts.monospace,
            fontWeight: theme.fontWeights.body,
            color: theme.colors.grey[50],
          })}
        >
          @{curveSpeed}ms
        </small>
      </Heading>
      {Object.entries(baseTheme.transitions.curve).map(
        ([token, curve], idx) => {
          return (
            <div key={token} css={baseCss}>
              <Token>{token}</Token>
              <TransitionDemo
                color={colors[idx % colors.length]}
                curve={curve}
                speed={curveSpeed}
              />
              <TokenValue>{curve}</TokenValue>
            </div>
          )
        }
      )}
    </div>
  )
}
