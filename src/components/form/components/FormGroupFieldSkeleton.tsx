import React from "react"
import FormFieldSkeleton, {
  FormFieldSkeletonProps,
  FormFieldSkeletonLabelProps,
} from "./FormFieldSkeleton"
import { getFinalAriaDescribedBy } from "../utils"
import { OmitControlProps } from "../sharedTypes"

export type FormGroupFieldSkeletonProps = FormFieldSkeletonProps &
  Pick<JSX.IntrinsicElements["fieldset"], "className" | "style">

function FormGroupFieldSkeleton({
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

const FormGroupFieldSkeletonLabel: React.FC<
  FormGroupFieldSkeletonLabelProps
> = props => <legend {...props} />

export type FormGroupOptionProps = Omit<
  OmitControlProps<JSX.IntrinsicElements["input"]>,
  "value" | "name"
> & {
  name: string // Force require "name" attribute
  value: string // Force require "value" attribute
}

const GroupFieldOption = React.forwardRef<
  HTMLInputElement,
  FormGroupOptionProps
>((props, ref) => {
  const { id, hasError, meta } = FormFieldSkeleton.useFormFieldSkeleton()

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

type GroupFieldOptionLabelProps = FormFieldSkeletonLabelProps & {
  optionValue: string
}

const GroupFieldOptionLabel: React.FC<GroupFieldOptionLabelProps> = ({
  optionValue,
  ...rest
}) => {
  const { id } = FormFieldSkeleton.useFormFieldSkeleton()

  return <label htmlFor={getGroupOptionId(id, optionValue)} {...rest} />
}

FormGroupFieldSkeleton.Label = FormGroupFieldSkeletonLabel
FormGroupFieldSkeleton.Label.displayName = `FormGroupFieldSkeleton.Label`
FormGroupFieldSkeleton.Option = GroupFieldOption
FormGroupFieldSkeleton.Option.displayName = `FormGroupFieldSkeleton.Option`
FormGroupFieldSkeleton.OptionLabel = GroupFieldOptionLabel
FormGroupFieldSkeleton.OptionLabel.displayName = `FormGroupFieldSkeleton.OptionLabel`

export default FormGroupFieldSkeleton

function getGroupOptionId(fieldId: string, optionValue: string) {
  return `${fieldId}__option--${optionValue}`
}
