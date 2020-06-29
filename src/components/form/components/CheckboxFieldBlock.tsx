/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import { WithFormFieldBlock } from "./FormFieldBlock"
import {
  StyledCheckboxLabel,
  StyledCheckbox,
  StyledCheckboxProps,
} from "./styled-primitives/StyledCheckbox"
import { useAriaFormField } from "../../form-skeletons"
import { FormHint, FormError } from "./styled-primitives/StyledFormElements"
import { ThemeCss } from "../../../theme"

const baseCss: ThemeCss = _theme => ({
  display: `flex`,
  alignItems: `baseline`,
})

const checkboxContainerCss: ThemeCss = theme => ({
  marginRight: theme.space[4],
})

export type CheckboxFieldBlockProps = Omit<
  WithFormFieldBlock<StyledCheckboxProps>,
  "layout"
>

export const CheckboxFieldBlock = React.forwardRef<
  HTMLInputElement,
  CheckboxFieldBlockProps
>(function CheckboxFieldBlock(props, ref) {
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

  const fieldData = useAriaFormField(id, {
    required: required,
    hasError: !!error,
    hasHint: !!hint,
    validationMode,
  })

  return (
    <div css={baseCss} className={className}>
      <div css={checkboxContainerCss}>
        <StyledCheckbox ref={ref} {...fieldData.controlProps} {...rest} />
      </div>
      <div>
        <StyledCheckboxLabel
          required={fieldData.controlProps.required}
          labelSize={labelSize}
          {...fieldData.labelProps}
        >
          {label}
        </StyledCheckboxLabel>
        <FormHint {...fieldData.hintProps}>{hint}</FormHint>
        <FormError {...fieldData.errorProps}>{error}</FormError>
      </div>
    </div>
  )
})
