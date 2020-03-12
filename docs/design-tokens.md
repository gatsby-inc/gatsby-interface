# Design tokens

Most of design tokens values used in `gatsby-interface` are imported from the `gatsby-desing-tokens` package. We define `types` for them and re-export for usage in Gatsby Cloud app gatsbyjs.com pages. In some cases the values of imported tokens are extended or overwritten.

# from gatsby-design-tokens

## colors

Imported from `gatsby-interface-tokens` and extended with three named values (legacy values used in Cloud, take a look at comment inside the object):

```javascript
colors = {
  purple: {
    5: "#fcfaff",
    10: "#f6edfa",
    20: "#f1defa",
    30: "#d9bae8",
    40: "#b17acc",
    50: "#8a4baf",
    60: "#663399",
    70: "#542c85",
    80: "#452475",
    90: "#362066",
  },
  orange: {
    5: "#fffcf7",
    10: "#fff4db",
    20: "#ffedbf",
    30: "#ffe4a1",
    40: "#ffd280",
    50: "#ffb238",
    60: "#fb8400",
    70: "#f67300",
    80: "#e65800",
    90: "#db3a00",
  },
  yellow: {
    5: "#fffdf7",
    10: "#fff5bf",
    20: "#fff2a8",
    30: "#ffeb99",
    40: "#ffdf37",
    50: "#fed038",
    60: "#fec21e",
    70: "#e3a617",
    80: "#bf9141",
    90: "#8a6534",
  },
  red: {
    5: "#fffafa",
    10: "#fde7e7",
    20: "#ffbab8",
    30: "#ff8885",
    40: "#ff5a54",
    50: "#fa2915",
    60: "#ec1818",
    70: "#da0013",
    80: "#ce0009",
    90: "#b80000",
  },
  magenta: {
    5: "#fffafd",
    10: "#ffe6f6",
    20: "#f2c4e3",
    30: "#e899ce",
    40: "#d459ab",
    50: "#bc027f",
    60: "#a6026a",
    70: "#940159",
    80: "#7d0e59",
    90: "#690147",
  },
  blue: {
    5: "#f5fcff",
    10: "#dbf0ff",
    20: "#90cdf9",
    30: "#63b8f6",
    40: "#3fa9f5",
    50: "#0d96f2",
    60: "#0e8de6",
    70: "#047bd3",
    80: "#006ac1",
    90: "#004ca3",
  },
  teal: {
    5: "#f7ffff",
    10: "#dcfffd",
    20: "#ccfffc",
    30: "#a6fffa",
    40: "#73fff7",
    50: "#05f7f4",
    60: "#2de3da",
    70: "#00bdb6",
    80: "#10a39e",
    90: "#008577",
  },
  green: {
    5: "#f7fdf7",
    10: "#def5dc",
    20: "#a1da9e",
    30: "#79cd75",
    40: "#59c156",
    50: "#37b635",
    60: "#2ca72c",
    70: "#1d9520",
    80: "#088413",
    90: "#006500",
  },
  grey: {
    5: "#fbfbfb",
    10: "#f5f5f5",
    20: "#f0f0f2",
    30: "#d9d7e0",
    40: "#b7b5bd",
    50: "#78757a",
    60: "#635e69",
    70: "#48434f",
    80: "#36313d",
    90: "#232129",
  },
  white: "#ffffff",
  black: "#000000",
  gatsby: "#663399",
  lilac: "#8a4baf",
  lavender: "#f1defa",
  accent: "#ffb238",
  warning: "#da0013",
  blackFade: {
    5: "rgba(35, 33, 41, 0.05)",
    10: "rgba(35, 33, 41, 0.1)",
    20: "rgba(35, 33, 41, 0.2)",
    30: "rgba(35, 33, 41, 0.3)",
    40: "rgba(35, 33, 41, 0.4)",
    50: "rgba(35, 33, 41, 0.5)",
    60: "rgba(35, 33, 41, 0.6)",
    70: "rgba(35, 33, 41, 0.7)",
    80: "rgba(35, 33, 41, 0.8)",
    90: "rgba(35, 33, 41, 0.9)",
  },
  whiteFade: {
    5: "rgba(255, 255, 255, 0.05)",
    10: "rgba(255, 255, 255, 0.1)",
    20: "rgba(255, 255, 255, 0.2)",
    30: "rgba(255, 255, 255, 0.3)",
    40: "rgba(255, 255, 255, 0.4)",
    50: "rgba(255, 255, 255, 0.5)",
    60: "rgba(255, 255, 255, 0.6)",
    70: "rgba(255, 255, 255, 0.7)",
    80: "rgba(255, 255, 255, 0.8)",
    90: "rgba(255, 255, 255, 0.9)",
  },
  ui: {
    background: "#fbfbfb",
    hover: "#fcfaff",
    border: {
      subtle: "#f0f0f2",
    },
  },
  link: {
    color: "#8a4baf",
    border: "#d9bae8",
    hoverBorder: "#8a4baf",
  },
  text: {
    header: "#000000",
    primary: "#36313d",
    secondary: "#78757a",
    placeholder: "#b7b5bd",
  },
  input: {
    border: "#d9d7e0",
    focusBorder: "#ffd280",
    focusBoxShadow: "#ffedbf",
  },
  code: {
    bgInline: "#fbf2e9",
    bg: "#fdfaf6",
    border: "#faede5",
    text: "#866c5b",
    remove: "#da0013",
    add: "#088413",
    selector: "#b94185",
    tag: "#137886",
    keyword: "#096fb3",
    comment: "#527713",
    punctuation: "#53450e",
    regex: "#dc0437",
    cssString: "#a2466c",
    invisibles: "#e0d7d1",
    scrollbarThumb: "#f4d1c6",
    lineHighlightBorder: "#f1beb6",
    copyButton: "#635e69",
    lineHighlightBackground: "#fbf0ea",
    scrollbarTrack: "#faede5",
  },

  /* extensions  */
  primaryBackground: "#ffffff",
  secondaryBackground: "#fbfbfb",
  standardLine: "#f0f0f2",
}
```

## space

Imported from `gatsby-interface-tokens` and extended (added three additional values):

```javascript
 space = [
    0: "0rem"
    1: "0.125rem" // extension
    2: "0.25rem"
    3: "0.5rem"
    4: "0.75rem"
    5: "1rem"
    6: "1.25rem"
    7: "1.5rem"
    8: "2rem"
    9: "2.5rem"
    10: "3rem"
    11: "3.5rem"
    12: "4rem"
    13: "4.5rem"
    14: "5.25rem" // extension
    15: "6rem" // extension
  ]
```

## fonts

Imported from `gatsby-interface-tokens` and re-exported with no changes:

```javascript
fonts = {
  heading:
    "Futura PT,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
  monospace:
    "SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace",
  serif: "Georgia,Times New Roman,Times,serif",
  body:
    "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
  system:
    "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
}
```

## fontSizes

Imported from `gatsby-interface-tokens` and re-exported with no changes:

```javascript

fontSizes = {
  0: "0.75rem"
  1: "0.875rem"
  2: "1rem"
  3: "1.125rem"
  4: "1.25rem"
  5: "1.5rem"
  6: "1.75rem"
  7: "2rem"
  8: "2.25rem"
  9: "2.625rem"
  10: "3rem"
  11: "3.375rem"
  12: "3.75rem"
  13: "4.25rem"
  14: "4.75rem"
  15: "5.25rem"
  16: "5.75rem"
}
```

If you have to use `font-size` value smaller than `0.75rem` (`fontSizes[0]`) you can use inline values `fontSize: "0.5rem"`, but that's only applicable to text as an graphic element (e.g. badge with number), you should never use a phares or body text smaller than `fontSizes[0]`.

## fontWeights

Imported from `gatsby-desing-tokens` and re-exported with no changes:

```javascript
fontWeights = {
  body: 400,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  heading: 700,
}
```

## letterSpacings

Imported from `gatsby-desing-tokens` and re-exported with no changes:

```javascript
letterSpacings = default {
 normal: `normal`,
 tracked: `0.075em`,
 tight: `-0.015em`,
}
```

## lineHeights

Imported from `gatsby-desing-tokens` and re-exported with no changes:

```javascript
lineHeights = {
  solid: 1,
  dense: 1.25,
  heading: 1.25,
  default: 1.5,
  body: 1.5,
  loose: 1.75,
}
```

## radii

Imported from `gatsby-desing-tokens` and re-exported with no changes:

```javascript
radii = [
 0: 0,
 1: `2px`,
 2: `4px`,
 3: `8px`,
 4: `16px`,
 5: `9999px`,
 6: `100%`
]
```

## shadows

Imported from `gatsby-desing-tokens` and re-exported with no changes:

```javascript
shadows = {
  raised: `0px 1px 2px rgba(46, 41, 51, 0.08), 0px 2px 4px rgba(71, 63, 79, 0.08)`,
  floating: `0px 2px 4px rgba(46, 41, 51, 0.08), 0px 4px 8px rgba(71, 63, 79, 0.16)`,
  overlay: `0px 4px 8px rgba(46, 41, 51, 0.08), 0px 8px 16px rgba(71, 63, 79, 0.16)`,
  dialog: `0px 4px 16px rgba(46, 41, 51, 0.08), 0px 8px 24px rgba(71, 63, 79, 0.16)`,
}
```

## transition

Imported from `gatsby-desing-tokens` and re-exported with no changes:

```javascript
transition = {
  default: `250ms cubic-bezier(0.4, 0, 0.2, 1)`,
  curve: {
    default: `cubic-bezier(0.4, 0, 0.2, 1)`,
    fastOutLinearIn: `cubic-bezier(0.4, 0, 1, 1)`,
  },
  speed: {
    faster: `50ms`,
    fast: `100ms`,
    default: `250ms`,
    slow: `500ms`,
    slower: `1000ms`,
  },
}
```

**Note**: Maybe we should flatten this token to two separate token, with more universal names because all of these could be used as values for `transition` but also `animation` css properties.

# Local tokens

The following are local tokens, independent of `gatsby-design-tokens`, at least for now. There are two options for them in the future. Adjust to `gatsby-design-tokens` that option need some tests. Coordinate updates in `gatsby-desing-tokens`, that need discussion and agreement with owners of the package. Or the third option, they will stay local for all.

## breakpoints

```javascript
breakpoints = {
  mobile: 360,
  phablet: 550,
  tablet: 750,
  desktop: 1000,
  hd: 1300,
}
```

**Note**: There is a space to switch to breakpoints imported from `gatsby-desing-tokens` but it requires more testing of layout responsivnes on mobile viewports

## dimensions

```javascript
dimensions = {
  siteHeader: {
    height: `3.75rem`,
  },
  layout: {
    width: 90,
  },
  dropdown: {
    list: {
      width: `250px`,
    },
  },
  toast: {
    minHeight: `3rem`,
  },
  pageNav: {
    minHeight: `5rem`,
  },
  pagePadding: {
    mobile: `1.4rem`,
    tablet: `2rem`,
  },
  buildList: {
    indentation: `5rem`,
  },
}
```

**Note**: Optional refactoring - change the name to `sizes`

## zIndices

```javascript
zIndices = {
  background: 0,
  base: 1,
  dropdowns: 10,
  toasts: 100,
  modals: 1000,
  a11yIndicators: 10000,
}
```

**Note**: Our `keys` and `values` are different than the ones in `gatsby-design-tokens`, but there is a room to unify them, but that needs coordination with the `gatsby-desing-tokens` owners.

## animations

```javascript
animations = {
  iconLoadingAnim: keyframes`
 0% {
   transform: rotate(0);
 }
 100% {
   transform: rotate(360deg);
 }
`,
  iconHoverAnim: keyframes`
 33% {
   transform:  scale(1);
   }
 66% {
   transform: scale(0.8);
 }
`,
}
```

**Note**: There is no coresponding token in `gatsby-desing-tokens`.
