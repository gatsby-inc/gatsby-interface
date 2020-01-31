import React from "react"
import FormFieldSkeleton from "./FormFieldSkeleton"
import FormGroupFieldSkeleton, {
  FormGroupFieldSkeletonProps,
  FormGroupFieldSkeletonOptionProps,
} from "./FormGroupFieldSkeleton"

function RadioButtonFieldSkeleton(props: FormGroupFieldSkeletonProps) {
  return <FormGroupFieldSkeleton {...props} />
}

RadioButtonFieldSkeleton.Label = FormGroupFieldSkeleton.Label
RadioButtonFieldSkeleton.Label.displayName = `RadioButtonFieldSkeleton.Label`

export type RadioButtonFieldSkeletonOptionProps = Omit<
  FormGroupFieldSkeletonOptionProps,
  "type" | "ref"
>

RadioButtonFieldSkeleton.Option = React.forwardRef<
  HTMLInputElement,
  RadioButtonFieldSkeletonOptionProps
>((props, ref) => (
  <FormGroupFieldSkeleton.Option ref={ref} type="radio" {...props} />
))

RadioButtonFieldSkeleton.OptionLabel = FormGroupFieldSkeleton.OptionLabel
RadioButtonFieldSkeleton.OptionLabel.displayName = `RadioButtonFieldSkeleton.OptionLabel`
RadioButtonFieldSkeleton.Hint = FormFieldSkeleton.Hint
RadioButtonFieldSkeleton.Hint.displayName = `RadioButtonFieldSkeleton.Hint`
RadioButtonFieldSkeleton.Error = FormFieldSkeleton.Error
RadioButtonFieldSkeleton.Error.displayName = `RadioButtonFieldSkeleton.Error`

export default RadioButtonFieldSkeleton
