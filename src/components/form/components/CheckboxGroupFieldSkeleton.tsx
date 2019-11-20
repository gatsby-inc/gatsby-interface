import React from "react"
import FormFieldSkeleton from "./FormFieldSkeleton"
import FormGroupFieldSkeleton, {
  FormGroupFieldSkeletonProps,
  FormGroupOptionProps,
} from "./FormGroupFieldSkeleton"

function CheckboxGroupFieldSkeletonSkeleton(
  props: FormGroupFieldSkeletonProps
) {
  return <FormGroupFieldSkeleton {...props} />
}

CheckboxGroupFieldSkeletonSkeleton.Label = FormGroupFieldSkeleton.Label
CheckboxGroupFieldSkeletonSkeleton.Label.displayName = `CheckboxGroupFieldSkeletonSkeleton.Label`

export type CheckboxGroupFieldSkeletonSkeletonOptionProps = Omit<
  FormGroupOptionProps,
  "type" | "ref"
>

CheckboxGroupFieldSkeletonSkeleton.Option = React.forwardRef<
  HTMLInputElement,
  CheckboxGroupFieldSkeletonSkeletonOptionProps
>((props, ref) => (
  <FormGroupFieldSkeleton.Option ref={ref} type="checkbox" {...props} />
))

CheckboxGroupFieldSkeletonSkeleton.OptionLabel =
  FormGroupFieldSkeleton.OptionLabel
CheckboxGroupFieldSkeletonSkeleton.OptionLabel.displayName = `CheckboxGroupFieldSkeletonSkeleton.OptionLabel`
CheckboxGroupFieldSkeletonSkeleton.Hint = FormFieldSkeleton.Hint
CheckboxGroupFieldSkeletonSkeleton.Hint.displayName = `CheckboxGroupFieldSkeletonSkeleton.Hint`
CheckboxGroupFieldSkeletonSkeleton.Error = FormFieldSkeleton.Error
CheckboxGroupFieldSkeletonSkeleton.Error.displayName = `CheckboxGroupFieldSkeletonSkeleton.Error`

export default CheckboxGroupFieldSkeletonSkeleton
