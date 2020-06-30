import React from "react"
import {
  FormFieldSkeleton,
  FormFieldSkeletonProps,
  FormFieldSkeletonLabelProps,
  useFormFieldSkeleton,
} from "./FormFieldSkeleton"
import { getFinalAriaDescribedBy } from "../utils"
import { OmitControlProps } from "../sharedTypes"
import { showFormSkeletonDeprecatedMessage } from "../../../utils/maintenance/deprecationMessages"

export type FormGroupFieldSkeletonProps = FormFieldSkeletonProps &
  Pick<JSX.IntrinsicElements["div"], "className" | "style">

export function FormGroupFieldSkeleton({
  id,
  hasError,
  hasHint,
  children,
  className,
  style,
}: FormGroupFieldSkeletonProps) {
  showFormSkeletonDeprecatedMessage("FormGroupFieldSkeleton", true)
  return (
    <FormFieldSkeleton id={id} hasError={hasError} hasHint={hasHint}>
      <div
        role="group"
        id={id}
        aria-labelledby={`${id}__legend`}
        className={className}
        style={style}
      >
        {children}
      </div>
    </FormFieldSkeleton>
  )
}

export type FormGroupFieldSkeletonLabelProps = Omit<
  JSX.IntrinsicElements["div"],
  "ref"
>

export const FormGroupFieldSkeletonLabel: React.FC<FormGroupFieldSkeletonLabelProps> = props => {
  const { id } = useFormFieldSkeleton()
  return <div {...props} id={`${id}__legend`} />
}

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

export const FormGroupFieldSkeletonOptionLabel: React.FC<FormGroupFieldSkeletonOptionLabelProps> = ({
  optionValue,
  ...rest
}) => {
  const { id } = useFormFieldSkeleton()

  return <label htmlFor={getGroupOptionId(id, optionValue)} {...rest} />
}

function getGroupOptionId(fieldId: string, optionValue: string) {
  return `${fieldId}__option--${optionValue}`
}
