/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import { Shade } from "gatsby-design-tokens"
import { copyToClipboard } from "../../utils/helpers"
import { VisuallyHidden } from "../../components/VisuallyHidden"
import { getTheme, Theme } from ".."
import { ColorPaletteModal, SupportedColors } from "./ColorPaletteModal"

const baseTheme = getTheme()

type ColorKey = SupportedColors

const primaryColors: ColorKey[] = ["purple", "orange"]
const secondaryColors: ColorKey[] = [
  "magenta",
  "blue",
  "teal",
  "yellow",
  "red",
  "green",
]
const neutralColors: ColorKey[] = ["grey"]
const shades: Shade[] = [90, 80, 70, 60, 50, 40, 30, 20, 10, 5]
type ContrastScore = "AA" | "AA Large" | "AAA"
const contrastScoreLabels: Record<ContrastScore, string> = {
  AA: "2",
  "AA Large": "2+",
  AAA: "3",
}
const contrastScores: Record<
  ColorKey,
  Partial<Record<Shade, ContrastScore>>
> = {
  purple: {
    90: `AAA`,
    80: `AAA`,
    70: `AAA`,
    60: `AAA`,
    50: `AA`,
    40: `AA Large`,
  },
  orange: {
    90: `AA`,
    80: `AA Large`,
  },
  magenta: {
    90: `AAA`,
    80: `AAA`,
    70: `AAA`,
    60: `AAA`,
    50: `AA`,
    40: `AA Large`,
  },
  blue: {
    90: `AAA`,
    80: `AA`,
    70: `AA Large`,
    60: `AA Large`,
    50: `AA Large`,
  },
  teal: {
    90: `AA`,
    80: `AA Large`,
  },
  yellow: {
    90: `AA`,
  },
  red: {
    90: `AA`,
    80: `AA`,
    70: `AA`,
    60: `AA Large`,
    50: `AA Large`,
    40: `AA Large`,
  },
  green: {
    90: `AAA`,
    80: `AA`,
    70: `AA Large`,
    60: `AA Large`,
  },
  grey: {
    90: `AAA`,
    80: `AAA`,
    70: `AAA`,
    60: `AA`,
    50: `AA`,
  },
}
const invertTextColor: Record<ColorKey, Partial<Record<Shade, boolean>>> = {
  purple: {
    40: true,
  },
  orange: {
    90: true,
    80: true,
  },
  magenta: {
    40: true,
  },
  blue: {
    70: true,
    60: true,
    50: true,
  },
  teal: {
    90: true,
    80: true,
  },
  yellow: {},
  red: {
    60: true,
    50: true,
    40: true,
  },
  green: {
    70: true,
    60: true,
  },
  grey: {
    50: true,
  },
}

export function ColorsTable() {
  const [selectedColor, setSelectedColor] = React.useState<ColorKey | null>(
    null
  )
  const renderGroup = (group: ColorKey[], groupLabel: string) => {
    return group.map((color, idx, list) => {
      return (
        <tr key={color}>
          {idx === 0 && (
            <td
              css={theme => ({
                verticalAlign: `top`,
                fontFamily: theme.fonts.heading,
                fontWeight: theme.fontWeights.semiBold,
                fontSize: theme.fontSizes[5],
                paddingRight: theme.space[10],
              })}
              rowSpan={list.length}
            >
              {groupLabel}
            </td>
          )}
          <td
            css={theme => ({
              paddingRight: theme.space[10],
            })}
          >
            <button
              onClick={() => setSelectedColor(color)}
              css={(theme: Theme) => ({
                margin: 0,
                padding: 0,
                background: `none`,
                border: `none`,
                textTransform: `capitalize`,
                cursor: `pointer`,
                color: theme.colors.purple[50],
                fontSize: theme.fontSizes[3],
                fontFamily: theme.fonts.body,
                borderBottom: `1px solid currentColor`,
                "&:hover": {
                  color: theme.colors.purple[70],
                },
              })}
            >
              {color}
            </button>
          </td>
          {shades.map(shade => {
            const contrastScore = contrastScores[color][shade]
            return (
              <th
                key={shade}
                css={theme => ({
                  height: 40,
                  width: 40,
                  position: `relative`,
                  verticalAlign: `bottom`,
                  lineHeight: 1,
                  textAlign: `start`,
                  fontSize: theme.fontSizes[0],
                  fontWeight: theme.fontWeights.semiBold,
                  backgroundColor: theme.colors[color][shade],
                  color: invertTextColor[color][shade]
                    ? theme.colors.black
                    : theme.colors.white,
                })}
              >
                <span
                  css={{ position: `absolute`, bottom: 4, left: 4, zIndex: 1 }}
                >
                  {contrastScore ? contrastScoreLabels[contrastScore] : null}
                </span>
                <ColorButton color={baseTheme.colors[color][shade]} />
              </th>
            )
          })}
        </tr>
      )
    })
  }
  return (
    <React.Fragment>
      <table
        css={theme => ({
          verticalAlign: `baseline`,
          lineHeight: `40px`,
          borderSpacing: 8,
          fontFamily: theme.fonts.body,
        })}
      >
        <thead>
          <tr>
            <th>
              <VisuallyHidden>Color group</VisuallyHidden>
            </th>
            <th>
              <VisuallyHidden>Color</VisuallyHidden>
            </th>
            {shades.map(shade => (
              <th key={shade}>{shade}</th>
            ))}
          </tr>
        </thead>
        <tbody>{renderGroup(primaryColors, "Primary")}</tbody>
        <tbody>{renderGroup(secondaryColors, "Secondary")}</tbody>
        <tbody>{renderGroup(neutralColors, "Neutral")}</tbody>
      </table>
      {selectedColor && (
        <ColorPaletteModal
          isOpen={Boolean(selectedColor)}
          color={selectedColor}
          onClose={() => setSelectedColor(null)}
        />
      )}
    </React.Fragment>
  )
}

function ColorButton({ color }: { color: string }) {
  const [isCopied, setIsCopied] = React.useState<boolean>(false)

  React.useEffect(() => {
    if (!isCopied) {
      return
    }
    const timeout = setTimeout(() => setIsCopied(false), 5000)

    return () => {
      clearTimeout(timeout)
    }
  }, [isCopied, setIsCopied])

  return (
    <button
      css={{
        display: `block`,
        background: `none`,
        padding: 0,
        margin: 0,
        border: `none`,
        cursor: `pointer`,
        height: 40,
        width: 40,
        position: `relative`,
        "& > span": {
          opacity: 0,
        },
        "&:hover, &:focus": {
          "& > span": {
            opacity: 1,
          },
        },
      }}
      onClick={() => {
        copyToClipboard(color.toUpperCase()).then(() => setIsCopied(true))
      }}
    >
      <span
        css={theme => ({
          position: `absolute`,
          zIndex: 2,
          bottom: `100%`,
          marginBottom: theme.space[1],
          left: 0,
          padding: theme.space[3],
          backgroundColor: theme.colors.grey[5],
          color: theme.colors.grey[90],
          borderWidth: 1,
          borderStyle: `solid`,
          borderColor: theme.colors.grey[30],
          whiteSpace: `nowrap`,
          fontSize: theme.fontSizes[1],
          pointerEvents: `none`,
        })}
      >
        {isCopied ? (
          `Copied to clipboard!`
        ) : (
          <React.Fragment>
            Copy HEX{" "}
            <mark
              css={theme => ({
                backgroundColor: theme.colors.yellow[20],
                padding: theme.space[1],
                textTransform: `uppercase`,
              })}
            >
              {color}
            </mark>
          </React.Fragment>
        )}
      </span>
    </button>
  )
}
