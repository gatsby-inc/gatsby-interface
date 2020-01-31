import React from "react"
import FormFieldSkeleton from "./FormFieldSkeleton"
import FormGroupFieldSkeleton, {
  FormGroupFieldSkeletonProps,
  FormGroupFieldSkeletonOptionProps,
} from "./FormGroupFieldSkeleton"

function CheckboxGroupFieldSkeleton(props: FormGroupFieldSkeletonProps) {
  return <FormGroupFieldSkeleton {...props} />
}

CheckboxGroupFieldSkeleton.Label = FormGroupFieldSkeleton.Label
CheckboxGroupFieldSkeleton.Label.displayName = `CheckboxGroupFieldSkeleton.Label`

export type CheckboxGroupFieldSkeletonOptionProps = Omit<
  FormGroupFieldSkeletonOptionProps,
  "type" | "ref"
>

CheckboxGroupFieldSkeleton.Option = React.forwardRef<
  HTMLInputElement,
  CheckboxGroupFieldSkeletonOptionProps
>((props, ref) => (
  <FormGroupFieldSkeleton.Option ref={ref} type="checkbox" {...props} />
))

CheckboxGroupFieldSkeleton.OptionLabel = FormGroupFieldSkeleton.OptionLabel
CheckboxGroupFieldSkeleton.OptionLabel.displayName = `CheckboxGroupFieldSkeleton.OptionLabel`
CheckboxGroupFieldSkeleton.Hint = FormFieldSkeleton.Hint
CheckboxGroupFieldSkeleton.Hint.displayName = `CheckboxGroupFieldSkeleton.Hint`
CheckboxGroupFieldSkeleton.Error = FormFieldSkeleton.Error
CheckboxGroupFieldSkeleton.Error.displayName = `CheckboxGroupFieldSkeleton.Error`

export default CheckboxGroupFieldSkeleton
