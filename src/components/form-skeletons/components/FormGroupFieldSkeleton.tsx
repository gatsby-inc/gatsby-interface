import React from "react"
import {
  FormFieldSkeleton,
  FormFieldSkeletonProps,
  FormFieldSkeletonLabelProps,
  useFormFieldSkeleton,
} from "./FormFieldSkeleton"
import { getFinalAriaDescribedBy } from "../utils"
import { OmitControlProps } from "../sharedTypes"

export type FormGroupFieldSkeletonProps = FormFieldSkeletonProps &
  Pick<JSX.IntrinsicElements["fieldset"], "className" | "style">

export function FormGroupFieldSkeleton({
  id,
  hasError,
  hasHint,
  children,
  className,
  style,
}: FormGroupFieldSkeletonProps) {
  return (
    <FormFieldSkeleton id={id} hasError={hasError} hasHint={hasHint}>
      <fieldset id={id} className={className} style={style}>
        {children}
      </fieldset>
    </FormFieldSkeleton>
  )
}

export type FormGroupFieldSkeletonLabelProps = Omit<
  JSX.IntrinsicElements["legend"],
  "ref"
>

export const FormGroupFieldSkeletonLabel: React.FC<
  FormGroupFieldSkeletonLabelProps
> = props => <legend {...props} />

export type FormGroupFieldSkeletonOptionProps = Omit<
  OmitControlProps<JSX.IntrinsicElements["input"]>,
  "value" | "name"
> & {
  name: string // Force require "name" attribute
  value: string // Force require "value" attribute
}

export const FormGroupFieldSkeletonOption = React.forwardRef<
  HTMLInputElement,
  FormGroupFieldSkeletonOptionProps
>(function FormGroupFieldSkeletonOption(props, ref) {
  const { id, hasError, meta } = useFormFieldSkeleton()

  // We have to set aria-describedby for EACH option (see https://russmaxdesign.github.io/accessible-error-fieldset/)
  return (
    <input
      id={getGroupOptionId(id, props.value)}
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

export type FormGroupFieldSkeletonOptionLabelProps = FormFieldSkeletonLabelProps & {
  optionValue: string
}

export const FormGroupFieldSkeletonOptionLabel: React.FC<
  FormGroupFieldSkeletonOptionLabelProps
> = ({ optionValue, ...rest }) => {
  const { id } = useFormFieldSkeleton()

  return <label htmlFor={getGroupOptionId(id, optionValue)} {...rest} />
}

function getGroupOptionId(fieldId: string, optionValue: string) {
  return `${fieldId}__option--${optionValue}`
}
