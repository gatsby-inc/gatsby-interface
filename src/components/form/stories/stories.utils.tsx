/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { text, radios, boolean } from "@storybook/addon-knobs"
import space from "../../../theme/space"
import { radioKnobOptions } from "../../../utils/storybook/knobs"
import { FormFieldLabelSize } from "../components/FormField.helpers"
import { FormFieldBlockLayout } from "../components/FormField"

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

export function getFieldSandboxProps() {
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

const LAYOUTS: FormFieldBlockLayout[] = [`horizontal`, `vertical`]

export function getFieldBlockSandboxProps() {
  const layout = radios(`Layout`, radioKnobOptions(LAYOUTS), `vertical`)

  return {
    ...getFieldSandboxProps(),
    layout,
  }
}

const OPTIONS_DIRECTIONS: FormFieldBlockLayout[] = [`horizontal`, `vertical`]

export function getGroupFieldSandboxProps() {
  const optionsDirection = radios(
    `Options Direction`,
    radioKnobOptions(OPTIONS_DIRECTIONS),
    `vertical`
  )

  return {
    ...getFieldBlockSandboxProps(),
    optionsDirection,
  }
}

export function FieldDocDisclaimer({
  blockComponentName,
  connectedComponentName,
  fieldType,
}: {
  blockComponentName: string
  connectedComponentName: string
  fieldType: string
}) {
  return (
    <React.Fragment>
      These components can be used as building blocks for your {fieldType}{" "}
      fields. They do not have any spacing or positioning styles, you'll have to
      take care of those yourself (or use <code>{blockComponentName}</code> or{" "}
      <code>{connectedComponentName}</code>)
    </React.Fragment>
  )
}
