/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import { useFormFieldSkeleton } from "../../form-skeletons/components/FormFieldSkeleton"
import {
  useStyledFieldLabel,
  useStyledFieldError,
  useStyledFieldHint,
  WithStyledFieldLabel,
} from "./FormField"
import { getInputStyles } from "./FormField.helpers"
import {
  TextAreaFieldSkeleton,
  TextAreaFieldSkeletonProps,
  TextAreaFieldSkeletonControlProps,
  TextAreaFieldSkeletonControl,
  TextAreaFieldSkeletonLabel,
  TextAreaFieldSkeletonErrorProps,
  TextAreaFieldSkeletonError,
  TextAreaFieldSkeletonHintProps,
  TextAreaFieldSkeletonHint,
  TextAreaFieldSkeletonLabelProps,
} from "../../form-skeletons/components/TextAreaFieldSkeleton"
import { Theme } from "../../../theme"
import { showFormFieldDeprecatedMessage } from "../../../utils/maintenance/deprecationMessages"

export type TextAreaFieldProps = TextAreaFieldSkeletonProps
export function TextAreaField(props: TextAreaFieldProps) {
  showFormFieldDeprecatedMessage("TextAreaField")
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

export type TextAreaFieldLabelProps = WithStyledFieldLabel<
  TextAreaFieldSkeletonLabelProps
>
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
