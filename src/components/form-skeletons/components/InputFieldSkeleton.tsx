import React from "react"
import {
  FormFieldSkeleton,
  FormFieldSkeletonProps,
  useFormFieldSkeleton,
  FormFieldSkeletonLabel,
  FormFieldSkeletonLabelProps,
  FormFieldSkeletonHintProps,
  FormFieldSkeletonHint,
  FormFieldSkeletonErrorProps,
  FormFieldSkeletonError,
} from "./FormFieldSkeleton"
import { getFinalAriaDescribedBy } from "../utils"
import { OmitControlProps } from "../sharedTypes"
import { showFormSkeletonDeprecatedMessage } from "../../../utils/maintenance/deprecationMessages"

export type InputFieldSkeletonProps = FormFieldSkeletonProps
export function InputFieldSkeleton(props: InputFieldSkeletonProps) {
  showFormSkeletonDeprecatedMessage("InputFieldSkeleton")
  return <FormFieldSkeleton {...props} />
}

export type InputFieldSkeletonControlProps = OmitControlProps<
  JSX.IntrinsicElements["input"]
>

export const InputFieldSkeletonControl = React.forwardRef<
  HTMLInputElement,
  InputFieldSkeletonControlProps
>(function InputFieldSkeletonControl(props, ref) {
  const { id, hasError, meta } = useFormFieldSkeleton()

  return (
    <input
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

export type InputFieldSkeletonLabelProps = FormFieldSkeletonLabelProps
export function InputFieldSkeletonLabel(props: InputFieldSkeletonLabelProps) {
  return <FormFieldSkeletonLabel {...props} />
}

export type InputFieldSkeletonHintProps = FormFieldSkeletonHintProps
export function InputFieldSkeletonHint(props: InputFieldSkeletonHintProps) {
  return <FormFieldSkeletonHint {...props} />
}

export type InputFieldSkeletonErrorProps = FormFieldSkeletonErrorProps
export function InputFieldSkeletonError(props: InputFieldSkeletonErrorProps) {
  return <FormFieldSkeletonError {...props} />
}
