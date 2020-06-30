/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import { useFormFieldSkeleton } from "../../form-skeletons/components/FormFieldSkeleton"
import {
  useStyledFieldHint,
  useStyledFieldError,
  useStyledFieldLabel,
  WithStyledFieldLabel,
} from "./FormField"
import { getInputStyles } from "./FormField.helpers"
import {
  InputFieldSkeleton,
  InputFieldSkeletonControlProps,
  InputFieldSkeletonControl,
  InputFieldSkeletonHintProps,
  InputFieldSkeletonHint,
  InputFieldSkeletonErrorProps,
  InputFieldSkeletonError,
  InputFieldSkeletonLabel,
  InputFieldSkeletonProps,
  InputFieldSkeletonLabelProps,
} from "../../form-skeletons/components/InputFieldSkeleton"
import { Theme } from "../../../theme"
import { showFormFieldDeprecatedMessage } from "../../../utils/maintenance/deprecationMessages"

export type InputFieldProps = InputFieldSkeletonProps
export function InputField(props: InputFieldProps) {
  showFormFieldDeprecatedMessage("InputField")
  return <InputFieldSkeleton {...props}></InputFieldSkeleton>
}

export type InputFieldControlProps = Omit<InputFieldSkeletonControlProps, "ref">

export const InputFieldControl = React.forwardRef<
  HTMLInputElement,
  InputFieldControlProps
>(function InputFieldControl(props, ref) {
  const { hasError } = useFormFieldSkeleton()

  const placeholder =
    props.placeholder && props.disabled
      ? `The field is disabled`
      : props.placeholder

  return (
    <InputFieldSkeletonControl
      ref={ref}
      css={(theme: Theme) => [getInputStyles(theme, hasError)]}
      {...props}
      placeholder={placeholder}
    />
  )
})

export type InputFieldLabelProps = WithStyledFieldLabel<
  InputFieldSkeletonLabelProps
>
export function InputFieldLabel({
  children,
  size,
  isRequired,
  ...props
}: InputFieldLabelProps) {
  const styledProps = useStyledFieldLabel(children, { size, isRequired })

  return <InputFieldSkeletonLabel {...props} {...styledProps} />
}

export type InputFieldErrorProps = InputFieldSkeletonErrorProps
export function InputFieldError({ children, ...props }: InputFieldErrorProps) {
  const styledProps = useStyledFieldError(children)

  return <InputFieldSkeletonError {...props} {...styledProps} />
}

export type InputFieldHintProps = InputFieldSkeletonHintProps
export function InputFieldHint(props: InputFieldHintProps) {
  const styledProps = useStyledFieldHint()

  return <InputFieldSkeletonHint {...props} {...styledProps} />
}
