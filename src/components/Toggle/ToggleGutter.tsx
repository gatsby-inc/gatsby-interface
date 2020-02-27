/** @jsx jsx */
import { jsx } from "@emotion/core"
import { AtomTone } from "../../theme/types"
import { Theme, ThemeCss } from "../../theme"

export type ToggleGutterProps = JSX.IntrinsicElements["span"]

export default function ToggleGutter(props: ToggleGutterProps) {
  return (
    <span
      {...props}
      aria-hidden
      css={(theme: Theme) => [
        {
          background: theme.colors.grey[30],
          borderRadius: theme.radii[5],
          cursor: `pointer`,
          display: `inline-block`,
          height: `24px`,
          padding: `3px`,
          transition: `all .3s ease, background .5s`,
          userSelect: `none`,
          width: `48px`,

          ":after": {
            background: theme.colors.white,
            position: `relative`,
            display: `block`,
            content: `""`,
            width: `18px`,
            height: `18px`,
            borderRadius: theme.radii[5],
            transition: `all 0.1s ease`,
            left: 0,
          },

          ":active": {
            ":after": {
              width: `24px`,
            },
          },
        },
      ]}
    />
  )
}

export const ToggleGutterTagName = "span"

export const toggleGutterFocusCss: ThemeCss = (theme: Theme) => ({
  boxShadow: `0 0 0 3px ${theme.colors.blue[30]}`,
  outline: `0`,
})

export const toggleGutterCheckedCss = (
  tone: AtomTone = `BRAND`
): ThemeCss => theme => ({
  background: theme.tones[tone].medium,
  ":after": {
    left: `calc(100% - 18px)`,
  },
  ":active": {
    ":after": {
      left: `calc(100% - 24px)`,
    },
  },
})
