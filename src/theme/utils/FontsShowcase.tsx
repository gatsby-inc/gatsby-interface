/** @jsx jsx */
import { jsx } from "@emotion/core"
import { getTheme } from ".."
import { TextShowCase, TextShowCaseItem } from "./TextShowCase"

const baseTheme = getTheme()

export function FontsShowcase() {
  return (
    <TextShowCase>
      {Object.entries(baseTheme.fonts).map(([token, fontFamily]) => {
        return (
          <TextShowCaseItem
            key={token}
            token={token}
            rawValues={[fontFamily]}
            css={{ fontFamily }}
          />
        )
      })}
    </TextShowCase>
  )
}
