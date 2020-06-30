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

export type SelectFieldSkeletonProps = FormFieldSkeletonProps
export function SelectFieldSkeleton(props: FormFieldSkeletonProps) {
  showFormSkeletonDeprecatedMessage("SelectFieldSkeleton")
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

export const SelectFieldSkeletonControl = React.forwardRef<
  HTMLSelectElement,
  SelectFieldSkeletonControlProps
>(function SelectFieldSkeletonControl({ options, ...rest }, ref) {
  const { id, hasError, meta } = useFormFieldSkeleton()

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

function renderOption({ label, value }: SelectFieldSkeletonControlOption) {
  return (
    <option key={value} value={value}>
      {label}
    </option>
  )
}

export type SelectFieldSkeletonLabelProps = FormFieldSkeletonLabelProps
export function SelectFieldSkeletonLabel(props: SelectFieldSkeletonLabelProps) {
  return <FormFieldSkeletonLabel {...props} />
}

export type SelectFieldSkeletonHintProps = FormFieldSkeletonHintProps
export function SelectFieldSkeletonHint(props: SelectFieldSkeletonHintProps) {
  return <FormFieldSkeletonHint {...props} />
}

export type SelectFieldSkeletonErrorProps = FormFieldSkeletonErrorProps
export function SelectFieldSkeletonError(props: SelectFieldSkeletonErrorProps) {
  return <FormFieldSkeletonError {...props} />
}
