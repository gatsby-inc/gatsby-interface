/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import {
  FormFieldSkeletonProps,
  FormFieldSkeletonLabelProps,
} from "../../form-skeletons/components/FormFieldSkeleton"
import InputFieldSkeleton from "../../form-skeletons/components/InputFieldSkeleton"
import colors from "../../../theme/colors"
import { fontSizes, radius, spaces } from "../../../utils/presets"

function InputField(props: FormFieldSkeletonProps) {
  return <InputFieldSkeleton {...props} />
}

const Control: React.FC<
  React.InputHTMLAttributes<HTMLInputElement>
> = props => (
  <InputFieldSkeleton.Control
    css={{
      border: `1px solid ${colors.grey[30]}`,
      borderRadius: radius.default,
      color: colors.grey[90],
      fontSize: fontSizes.s,
      height: `2.25rem`,
      padding: `0 ${spaces.s}`,
      width: `100%`,

      ":focus": {
        borderColor: colors.purple[40],
        boxShadow: `0 0 0 3px ${colors.purple[20]}`,
        outline: `0`,
        transition: `box-shadow 0.15s ease-in-out`,
      },
    }}
    {...props}
  />
)

InputField.Control = Control
InputField.Control.displayName = `InputField.Control`

const Label: React.FC<FormFieldSkeletonLabelProps> = props => (
  <InputFieldSkeleton.Label
    css={{
      color: `red`,
    }}
    {...props}
  />
)

InputField.Label = Label
InputField.Label.displayName = `InputField.Label`

InputField.Hint = InputFieldSkeleton.Hint
InputField.Hint.displayName = `InputField.Hint`
InputField.Error = InputFieldSkeleton.Error
InputField.Error.displayName = `InputField.Hint`

export default InputField
