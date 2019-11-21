/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import {
  FormFieldSkeletonProps,
  FormFieldSkeleton,
  FormFieldSkeletonLabelProps,
  FormFieldSkeletonHintProps,
  FormFieldSkeletonErrorProps,
} from "../../form-skeletons/components/FormFieldSkeleton"

export function FormField(props: FormFieldSkeletonProps) {
  return <FormFieldSkeleton {...props} />
}

const Wrapper: React.FC<"className"> = props => (
  <div
    css={{
      border: `1px solid red`,
    }}
    {...props}
  />
)

FormField.Wrapper = Wrapper
FormField.Wrapper.displayName = `FormField.Wrapper`

const Label: React.FC<FormFieldSkeletonLabelProps> = props => (
  <FormFieldSkeleton.Label
    css={{
      color: `red`,
    }}
    {...props}
  />
)

FormField.Label = Label
FormField.Label.displayName = `FormField.Label`

const Hint: React.FC<FormFieldSkeletonHintProps> = props => (
  <FormFieldSkeleton.Hint
    css={{
      color: `orange`,
      fontWeight: `bold`,
    }}
    {...props}
  />
)

FormField.Hint = Hint
FormField.Hint.displayName = `FormField.Hint`

const Error: React.FC<FormFieldSkeletonErrorProps> = props => (
  <FormFieldSkeleton.Error
    css={{
      color: `green`,
      fontWeight: `bold`,
    }}
    {...props}
  />
)

FormField.Error = Error
FormField.Error.displayName = `InputField.Error`

export default FormField
