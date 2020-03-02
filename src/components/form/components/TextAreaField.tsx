/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import {
  FormFieldSkeletonProps,
  useFormFieldSkeleton,
} from "../../form-skeletons/components/FormFieldSkeleton"
import {
  getFieldStackStyles,
  FormFieldStack,
  FormFieldStackProps,
  FormFieldLabelProps,
  useStyledFieldLabel,
  useStyledFieldError,
  useStyledFieldHint,
} from "./FormField"
import { getInputStyles } from "./FormField.helpers"
import {
  TextAreaFieldSkeleton,
  TextAreaFieldSkeletonControlProps,
  TextAreaFieldSkeletonControl,
  TextAreaFieldSkeletonLabel,
  TextAreaFieldSkeletonErrorProps,
  TextAreaFieldSkeletonError,
  TextAreaFieldSkeletonHintProps,
  TextAreaFieldSkeletonHint,
} from "../../form-skeletons/components/TextAreaFieldSkeleton"
import { Theme } from "../../../theme"

export type TextAreaFieldProps = FormFieldSkeletonProps
export function TextAreaField(props: FormFieldSkeletonProps) {
  return <TextAreaFieldSkeleton {...props}></TextAreaFieldSkeleton>
}

export type TextAreaFieldControlProps = Omit<
  TextAreaFieldSkeletonControlProps,
  "ref"
>

export const TextAreaFieldControl = React.forwardRef<
  HTMLTextAreaElement,
  TextAreaFieldControlProps
>(function TextAreaFieldControl(props, ref) {
  const { hasError } = useFormFieldSkeleton()

  const placeholder =
    props.placeholder && props.disabled
      ? `The field is disabled`
      : props.placeholder

  return (
    <TextAreaFieldSkeletonControl
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

export type TextAreaFieldWrapperProps = FormFieldStackProps
export const TextAreaFieldWrapper = FormFieldStack

export type TextAreaFieldLabelProps = FormFieldLabelProps
export function TextAreaFieldLabel({
  children,
  size,
  isRequired,
  ...props
}: TextAreaFieldLabelProps) {
  const styledProps = useStyledFieldLabel(children, { size, isRequired })

  return <TextAreaFieldSkeletonLabel {...props} {...styledProps} />
}

export type TextAreaFieldErrorProps = TextAreaFieldSkeletonErrorProps
export function TextAreaFieldError({
  children,
  ...props
}: TextAreaFieldErrorProps) {
  const styledProps = useStyledFieldError(children)

  return <TextAreaFieldSkeletonError {...props} {...styledProps} />
}

export type TextAreaFieldHintProps = TextAreaFieldSkeletonHintProps
export function TextAreaFieldHint(props: TextAreaFieldHintProps) {
  const styledProps = useStyledFieldHint()

  return <TextAreaFieldSkeletonHint {...props} {...styledProps} />
}
