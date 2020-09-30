/** @jsx jsx */
import { jsx } from "@emotion/core"
import { getTheme } from ".."
import { LONG_TEXT } from "../../utils/storybook"
import { TextShowCase, TextShowCaseItem } from "./TextShowCase"

const baseTheme = getTheme()

export function LineHeightsShowcase() {
  return (
    <TextShowCase>
      {Object.entries(baseTheme.lineHeights).map(([token, lineHeight]) => {
        return (
          <TextShowCaseItem
            key={token}
            token={token}
            rawValues={[lineHeight]}
            css={{ lineHeight }}
          >
            {LONG_TEXT}
          </TextShowCaseItem>
        )
      })}
    </TextShowCase>
  )
}
