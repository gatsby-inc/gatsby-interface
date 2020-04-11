/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import README from "../README_INPUT_FIELD.md"
import { CheckboxGroupFieldBlock } from "../components/CheckboxGroupFieldBlock"
import { FormFieldLabelSize } from "../components/FormField.helpers"
import { getGroupFieldSandboxProps } from "./stories.utils"
import { withVariationsContainer } from "../../../utils/storybook"
import { getGroupFieldStoryOptions } from "../../form-skeletons/stories/storyUtils"

const LABEL_SIZES: FormFieldLabelSize[] = [`L`, `M`, `S`]

export default {
  title: `Form/Styled Blocks/CheckboxGroupFieldBlock`,
  parameters: {
    layout: `padded`,
    options: {
      showRoots: true,
    },
    readme: {
      sidebar: README,
    },
    chromatic: { pauseAnimationAtEnd: true },
  },
}

const options = getGroupFieldStoryOptions("short")

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
