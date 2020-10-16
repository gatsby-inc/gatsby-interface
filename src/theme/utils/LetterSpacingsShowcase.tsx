/** @jsx jsx */
import { jsx } from "@emotion/core"
import { getTheme } from ".."
import { TextShowCase, TextShowCaseItem } from "./TextShowCase"

const baseTheme = getTheme()

export function LetterSpacingsShowcase() {
  return (
    <TextShowCase>
      {Object.entries(baseTheme.letterSpacings).map(
        ([token, letterSpacing]) => {
          return (
            <TextShowCaseItem
              key={token}
              token={token}
              rawValues={[letterSpacing]}
              css={{ letterSpacing }}
            />
          )
        }
      )}
    </TextShowCase>
  )
}
