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

export type CheckboxGroupFieldSkeletonProps = FormGroupFieldSkeletonProps
export function CheckboxGroupFieldSkeleton(
  props: CheckboxGroupFieldSkeletonProps
) {
  showFormSkeletonDeprecatedMessage("CheckboxGroupFieldSkeleton", true)
  return <FormGroupFieldSkeleton {...props} />
}

export type CheckboxGroupFieldSkeletonLabelProps = FormGroupFieldSkeletonLabelProps
export function CheckboxGroupFieldSkeletonLabel(
  props: CheckboxGroupFieldSkeletonLabelProps
) {
  return <FormGroupFieldSkeletonLabel {...props} />
}

export type CheckboxGroupFieldSkeletonHintProps = FormFieldSkeletonHintProps
export function CheckboxGroupFieldSkeletonHint(
  props: CheckboxGroupFieldSkeletonHintProps
) {
  return <FormFieldSkeletonHint {...props} />
}

export type CheckboxGroupFieldSkeletonErrorProps = FormFieldSkeletonErrorProps
export function CheckboxGroupFieldSkeletonError(
  props: CheckboxGroupFieldSkeletonErrorProps
) {
  return <FormFieldSkeletonError {...props} />
}

export type CheckboxGroupFieldSkeletonOptionProps = Omit<
  FormGroupFieldSkeletonOptionProps,
  "type" | "ref" | "children"
>

export const CheckboxGroupFieldSkeletonOption = React.forwardRef<
  HTMLInputElement,
  CheckboxGroupFieldSkeletonOptionProps
>(function CheckboxGroupFieldSkeletonOption(props, ref) {
  return <FormGroupFieldSkeletonOption ref={ref} type="checkbox" {...props} />
})

export type CheckboxGroupFieldSkeletonOptionLabelProps = FormGroupFieldSkeletonOptionLabelProps
export function CheckboxGroupFieldSkeletonOptionLabel(
  props: CheckboxGroupFieldSkeletonOptionLabelProps
) {
  return <FormGroupFieldSkeletonOptionLabel {...props} />
}
