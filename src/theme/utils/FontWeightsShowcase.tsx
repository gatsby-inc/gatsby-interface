/** @jsx jsx */
import { jsx } from "@emotion/core"
import { getTheme } from ".."
import { TextShowCase, TextShowCaseItem } from "./TextShowCase"

const baseTheme = getTheme()

export function FontWeightsShowcase() {
  return (
    <TextShowCase>
      {Object.entries(baseTheme.fontWeights).map(([token, fontWeight]) => {
        return (
          <TextShowCaseItem
            key={token}
            token={token}
            rawValues={[fontWeight]}
            css={{ fontWeight }}
          />
        )
      })}
    </TextShowCase>
  )
}
