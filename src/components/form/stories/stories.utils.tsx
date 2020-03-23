/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { text, radios, boolean } from "@storybook/addon-knobs"
import space from "../../../theme/space"
import { radioKnobOptions } from "../../../utils/storybook/knobs"
import { FormFieldLabelSize } from "../components/FormField.helpers"

export const Wrapper: React.FC<{}> = ({ children }) => (
  <div
    css={{
      maxWidth: `80%`,
      width: `25rem`,
      "& > * + *": {
        marginTop: `${space[8]}!important`,
      },
    }}
  >
    {children}
  </div>
)

const LABEL_SIZES: FormFieldLabelSize[] = [`L`, `M`, `S`]

export function getFieldBlockSandboxProps() {
  const label = text(`Label`, `Field label`)
  const hint = text(`Hint`, ``)
  const error = text(`Error`, ``)
  const size = radios(`Label size`, radioKnobOptions(LABEL_SIZES), `M`)
  const required = boolean(`Required`, false)
  const disabled = boolean(`Disabled`, false)

  return {
    label,
    hint,
    error,
    labelSize: size,
    required,
    disabled,
  }
}
