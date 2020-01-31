/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import {
  FormFieldSkeleton,
  FormFieldSkeletonProps,
} from "../../form-skeletons/components/FormFieldSkeleton"
import { FormField, getFieldStackStyles } from "./FormField"
import { getInputStyles } from "./FormField.helpers"
import TextAreaFieldSkeleton, {
  TextAreaFieldSkeletonControlProps,
} from "../../form-skeletons/components/TextAreaFieldSkeleton"
import { Theme } from "../../../theme"

function TextAreaField(props: FormFieldSkeletonProps) {
  return <TextAreaFieldSkeleton {...props}></TextAreaFieldSkeleton>
}

export type TextAreaFieldControlProps = Omit<
  TextAreaFieldSkeletonControlProps,
  "ref"
>

const Control = React.forwardRef<
  HTMLTextAreaElement,
  TextAreaFieldControlProps
>((props, ref) => {
  const { hasError } = FormFieldSkeleton.useFormFieldSkeleton()

  const placeholder =
    props.placeholder && props.disabled
      ? `The field is disabled`
      : props.placeholder

  return (
    <TextAreaFieldSkeleton.Control
      ref={ref}
      css={(theme: Theme) => [
        getInputStyles(theme, hasError),
        getFieldStackStyles(`item`, theme),
        {
          display: `block`,
          minHeight: `4.85em`,
          resize: `vertical`,
          padding: `${theme.space[2]} ${theme.space[3]}`,
        },
      ]}
      {...props}
      placeholder={placeholder}
    />
  )
})

TextAreaField.Control = Control
TextAreaField.Control.displayName = `TextAreaField.Control`

TextAreaField.Wrapper = FormField.Stack
TextAreaField.Wrapper.displayName = `TextAreaField.StackWrapper`

TextAreaField.Label = FormField.Label
TextAreaField.Label.displayName = `TextAreaField.Label`

TextAreaField.Hint = FormField.Hint
TextAreaField.Hint.displayName = `TextAreaField.Hint`

TextAreaField.Error = FormField.Error
TextAreaField.Error.displayName = `TextAreaField.Hint`

export default TextAreaField
