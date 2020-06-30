import React from "react"
import {
  FormFieldSkeleton,
  FormFieldSkeletonProps,
  useFormFieldSkeleton,
  FormFieldSkeletonLabelProps,
  FormFieldSkeletonLabel,
  FormFieldSkeletonHintProps,
  FormFieldSkeletonHint,
  FormFieldSkeletonErrorProps,
  FormFieldSkeletonError,
} from "./FormFieldSkeleton"
import { getFinalAriaDescribedBy } from "../utils"
import { OmitControlProps } from "../sharedTypes"
import { showFormSkeletonDeprecatedMessage } from "../../../utils/maintenance/deprecationMessages"

export type TextAreaFieldSkeletonProps = FormFieldSkeletonProps
export function TextAreaFieldSkeleton(props: TextAreaFieldSkeletonProps) {
  showFormSkeletonDeprecatedMessage("TextAreaFieldSkeleton")
  return <FormFieldSkeleton {...props} />
}

export type TextAreaFieldSkeletonControlProps = OmitControlProps<
  JSX.IntrinsicElements["textarea"]
>

export const TextAreaFieldSkeletonControl = React.forwardRef<
  HTMLTextAreaElement,
  TextAreaFieldSkeletonControlProps
>(function TextAreaFieldSkeletonControl(props, ref) {
  const { id, hasError, meta } = useFormFieldSkeleton()

  return (
    <textarea
      id={id}
      {...props}
      aria-describedby={getFinalAriaDescribedBy(
        meta.controlDescribedBy,
        props[`aria-describedby`]
      )}
      aria-invalid={hasError}
      ref={ref}
    />
  )
})

export type TextAreaFieldSkeletonLabelProps = FormFieldSkeletonLabelProps
export function TextAreaFieldSkeletonLabel(
  props: TextAreaFieldSkeletonLabelProps
) {
  return <FormFieldSkeletonLabel {...props} />
}

export type TextAreaFieldSkeletonHintProps = FormFieldSkeletonHintProps
export function TextAreaFieldSkeletonHint(
  props: TextAreaFieldSkeletonHintProps
) {
  return <FormFieldSkeletonHint {...props} />
}

export type TextAreaFieldSkeletonErrorProps = FormFieldSkeletonErrorProps
export function TextAreaFieldSkeletonError(
  props: TextAreaFieldSkeletonErrorProps
) {
  return <FormFieldSkeletonError {...props} />
}
