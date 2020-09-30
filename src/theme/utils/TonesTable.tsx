/** @jsx jsx */
import { jsx } from "@emotion/core"
import { ToneColors } from "../tones"
import { AtomTone } from "../types"
import { getTheme } from ".."

const baseTheme = getTheme()

export function TonesTable() {
  type ToneKey = keyof ToneColors
  const toneKeys: ToneKey[] = [
    "superDark",
    "darker",
    "dark",
    "medium",
    "light",
    "lighter",
    "superLight",
    "text",
    "textInverted",
    "mediumInverted",
  ]
  const tones: AtomTone[] = [`BRAND`, `SUCCESS`, `WARNING`, `DANGER`, `NEUTRAL`]

  return (
    <table
      css={theme => ({
        lineHeight: `40px`,
        fontFamily: theme.fonts.body,
        borderSpacing: 8,
      })}
    >
      <thead>
        <tr>
          <th>Tone</th>
          {tones.map(tone => (
            <th key={tone} css={{ width: 120 }}>
              {tone}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {toneKeys.map(toneKey => {
          return (
            <tr>
              <td>{toneKey}</td>
              {tones.map(tone => (
                <td
                  key={tone}
                  css={{
                    backgroundColor: baseTheme.tones[tone][toneKey],
                  }}
                ></td>
              ))}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
