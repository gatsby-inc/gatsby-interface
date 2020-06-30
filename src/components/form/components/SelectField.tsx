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
  SelectFieldSkeleton,
  SelectFieldSkeletonProps,
  SelectFieldSkeletonControlProps,
  SelectFieldSkeletonControl,
  SelectFieldSkeletonLabel,
  SelectFieldSkeletonErrorProps,
  SelectFieldSkeletonError,
  SelectFieldSkeletonHintProps,
  SelectFieldSkeletonHint,
  SelectFieldSkeletonLabelProps,
} from "../../form-skeletons/components/SelectFieldSkeleton"
import { Theme } from "../../../theme"
import { showFormFieldDeprecatedMessage } from "../../../utils/maintenance/deprecationMessages"

export type SelectFieldProps = SelectFieldSkeletonProps
export function SelectField(props: SelectFieldProps) {
  showFormFieldDeprecatedMessage("SelectField")
  return <SelectFieldSkeleton {...props}></SelectFieldSkeleton>
}

export type SelectFieldControlProps = Omit<
  SelectFieldSkeletonControlProps,
  "ref"
>

export const SelectFieldControl = React.forwardRef<
  HTMLSelectElement,
  SelectFieldControlProps
>(function SelectFieldControl(props, ref) {
  const { hasError } = useFormFieldSkeleton()

  return (
    <SelectFieldSkeletonControl
      ref={ref}
      css={(theme: Theme) => [
        getInputStyles(theme, hasError),
        {
          padding: `0 ${theme.space[3]}`,
          backgroundImage: `url("data:image/svg+xml,%3Csvg stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 24 24' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z'%3E%3C/path%3E%3C/svg%3E")`,
          backgroundRepeat: `no-repeat`,
          backgroundPosition: `right ${theme.space[3]} top 50%, 0 0`,
        },
      ]}
      {...props}
    />
  )
})

export type SelectFieldLabelProps = WithStyledFieldLabel<
  SelectFieldSkeletonLabelProps
>
export function SelectFieldLabel({
  children,
  size,
  isRequired,
  ...props
}: SelectFieldLabelProps) {
  const styledProps = useStyledFieldLabel(children, { size, isRequired })

  return <SelectFieldSkeletonLabel {...props} {...styledProps} />
}

export type SelectFieldErrorProps = SelectFieldSkeletonErrorProps
export function SelectFieldError({
  children,
  ...props
}: SelectFieldErrorProps) {
  const styledProps = useStyledFieldError(children)

  return <SelectFieldSkeletonError {...props} {...styledProps} />
}

export type SelectFieldHintProps = SelectFieldSkeletonHintProps
export function SelectFieldHint(props: SelectFieldHintProps) {
  const styledProps = useStyledFieldHint()

  return <SelectFieldSkeletonHint {...props} {...styledProps} />
}
