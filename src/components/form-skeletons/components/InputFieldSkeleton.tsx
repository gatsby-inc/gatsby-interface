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

export type InputFieldSkeletonProps = FormFieldSkeletonProps
export function InputFieldSkeleton(props: InputFieldSkeletonProps) {
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
export function InputFieldSkeletonLabel(props: FormFieldSkeletonLabelProps) {
  return <FormFieldSkeletonLabel {...props} />
}

export type InputFieldSkeletonHintProps = FormFieldSkeletonHintProps
export function InputFieldSkeletonHint(props: FormFieldSkeletonHintProps) {
  return <FormFieldSkeletonHint {...props} />
}

export type InputFieldSkeletonErrorProps = FormFieldSkeletonErrorProps
export function InputFieldSkeletonError(props: FormFieldSkeletonErrorProps) {
  return <FormFieldSkeletonError {...props} />
}
