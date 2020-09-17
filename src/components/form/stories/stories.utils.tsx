/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { Story, Preview, DocsContext } from "@storybook/addon-docs/dist/blocks"
import { text, radios, boolean } from "@storybook/addon-knobs"
import coreClient from "@storybook/core/dist/client"
import { radioKnobOptions } from "../../../utils/storybook/knobs"
import {
  StyledLabelSize,
  FormFieldBlockLayout,
  FormGroupOptionsDirection,
} from ".."

const LABEL_SIZES: StyledLabelSize[] = [`L`, `M`, `S`]

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

const OPTIONS_DIRECTIONS: FormGroupOptionsDirection[] = [`row`, `column`]

export function getGroupFieldSandboxProps() {
  const optionsDirection = radios(
    `Options Direction`,
    radioKnobOptions(OPTIONS_DIRECTIONS),
    `column`
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
      This compound component can be used as building blocks for your{" "}
      {fieldType} fields. They do not have any spacing or positioning styles,
      you'll have to take care of those yourself (or use{" "}
      <code>{blockComponentName}</code> or <code>{connectedComponentName}</code>
      )
    </React.Fragment>
  )
}

class PropsStoryErrorBoundary extends React.Component<
  { errorMessage?: string },
  { hasError: boolean }
> {
  constructor(props: { errorMessage?: string }) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1 style={{ color: "red" }}>
          {this.props.errorMessage || `Something went wrong.`}
        </h1>
      )
    }

    return this.props.children
  }
}

export function PropsDescriptionStory({ storyName }: { storyName: string }) {
  const docsContext = React.useContext(DocsContext)

  return (
    <PropsStoryErrorBoundary
      errorMessage={`No story kind found for ${storyName}!`}
    >
      <Preview>
        <Story id={coreClient.toId(docsContext.kind!, storyName)} />
      </Preview>
    </PropsStoryErrorBoundary>
  )
}
