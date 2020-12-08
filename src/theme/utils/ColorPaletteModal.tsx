/** @jsx jsx */
import { Global, jsx } from "@emotion/core"
import * as React from "react"
import { Colors, Shade } from "gatsby-design-tokens"
import { rgb as wcag } from "wcag-contrast"
import { normal } from "color-blend"
import { Heading } from "../../components/Heading"
import { Text } from "../../components/Text"
import { getTheme, Theme, ThemeCss } from ".."
import { hexToRGB } from "../../utils/helpers"
import Dialog from "@reach/dialog"
import { MdClose } from "react-icons/md"
import "@reach/dialog/styles.css"

const baseTheme = getTheme()
const { colors: themeColors } = getTheme()

const paddingMixin: ThemeCss = theme => ({
  padding: theme.space[7],
  [theme.mediaQueries.desktop]: {
    padding: theme.space[9],
  },
})

// adapted from https://github.com/jxnblk/colorable 🙏
const minimums = {
  aa: 4.5,
  aaLarge: 3,
  aaa: 7,
  aaaLarge: 4.5,
}

const rgbArray = (color: string) => {
  const pars = color.indexOf(`,`)
  const repars = color.indexOf(`,`, pars + 1)

  return [
    parseInt(color.substr(5, pars)),
    parseInt(color.substr(pars + 1, repars)),
    parseInt(
      color.substr(color.indexOf(`,`, pars + 1) + 1, color.indexOf(`,`, repars))
    ),
    parseFloat(
      color.substr(color.indexOf(`,`, repars + 1) + 1, color.indexOf(`)`))
    ),
  ] as const
}

function getA11yLabel(colorA11yInfo: ColorA11yInfo, compact?: boolean) {
  let label = compact ? `×` : `Fail`

  if (colorA11yInfo.aaa || colorA11yInfo.aa || colorA11yInfo.aaLarge) {
    if (colorA11yInfo.aaa) {
      label = compact ? `3` : `AAA`
    } else if (colorA11yInfo.aa) {
      label = compact ? `2` : `AA`
    } else if (colorA11yInfo.aaLarge) {
      label = compact ? `2+` : `AA Large`
    }
  }

  return label
}

function getTextColor(contrast: ColorableContrast) {
  return contrast.blackOnColor < contrast.whiteOnColor ? `white` : `black`
}

function colorToHex(
  color: string
): readonly [number, number, number, number | undefined] {
  if (color.startsWith(`rgba(`)) {
    return rgbArray(color)
  }

  const rgb = hexToRGB(color)

  return rgb ? [rgb.r, rgb.g, rgb.b, 1] : [0, 0, 0, 1]
}

type ColorA11yInfo = {
  contrast: number
  aa: boolean
  aaLarge: boolean
  aaa: boolean
  aaaLarge: boolean
}

function getA11YInfo(hex: string, bg: string): ColorA11yInfo {
  const text = colorToHex(hex)
  const background = colorToHex(bg)

  // not 100% sure how well this works — values are slightly different
  // than what https://contrast-ratio.com/ produces when the text
  // color is an rgba value; contrast ratios for solid colors seem fine
  const overlaid = normal(
    {
      r: background[0],
      g: background[1],
      b: background[2],
      a: background[3] || 1,
    },
    { r: text[0], g: text[1], b: text[2], a: text[3] || 1 }
  )

  const contrast = wcag(
    [overlaid.r, overlaid.g, overlaid.b],
    [background[0], background[1], background[2]]
  )
  if (isNaN(contrast)) {
    console.log(hex, bg)
  }

  return {
    contrast: contrast,
    aa: contrast >= minimums.aa,
    aaLarge: contrast >= minimums.aaLarge,
    aaa: contrast >= minimums.aaa,
    aaaLarge: contrast >= minimums.aaaLarge,
  }
}

function Column({ children, ...rest }: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      css={(theme: Theme) => [
        paddingMixin(theme),
        {
          display: `flex`,
          alignItems: `center`,
          flexWrap: `wrap`,
          width: `100%`,
          margin: 0,
          [theme.mediaQueries.desktop]: {
            width: `50%`,
          },
        },
      ]}
      {...rest}
    >
      {children}
    </div>
  )
}

function CloseButton(props: React.ComponentPropsWithoutRef<"button">) {
  return (
    <button
      {...props}
      css={(theme: Theme) => ({
        display: `flex`,
        alignItems: `center`,
        textAlign: `center`,
        background: `transparent`,
        borderRadius: theme.radii[6],
        fontSize: theme.fontSizes[7],
        width: 48,
        height: 48,
        justifyContent: `center`,
        marginLeft: `auto`,
        border: 0,
        cursor: `pointer`,
        outline: 0,
        WebkitAppearance: `none`,
        padding: theme.space[4],
        transition: `all ${theme.transitions.speed.fast} ${theme.transitions.curve.default}`,
      })}
    >
      <MdClose />
    </button>
  )
}

function AADescription() {
  return (
    <Text as="p" css={{ marginBottom: 0 }}>
      This text is conforming to AA requirements of the WCAG. This is a score of
      at least <strong>4.5</strong>, the required contrast score for text sizes
      below 18pt/~24px @1x.
    </Text>
  )
}

function AALargeDescription() {
  return (
    <Text
      as="p"
      css={(theme: Theme) => ({
        marginBottom: 0,
        fontSize: theme.fontSizes[5],
      })}
    >
      This text is conforming to <strong>AA Large</strong> — the smallest
      acceptable amount of contrast for type sizes of 14pt bold/18pt (which
      roughly translates to ~18.5px bold/24px @1x) and larger. This is a score
      of at least
      {` `}
      <strong>3.0</strong>.
    </Text>
  )
}

function AAADescription() {
  return (
    <Text as="p" css={{ marginBottom: 0 }}>
      This text is conforming to AAA requirements of WCAG. The contrast score of
      at least <strong>7.0</strong> qualifies it for long form text.
    </Text>
  )
}

// Renders either white or black text samples
function TextSamples({
  contrast,
  bg,
  colorName,
}: {
  contrast: ColorableContrast
  bg: string
  colorName: string
}) {
  const inverted = contrast.blackOnColor < contrast.whiteOnColor
  const colors = inverted
    ? baseTheme.colors.whiteFade
    : baseTheme.colors.blackFade

  return (
    <React.Fragment>
      {Object.keys(colors).map((color, i) => {
        const shade = Number(color) as Shade
        const a11yInfo = getA11YInfo(colors[shade], bg)
        const a11yLabel = getA11yLabel(a11yInfo)

        if (a11yLabel !== `Fail`) {
          return (
            <div key={`text-sample-${colorName}-${shade}-${i}`}>
              <div
                css={{
                  display: `flex`,
                  alignItems: `center`,
                  color: colors[shade],
                }}
              >
                <Text
                  css={(theme: Theme) => ({
                    marginRight: theme.space[5],
                    color: colors[shade],
                    fontFamily: theme.fonts.monospace,
                    ":before, :after": { display: `none` },
                    background: `none`,
                  })}
                >
                  {inverted ? `white` : `black`}Fade[{shade}]
                </Text>
                {` `}
                <div
                  css={{
                    display: `flex`,
                    alignItems: `center`,
                  }}
                >
                  <Text
                    css={(theme: Theme) => ({
                      marginRight: theme.space[5],
                      color: colors[shade],
                      textAlign: `right`,
                      width: `40px`,
                    })}
                  >
                    {(Math.round(a11yInfo.contrast * 100) / 100).toFixed(2)}
                  </Text>
                  {a11yLabel}
                </div>
              </div>
            </div>
          )
        } else {
          return false
        }
      })}
    </React.Fragment>
  )
}

const modalContent = (color: SupportedColors) => {
  const colors: JSX.Element[] = []

  Object.keys(palette[color].colors)
    .sort((a, b) => Number(b) - Number(a))
    .forEach((colorNumber, index) => {
      const colorData = palette[color].colors[Number(colorNumber) as Shade]
      const textColor = getTextColor(colorData.contrast)

      colors.push(
        <div
          css={theme => ({
            width: `100%`,
            [theme.mediaQueries.desktop]: {
              display: `flex`,
              alignItems: `stretch`,
            },
          })}
          key={`palette-${index}`}
        >
          <Column css={{ background: colorData.hex, color: textColor }}>
            <Text
              as="span"
              css={(theme: Theme) => ({
                color: textColor,
                fontFamily: theme.fonts.monospace,
                fontWeight: theme.fontWeights.bold,
                marginBottom: theme.space[5],
              })}
            >
              colors.{color}[{colorNumber}] {colorData.name && colorData.name}
            </Text>
            <Text
              css={(theme: Theme) => ({
                color: textColor,
                marginRight: theme.space[5],
                marginLeft: `auto`,
              })}
            >
              {colorData.hex}
            </Text>
            <Text as="span" css={{ color: textColor }}>
              {colorData.rgb.red}, {colorData.rgb.green}, {colorData.rgb.blue}
            </Text>
            <div
              css={{
                width: `100%`,
                flexShrink: 0,
              }}
            >
              <TextSamples
                contrast={colorData.contrast}
                bg={colorData.hex}
                colorName={`colors.${color}[${colorNumber}]`}
              />
            </div>
          </Column>
          <Column
            css={(theme: Theme) => ({
              background: theme.colors.white,
              alignContent: `baseline`,
            })}
          >
            <Text
              as="p"
              css={(theme: Theme) => ({
                color: theme.colors.grey[80],
                fontFamily: theme.fonts.monospace,
                fontWeight: theme.fontWeights.bold,
                marginRight: theme.space[4],
                marginBottom: theme.space[5],
              })}
            >
              colors.{color}[{colorNumber}] {colorData.name && colorData.name}
            </Text>
            <Text
              as="span"
              css={(theme: Theme) => ({
                color: theme.colors.grey[80],
                fontWeight: theme.fontWeights.body,
                marginLeft: `auto`,
              })}
            >
              {colorData.contrast.colorOnWhite.toFixed(2)} /{` `}
              {getA11yLabel(colorData.a11y)}
            </Text>
            <div
              css={{
                width: `100%`,
                flexShrink: 0,
                "& p": { color: colorData.hex },
              }}
            >
              {getA11yLabel(colorData.a11y) === `AA` && <AADescription />}
              {getA11yLabel(colorData.a11y) === `AAA` && <AAADescription />}
              {getA11yLabel(colorData.a11y) === `AA Large` && (
                <AALargeDescription />
              )}
            </div>
          </Column>
        </div>
      )
    })

  return colors
}

type ColorableContrast = {
  colorOnWhite: number
  whiteOnColor: number
  blackOnColor: number
}

const colorable = function(
  hex: string
): {
  hex: string
  rgb: { red: number; green: number; blue: number }
  contrast: ColorableContrast
  a11y: any
} {
  const rgb = hexToRGB(hex)
  const red = rgb ? rgb.r : 0
  const green = rgb ? rgb.g : 0
  const blue = rgb ? rgb.b : 0
  const rgbArray: [number, number, number] = [red, green, blue]

  return {
    hex,
    rgb: {
      red,
      green,
      blue,
    },
    contrast: {
      colorOnWhite: wcag(rgbArray, [255, 255, 255]),
      whiteOnColor: wcag([255, 255, 255], rgbArray),
      blackOnColor: wcag([0, 0, 0], rgbArray),
    },
    a11y: getA11YInfo(hex, themeColors.white),
  }
}

// Palette meta information
const meta: Record<
  SupportedColors,
  { base: Shade; meta?: { [k: string]: any } }
> = {
  purple: {
    base: 60,
    meta: {
      60: {
        name: `Gatsby`,
        pms: {
          value: `2077 C`,
          href: `https://www.pantone.com/color-finder/2077-C`,
        },
        cmyk: {
          value: `76 85 0 0`,
        },
      },
      50: { name: `Lilac` },
      20: { name: `Lavender` },
    },
  },
  orange: {
    base: 50,
    meta: {
      50: { name: `Accent` },
    },
  },
  magenta: { base: 50 },
  red: {
    base: 50,
    meta: {
      70: { name: `Warning` },
    },
  },
  green: {
    base: 50,
  },
  yellow: {
    base: 40,
  },
  blue: {
    base: 50,
  },
  // black: {
  //   meta: {
  //     name: `Black`,
  //     cmyk: {
  //       value: `0 0 0 100`,
  //     },
  //   },
  // },
  // white: {
  //   meta: {
  //     name: `White`,
  //     cmyk: {
  //       value: `0 0 0 0`,
  //     },
  //   },
  // },
  grey: {
    base: 40,
  },
  teal: {
    base: 50,
  },
}

type Palette = Record<
  SupportedColors,
  {
    name: string
    base: Shade
    colors: Record<Shade, any>
  }
>

// Merge info from `meta` and `colors`
// and add contrast and accessibility information
function createPalette(): Palette {
  const palette: Partial<Palette> = {}

  for (const key of Object.keys(themeColors)) {
    if (!(key in meta)) {
      continue
    }
    const color = key as SupportedColors
    const colorData = meta[color]
    const shadesInfo: Partial<Record<Shade, unknown>> = {}

    Object.keys(themeColors[color])
      .sort((a, b) => Number(a) - Number(b))
      .forEach(key => {
        const shade = Number(key) as Shade
        shadesInfo[shade] = {
          ...colorable(themeColors[color][shade]),
          ...(colorData.base && colorData.base === shade && { base: true }),
          ...(colorData.meta &&
            colorData.meta[shade] && {
              name: colorData.meta[shade].name,
              pms: colorData.meta[shade].pms,
              cmyk: colorData.meta[shade].cmyk,
            }),
        }
      })

    palette[color] = {
      name: color, // Color group name
      base: colorData.base,
      colors: shadesInfo as Record<Shade, unknown>,
    }
  }

  return palette as Palette
}

const palette = createPalette()

export type SupportedColors = Extract<
  keyof Colors,
  | "purple"
  | "orange"
  | "yellow"
  | "red"
  | "magenta"
  | "blue"
  | "teal"
  | "green"
  | "grey"
>

export function ColorPaletteModal<T extends SupportedColors>({
  isOpen,
  color,
  onClose,
}: {
  isOpen: boolean
  color: T
  onClose: () => void
}) {
  const base = palette[color].colors[palette[color].base]

  return (
    <Dialog
      isOpen={isOpen}
      onDismiss={onClose}
      aria-label={color}
      css={(theme: Theme) => ({
        position: `fixed`,
        top: 0,
        width: `100%`,
        height: `100%`,
        zIndex: theme.zIndices.modals,
        background: theme.colors.white,
        fontFamily: theme.fonts.body,
        overflowY: `auto`,
        "&[data-reach-dialog-content]": {
          width: `100%`,
          margin: 0,
          padding: 0,
        },
      })}
    >
      <Global
        styles={(theme: Theme) => ({
          "[data-reach-dialog-overlay]": {
            zIndex: theme.zIndices.modals,
          },
        })}
      />
      <div
        css={(theme: Theme) => [
          paddingMixin(theme),
          {
            display: `flex`,
            alignItems: `baseline`,
          },
        ]}
      >
        <Heading
          css={(theme: Theme) => ({
            fontSize: theme.fontSizes[7],
            marginRight: theme.space[5],
            marginTop: 0,
            color: theme.colors.black,
            textTransform: `capitalize`,
          })}
        >
          {palette[color].name}
        </Heading>
        <CloseButton
          onClick={onClose}
          aria-label={`Close “${palette[color].name}” modal`}
        />
      </div>
      <div
        css={(theme: Theme) => [
          paddingMixin(theme),
          {
            background: base.hex,
          },
        ]}
      >
        <Heading
          as="h2"
          css={(theme: Theme) => ({
            margin: 0,
            lineHeight: theme.lineHeights.solid,
            color: getTextColor(base.contrast),
          })}
        >
          Base {palette[color].base} {base.name && <span> — {base.name}</span>}
        </Heading>
      </div>
      {modalContent(color).map(color => color)}
    </Dialog>
  )
}
