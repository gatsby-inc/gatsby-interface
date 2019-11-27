/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import {
  FormFieldSkeleton,
  FormFieldSkeletonProps,
} from "../../form-skeletons/components/FormFieldSkeleton"
import { FormField } from "./FormField"
import InputFieldSkeleton, {
  InputFieldSkeletonControlProps,
} from "../../form-skeletons/components/InputFieldSkeleton"
import colors from "../../../theme/colors"
import { fontSizes, radius, spaces } from "../../../utils/presets"

function InputField(props: FormFieldSkeletonProps) {
  return <InputFieldSkeleton {...props}></InputFieldSkeleton>
}

export type InputFieldControlProps = Omit<InputFieldSkeletonControlProps, "ref">

const Control = React.forwardRef<HTMLInputElement, InputFieldControlProps>(
  (props, ref) => {
    const { hasError, hasHint } = FormFieldSkeleton.useFormFieldSkeleton()

    return (
      <InputFieldSkeleton.Control
        ref={ref}
        css={{
          border: `1px solid ${colors.grey[30]}`,
          borderColor: hasError ? `red` : colors.grey[30],
          borderRadius: radius.default,
          color: colors.grey[90],
          fontSize: fontSizes.s,
          height: `2.25rem`,
          marginBottom: hasError || hasHint ? spaces.xs : 0,
          padding: `0 ${spaces.s}`,
          width: `100%`,
          position: `relative`,
          zIndex: 1,

          "&:required l": {
            background: `blue`,
          },

          ":focus": {
            borderColor: colors.purple[40],
            boxShadow: `0 0 0 3px ${colors.purple[20]}`,
            outline: `0`,
            transition: `box-shadow 0.15s ease-in-out`,
          },

          ":disabled": {
            background: colors.grey[10],
            cursor: `not-allowed`,
          },
        }}
        {...props}
      />
    )
  }
)

InputField.Control = Control
InputField.Control.displayName = `InputField.Control`

InputField.Wrapper = FormField.Wrapper
InputField.Wrapper.displayName = `InputField.Wrapper`

InputField.Label = FormField.Label
InputField.Label.displayName = `InputField.Label`

InputField.Hint = FormField.Hint
InputField.Hint.displayName = `InputField.Hint`

InputField.Error = FormField.Error
InputField.Error.displayName = `InputField.Hint`

export default InputField
