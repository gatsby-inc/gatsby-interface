import React from "react"
import FormFieldSkeleton, { FormFieldSkeletonProps } from "./FormFieldSkeleton"
import { getFinalAriaDescribedBy } from "../utils"
import { OmitControlProps } from "../sharedTypes"

function SelectFieldSkeleton(props: FormFieldSkeletonProps) {
  return <FormFieldSkeleton {...props} />
}

export type SelectFieldSkeletonControlOption = {
  value: string
  label: string
}

export type SelectFieldSkeletonControlProps = OmitControlProps<
  JSX.IntrinsicElements["select"]
> & {
  options: SelectFieldSkeletonControlOption[]
}

SelectFieldSkeleton.Control = React.forwardRef<
  HTMLSelectElement,
  SelectFieldSkeletonControlProps
>(({ options, ...rest }, ref) => {
  const { id, hasError, meta } = FormFieldSkeleton.useFormFieldSkeleton()

  return (
    <select
      id={id}
      {...rest}
      aria-describedby={getFinalAriaDescribedBy(
        meta.controlDescribedBy,
        rest[`aria-describedby`]
      )}
      aria-invalid={hasError}
      ref={ref}
    >
      {options.map(renderOption)}
    </select>
  )
})
SelectFieldSkeleton.Control.displayName = `SelectFieldSkeleton.Control`

SelectFieldSkeleton.Label = FormFieldSkeleton.Label
SelectFieldSkeleton.Label.displayName = `SelectFieldSkeleton.Label`
SelectFieldSkeleton.Hint = FormFieldSkeleton.Hint
SelectFieldSkeleton.Hint.displayName = `SelectFieldSkeleton.Hint`
SelectFieldSkeleton.Error = FormFieldSkeleton.Error
SelectFieldSkeleton.Error.displayName = `SelectFieldSkeleton.Hint`

export default SelectFieldSkeleton

function renderOption({ label, value }: SelectFieldSkeletonControlOption) {
  return (
    <option key={value} value={value}>
      {label}
    </option>
  )
}
