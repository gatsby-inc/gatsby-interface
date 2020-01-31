import React, { ReactNode } from "react"

import { FormFieldLabelSize } from "./FormField.helpers"
import { ErrorValidationMode } from "../../form-skeletons/components/FormFieldSkeleton"
import { InputFieldControlProps } from "./InputField"
import { TextAreaFieldControlProps } from "./TextAreaField"
import { SelectFieldControlProps } from "./SelectField"

export type ComponentsProps =
  | InputFieldControlProps
  | TextAreaFieldControlProps
  | SelectFieldControlProps

export type FieldBlockProps = {
  id: string
  label: ReactNode
  labelSize?: FormFieldLabelSize
  error?: ReactNode
  hint?: ReactNode
  className?: string
  validationMode?: ErrorValidationMode
  required?: boolean
} & ComponentsProps

export type Elem = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement

function FieldBlock(Component: any) {
  return React.forwardRef<Elem, FieldBlockProps>((props, ref) => {
    const {
      id,
      label,
      labelSize,
      error,
      hint,
      className,
      validationMode,
      required,
      ...rest
    } = props

    const isRequired = required ? required : false

    return (
      <Component id={id} hasError={!!error} hasHint={!!hint}>
        <Component.Wrapper className={className}>
          <Component.Label size={labelSize} isRequired={isRequired}>
            {label}
          </Component.Label>
          <Component.Control ref={ref} {...rest} />
          <Component.Hint>{hint}</Component.Hint>
          <Component.Error validationMode={validationMode}>
            {error}
          </Component.Error>
        </Component.Wrapper>
      </Component>
    )
  })
}

export default FieldBlock
