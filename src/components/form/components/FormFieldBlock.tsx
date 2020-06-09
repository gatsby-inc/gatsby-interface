/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { FormFieldBlockLayout } from "./FormField"
import {
  FormFieldData,
  useFormField,
  FormGroupFieldData,
  useFormGroupField,
  ErrorValidationMode,
} from "../../form-skeletons"
import {
  FormError,
  FormHint,
  StyledFieldLabel,
  StyledGroupFieldLabel,
  StyledFieldLabelSize,
  FieldContainer,
} from "./StyledFormElements"

export type CommonFieldBlockProps = {
  id: string
  label: React.ReactNode
  labelSize?: StyledFieldLabelSize
  error?: React.ReactNode
  hint?: React.ReactNode
  validationMode?: ErrorValidationMode
  layout?: FormFieldBlockLayout
}

export type RenderFieldControl = (
  controlProps: FormFieldData["controlProps"]
) => React.ReactNode

export type FormFieldBlockProps = CommonFieldBlockProps & {
  required?: boolean
  className?: string
  children: React.ReactNode | RenderFieldControl
}

export function FormFieldBlock({
  id,
  label,
  error,
  hint,
  required,
  labelSize,
  validationMode,
  layout,
  className,
  children,
}: FormFieldBlockProps) {
  const fieldData = useFormField(id, {
    required: required,
    hasError: !!error,
    hasHint: !!hint,
    validationMode,
  })

  return (
    <FormFieldBlockBoilerplate
      fieldData={fieldData}
      label={label}
      error={error}
      hint={hint}
      layout={layout}
      labelSize={labelSize}
      className={className}
    >
      {typeof children === `function`
        ? children(fieldData.controlProps)
        : children}
    </FormFieldBlockBoilerplate>
  )
}
export function FormFieldBlockBoilerplate({
  fieldData,
  children,
  label,
  error,
  hint,
  layout,
  labelSize,
  ...rest
}: Omit<React.ComponentPropsWithoutRef<"div">, "label"> & {
  fieldData: FormFieldData
  label?: React.ReactNode
  labelSize?: StyledFieldLabelSize
  error?: React.ReactNode
  hint?: React.ReactNode
  layout?: FormFieldBlockLayout
}) {
  return (
    <FieldContainer layout={layout} {...rest}>
      <StyledFieldLabel
        required={fieldData.controlProps.required}
        labelSize={labelSize}
        {...fieldData.labelProps}
        css={{ display: `block` }}
      >
        {label}
      </StyledFieldLabel>
      <div>
        {children}
        <FormHint {...fieldData.hintProps}>{hint}</FormHint>
        <FormError {...fieldData.errorProps}>{error}</FormError>
      </div>
    </FieldContainer>
  )
}

/**
 * Group field organism
 *
 */

export type RenderGroupFieldControl = (
  controlProps: Pick<
    FormGroupFieldData,
    "getControlProps" | "getControlLabelProps"
  >
) => React.ReactNode

export type FormGroupFieldBlockProps = CommonFieldBlockProps & {
  required?: boolean
  className?: string
  children: React.ReactNode | RenderGroupFieldControl
}

export function FormGroupFieldBlock({
  id,
  label,
  error,
  hint,
  required,
  labelSize,
  validationMode,
  layout,
  className,
  children,
}: FormGroupFieldBlockProps) {
  const fieldData = useFormGroupField(id, {
    required: required,
    hasError: !!error,
    hasHint: !!hint,
    validationMode,
  })

  return (
    <FormGroupFieldBlockBoilerplate
      fieldData={fieldData}
      label={label}
      error={error}
      hint={hint}
      layout={layout}
      labelSize={labelSize}
      className={className}
    >
      {typeof children === `function`
        ? children({
            getControlProps: fieldData.getControlProps,
            getControlLabelProps: fieldData.getControlLabelProps,
          })
        : children}
    </FormGroupFieldBlockBoilerplate>
  )
}

export function FormGroupFieldBlockBoilerplate({
  fieldData,
  children,
  label,
  error,
  hint,
  layout,
  labelSize,
  ...rest
}: Omit<React.ComponentPropsWithoutRef<"div">, "label"> & {
  fieldData: FormGroupFieldData
  label?: React.ReactNode
  labelSize?: StyledFieldLabelSize
  error?: React.ReactNode
  hint?: React.ReactNode
  layout?: FormFieldBlockLayout
}) {
  return (
    <FieldContainer
      layout={layout}
      {...fieldData.groupContainerProps}
      {...rest}
    >
      <StyledGroupFieldLabel
        labelSize={labelSize}
        required={fieldData.meta.required}
        {...fieldData.groupLabelProps}
        css={{ display: `block` }}
      >
        {label}
      </StyledGroupFieldLabel>
      <div>
        {children}
        <FormHint {...fieldData.hintProps}>{hint}</FormHint>
        <FormError {...fieldData.errorProps}>{error}</FormError>
      </div>
    </FieldContainer>
  )
}
