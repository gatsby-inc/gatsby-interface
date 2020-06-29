/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { FormFieldBlockLayout } from "./FormField"
import {
  AriaFormFieldData,
  useAriaFormField,
  AriaFormGroupFieldData,
  useAriaFormGroupField,
  ErrorValidationMode,
} from "../../form-skeletons"
import {
  FormError,
  FormHint,
  StyledLabel,
  FormLegend,
  StyledLabelSize,
  FormFieldsetProps,
  FormFieldset,
} from "./styled-primitives/StyledFormElements"
import { getFieldLayoutStyles } from "../styles"
import { ThemeCss } from "../../../theme"

export type CommonFieldBlockProps = {
  id: string
  label: React.ReactNode
  labelSize?: StyledLabelSize
  error?: React.ReactNode
  hint?: React.ReactNode
  validationMode?: ErrorValidationMode
  layout?: FormFieldBlockLayout
  required?: boolean
}

export type RenderFieldControl = (
  controlProps: AriaFormFieldData["controlProps"]
) => React.ReactNode

export type FormFieldBlockProps = CommonFieldBlockProps & {
  className?: string
  children: React.ReactNode | RenderFieldControl
}

export type WithFormFieldBlock<T> = Omit<T, keyof CommonFieldBlockProps> &
  CommonFieldBlockProps

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
  const fieldData = useAriaFormField(id, {
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
  fieldData: AriaFormFieldData
  label?: React.ReactNode
  labelSize?: StyledLabelSize
  error?: React.ReactNode
  hint?: React.ReactNode
  layout?: FormFieldBlockLayout
}) {
  const { labelCss, fieldBodyCss } = getFieldLayoutStyles(layout)

  const finalLabelCss: ThemeCss = theme => [
    labelCss(theme),
    { display: `block` },
  ]

  return (
    <div {...rest}>
      <StyledLabel
        required={fieldData.controlProps.required}
        labelSize={labelSize}
        {...fieldData.labelProps}
        css={finalLabelCss}
      >
        {label}
      </StyledLabel>
      <div css={fieldBodyCss}>
        {children}
        <FormHint {...fieldData.hintProps}>{hint}</FormHint>
        <FormError {...fieldData.errorProps}>{error}</FormError>
      </div>
    </div>
  )
}

/**
 * Group field organism
 *
 */

export type RenderGroupFieldControl = (
  controlProps: Pick<
    AriaFormGroupFieldData,
    "getOptionControlProps" | "getOptionLabelProps"
  >
) => React.ReactNode

export type FormGroupFieldBlockProps = CommonFieldBlockProps & {
  className?: string
  children: RenderGroupFieldControl
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
  const fieldData = useAriaFormGroupField(id, {
    required: required,
    error,
    hint,
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
      {children({
        getOptionControlProps: fieldData.getOptionControlProps,
        getOptionLabelProps: fieldData.getOptionLabelProps,
      })}
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
}: Omit<FormFieldsetProps, "label"> & {
  fieldData: AriaFormGroupFieldData
  label?: React.ReactNode
  labelSize?: StyledLabelSize
  error?: React.ReactNode
  hint?: React.ReactNode
  layout?: FormFieldBlockLayout
}) {
  const { labelCss, fieldBodyCss } = getFieldLayoutStyles(layout, true)
  const finalLabelCss: ThemeCss = theme => [
    labelCss(theme),
    { display: `block` },
  ]

  return (
    <FormFieldset {...rest}>
      <FormLegend
        labelSize={labelSize}
        required={fieldData.meta.required}
        {...fieldData.getLegendProps(label)}
        css={finalLabelCss}
      />
      <div css={fieldBodyCss}>
        {children}
        <FormHint {...fieldData.hintProps}>{hint}</FormHint>
        <FormError {...fieldData.errorProps}>{error}</FormError>
      </div>
    </FormFieldset>
  )
}
