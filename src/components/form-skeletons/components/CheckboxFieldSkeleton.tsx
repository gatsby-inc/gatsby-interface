import React from "react"
import {
  FormFieldSkeleton,
  FormFieldSkeletonProps,
  FormFieldSkeletonLabelProps,
  FormFieldSkeletonHintProps,
  FormFieldSkeletonErrorProps,
  FormFieldSkeletonLabel,
  FormFieldSkeletonHint,
  FormFieldSkeletonError,
  useFormFieldSkeleton,
} from "./FormFieldSkeleton"
import { getFinalAriaDescribedBy } from "../utils"
import { OmitControlProps } from "../sharedTypes"
import { showFormSkeletonDeprecatedMessage } from "../../../utils/maintenance/deprecationMessages"

export type CheckboxFieldSkeletonProps = FormFieldSkeletonProps
export function CheckboxFieldSkeleton(props: CheckboxFieldSkeletonProps) {
  showFormSkeletonDeprecatedMessage("CheckboxFieldSkeleton")
  return <FormFieldSkeleton {...props} />
}

export type CheckboxFieldSkeletonControlProps = Omit<
  OmitControlProps<JSX.IntrinsicElements["input"]>,
  "type"
>

export const CheckboxFieldSkeletonControl = React.forwardRef<
  HTMLInputElement,
  CheckboxFieldSkeletonControlProps
>(function CheckboxFieldSkeletonControl(props, ref) {
  const { id, hasError, meta } = useFormFieldSkeleton()

  return (
    <input
      id={id}
      {...props}
      type="checkbox"
      aria-describedby={getFinalAriaDescribedBy(
        meta.controlDescribedBy,
        props[`aria-describedby`]
      )}
      aria-invalid={hasError}
      ref={ref}
    />
  )
})

export type CheckboxFieldSkeletonLabelProps = FormFieldSkeletonLabelProps
export function CheckboxFieldSkeletonLabel(
  props: CheckboxFieldSkeletonLabelProps
) {
  return <FormFieldSkeletonLabel {...props} />
}

export type CheckboxFieldSkeletonHintProps = FormFieldSkeletonHintProps
export function CheckboxFieldSkeletonHint(
  props: CheckboxFieldSkeletonHintProps
) {
  return <FormFieldSkeletonHint {...props} />
}

export type CheckboxFieldSkeletonErrorProps = FormFieldSkeletonErrorProps
export function CheckboxFieldSkeletonError(
  props: CheckboxFieldSkeletonErrorProps
) {
  return <FormFieldSkeletonError {...props} />
}
