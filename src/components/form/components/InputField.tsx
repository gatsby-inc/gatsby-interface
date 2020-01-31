/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import {
  FormFieldSkeleton,
  FormFieldSkeletonProps,
} from "../../form-skeletons/components/FormFieldSkeleton"
import { FormField, getFieldStackStyles } from "./FormField"
import { getInputStyles } from "./FormField.helpers"
import InputFieldSkeleton, {
  InputFieldSkeletonControlProps,
} from "../../form-skeletons/components/InputFieldSkeleton"
import { Theme } from "../../../theme"

function InputField(props: FormFieldSkeletonProps) {
  return <InputFieldSkeleton {...props}></InputFieldSkeleton>
}

export type InputFieldControlProps = Omit<InputFieldSkeletonControlProps, "ref">

const Control = React.forwardRef<HTMLInputElement, InputFieldControlProps>(
  (props, ref) => {
    const { hasError } = FormFieldSkeleton.useFormFieldSkeleton()

    const placeholder =
      props.placeholder && props.disabled
        ? `The field is disabled`
        : props.placeholder

    return (
      <InputFieldSkeleton.Control
        ref={ref}
        css={(theme: Theme) => [
          getFieldStackStyles(`item`, theme),
          getInputStyles(theme, hasError),
        ]}
        {...props}
        placeholder={placeholder}
      />
    )
  }
)

InputField.Control = Control
InputField.Control.displayName = `InputField.Control`

InputField.Wrapper = FormField.Stack
InputField.Wrapper.displayName = `InputField.StackWrapper`

InputField.Label = FormField.Label
InputField.Label.displayName = `InputField.Label`

InputField.Hint = FormField.Hint
InputField.Hint.displayName = `InputField.Hint`

InputField.Error = FormField.Error
InputField.Error.displayName = `InputField.Hint`

export default InputField
