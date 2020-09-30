/** @jsx jsx */
import { jsx } from "@emotion/core"
import { getTheme } from ".."
import { TextShowCase, TextShowCaseItem } from "./TextShowCase"

const baseTheme = getTheme()

export function FontSizesShowcase() {
  return (
    <TextShowCase>
      {baseTheme.fontSizes.map((_, size) => {
        const fontSize = baseTheme.fontSizes[size]

        return (
          <TextShowCaseItem
            key={size}
            token={size}
            rawValues={[fontSize, `${parseFloat(fontSize) * 16}px`]}
            css={{ fontSize }}
          />
        )
      })}
    </TextShowCase>
  )
}
