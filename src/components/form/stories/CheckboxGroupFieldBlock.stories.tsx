/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { action } from "@storybook/addon-actions"
import { CheckboxGroupFieldBlock } from "../components/CheckboxGroupFieldBlock"
import { FormFieldLabelSize } from "../components/FormField.helpers"
import { getGroupFieldSandboxProps } from "./stories.utils"
import { withVariationsContainer } from "../../../utils/storybook"
import { getGroupFieldStoryOptions } from "../../form-skeletons/stories/storyUtils"
import CheckboxGroupFieldBlockDocs from "./CheckboxGroupFieldBlock.mdx"
import { FormFieldBlockLayout } from ".."
import { FormGroupOptionsDirection } from "../components/FormGroupField"

const LABEL_SIZES: FormFieldLabelSize[] = [`L`, `M`, `S`]

export default {
  title: `Form/Styled Blocks/CheckboxGroupFieldBlock`,
  parameters: {
    layout: `padded`,
    options: {
      showRoots: true,
    },
    docs: {
      page: CheckboxGroupFieldBlockDocs,
    },
    chromatic: { pauseAnimationAtEnd: true },
  },
}

const options = getGroupFieldStoryOptions("short")
const optionsWithDefaultCheck = options.map((option, idx) => {
  if (idx === 0) {
    return {
      ...option,
      defaultChecked: true,
    }
  }
  return option
})

function useCheckboxGroupState() {
  const [fieldValue, setFieldValue] = React.useState<string[]>([])

  const onChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    const target = e.currentTarget
    const valueArray: string[] = [...fieldValue]

    if (target.checked) {
      valueArray.push(target.value)
    } else {
      valueArray.splice(valueArray.indexOf(target.value), 1)
    }

    setFieldValue(valueArray)
  }

  return {
    value: fieldValue,
    onChange,
  }
}

export const Basic = () => {
  const stateProps = useCheckboxGroupState()

  return (
    <CheckboxGroupFieldBlock
      id="checkboxGroupFieldBlock"
      name="checkboxGroupFieldBlock"
      options={options}
      label="Field label"
      {...stateProps}
    />
  )
}

export const Sandbox = () => {
  const stateProps = useCheckboxGroupState()

  return (
    <CheckboxGroupFieldBlock
      id="checkboxGroupFieldBlock"
      name="checkboxGroupFieldBlock"
      options={options}
      {...getGroupFieldSandboxProps()}
      {...stateProps}
    />
  )
}

Sandbox.story = {
  parameters: {
    chromatic: { disable: true },
  },
}

export const Required = () => {
  const stateProps = useCheckboxGroupState()

  return (
    <CheckboxGroupFieldBlock
      id="checkboxGroupFieldBlock"
      name="checkboxGroupFieldBlock"
      options={options}
      label="Field label"
      required
      {...stateProps}
    />
  )
}

export const Disabled = () => {
  const stateProps = useCheckboxGroupState()

  return (
    <CheckboxGroupFieldBlock
      id="checkboxGroupFieldBlock"
      name="checkboxGroupFieldBlock"
      options={options}
      label="Field label"
      disabled
      {...stateProps}
    />
  )
}

export const WithHint = () => {
  const stateProps = useCheckboxGroupState()

  return (
    <CheckboxGroupFieldBlock
      id="checkboxGroupFieldBlock"
      name="checkboxGroupFieldBlock"
      options={options}
      label="Field label"
      hint="Hint text"
      {...stateProps}
    />
  )
}

export const WithError = () => {
  const stateProps = useCheckboxGroupState()

  return (
    <CheckboxGroupFieldBlock
      id="checkboxGroupFieldBlock"
      name="checkboxGroupFieldBlock"
      options={options}
      label="Field label"
      error="Error message"
      {...stateProps}
    />
  )
}

export const WithErrorAndHint = () => {
  const stateProps = useCheckboxGroupState()

  return (
    <CheckboxGroupFieldBlock
      id="checkboxGroupFieldBlock"
      name="checkboxGroupFieldBlock"
      options={options}
      label="Field label"
      hint="Hint text"
      error="Error message"
      {...stateProps}
    />
  )
}

export const WithRichText = () => {
  const stateProps = useCheckboxGroupState()

  return (
    <CheckboxGroupFieldBlock
      id="checkboxGroupFieldBlock"
      name="checkboxGroupFieldBlock"
      options={options}
      {...stateProps}
      label={
        <span>
          This is a <strong>rich label</strong>
        </span>
      }
      hint={
        <span>
          This is a <em>rich hint text</em>
        </span>
      }
      error={
        <span>
          This is a <u>rich error message</u>
        </span>
      }
    />
  )
}

export const LabelSizes = () =>
  LABEL_SIZES.map(labelSize => {
    const stateProps = useCheckboxGroupState()

    return (
      <CheckboxGroupFieldBlock
        key={labelSize}
        id={`checkboxGroupFieldBlock--${labelSize}`}
        name={`checkboxGroupFieldBlock--${labelSize}`}
        options={options}
        label={`Label size: "${labelSize}"`}
        labelSize={labelSize}
        {...stateProps}
      />
    )
  })

LabelSizes.story = {
  decorators: [withVariationsContainer],
}

const LAYOUTS: FormFieldBlockLayout[] = [`vertical`, `horizontal`]

export const Layouts = () =>
  LAYOUTS.map(layout => (
    <CheckboxGroupFieldBlock
      key={layout}
      id={layout}
      name={layout}
      options={optionsWithDefaultCheck}
      label={`Layout: ${layout}`}
      onChange={e => action(`Change`)(e.target.value)}
      layout={layout}
    />
  ))

Layouts.story = {
  decorators: [withVariationsContainer],
}

const OPTIONS_DIRECTIONS: FormGroupOptionsDirection[] = [`row`, `column`]

export const OptionsDirections = () =>
  OPTIONS_DIRECTIONS.map(optionsDirection => (
    <CheckboxGroupFieldBlock
      key={optionsDirection}
      id={optionsDirection}
      name={optionsDirection}
      options={optionsWithDefaultCheck}
      label={`Options Direction: ${optionsDirection}`}
      onChange={e => action(`Change`)(e.target.value)}
      optionsDirection={optionsDirection}
    />
  ))

OptionsDirections.story = {
  decorators: [withVariationsContainer],
}
