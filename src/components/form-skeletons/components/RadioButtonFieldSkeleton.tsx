import React from "react"
import {
  FormFieldSkeletonHintProps,
  FormFieldSkeletonHint,
  FormFieldSkeletonErrorProps,
  FormFieldSkeletonError,
} from "./FormFieldSkeleton"
import {
  FormGroupFieldSkeleton,
  FormGroupFieldSkeletonProps,
  FormGroupFieldSkeletonLabel,
  FormGroupFieldSkeletonLabelProps,
  FormGroupFieldSkeletonOption,
  FormGroupFieldSkeletonOptionProps,
  FormGroupFieldSkeletonOptionLabel,
  FormGroupFieldSkeletonOptionLabelProps,
} from "./FormGroupFieldSkeleton"
import { showFormSkeletonDeprecatedMessage } from "../../../utils/maintenance/deprecationMessages"

export type RadioButtonFieldSkeletonProps = FormGroupFieldSkeletonProps
export function RadioButtonFieldSkeleton(props: RadioButtonFieldSkeletonProps) {
  showFormSkeletonDeprecatedMessage("RadioButtonFieldSkeleton", true)
  return <FormGroupFieldSkeleton {...props} />
}

export type RadioButtonFieldSkeletonLabelProps = FormGroupFieldSkeletonLabelProps
export function RadioButtonFieldSkeletonLabel(
  props: RadioButtonFieldSkeletonLabelProps
) {
  return <FormGroupFieldSkeletonLabel {...props} />
}

export type RadioButtonFieldSkeletonHintProps = FormFieldSkeletonHintProps
export function RadioButtonFieldSkeletonHint(
  props: RadioButtonFieldSkeletonHintProps
) {
  return <FormFieldSkeletonHint {...props} />
}

export type RadioButtonFieldSkeletonErrorProps = FormFieldSkeletonErrorProps
export function RadioButtonFieldSkeletonError(
  props: RadioButtonFieldSkeletonErrorProps
) {
  return <FormFieldSkeletonError {...props} />
}

export type RadioButtonFieldSkeletonOptionProps = Omit<
  FormGroupFieldSkeletonOptionProps,
  "type" | "ref" | "children"
>

export const RadioButtonFieldSkeletonOption = React.forwardRef<
  HTMLInputElement,
  RadioButtonFieldSkeletonOptionProps
>(function RadioButtonFieldSkeletonOption(props, ref) {
  return <FormGroupFieldSkeletonOption ref={ref} type="radio" {...props} />
})

export type RadioButtonFieldSkeletonOptionLabelProps = FormGroupFieldSkeletonOptionLabelProps
export function RadioButtonFieldSkeletonOptionLabel(
  props: RadioButtonFieldSkeletonOptionLabelProps
) {
  return <FormGroupFieldSkeletonOptionLabel {...props} />
}
