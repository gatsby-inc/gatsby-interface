/** @jsx jsx */
import { jsx } from "@emotion/core"

import { FormGroupOptionsDirection } from "../types"
import {
  FormGroupFieldBlockBoilerplate,
  WithFormFieldBlock,
} from "./FormFieldBlock"
import {
  StyledCheckbox,
  StyledCheckboxLabel,
} from "./styled-primitives/StyledCheckbox"
import { ThemeCss } from "../../../theme"
import { OptionsContainer } from "./styled-primitives/StyledFormElements"
import { getOptionLabelOffsetStyles } from "../styles"
import { GroupControlProps } from "../types"
import { useAriaFormGroupField } from "../../form-skeletons"

export type CheckboxGroupFieldBlockOption = {
  label: React.ReactNode
  value: string
} & Partial<Omit<GroupControlProps, "label" | "value">>

export type CheckboxGroupFieldBlockProps = WithFormFieldBlock<
  {
    options: CheckboxGroupFieldBlockOption[]
    optionsDirection?: FormGroupOptionsDirection
    value?: string[]
  } & Omit<GroupControlProps, "value" | "type">
>

export const CheckboxGroupFieldBlock = (
  props: CheckboxGroupFieldBlockProps
) => {
  const {
    id,
    label,
    layout,
    optionsDirection,
    labelSize,
    options,
    error,
    hint,
    className,
    validationMode,
    value: fieldValue,
    required,
    ...rest
  } = props
  const fieldData = useAriaFormGroupField(id, {
    required: required,
    error,
    hint,
    validationMode,
  })

  const optionContainerCss: ThemeCss = theme => [
    {
      display: `flex`,
      flexShrink: 0,
      marginBottom: theme.space[4],
    },
    optionsDirection === `row`
      ? {
          marginRight: theme.space[6],
        }
      : {
          "&:last-of-type": {
            marginBottom: 0,
          },
        },
  ]

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
      <OptionsContainer optionsDirection={optionsDirection}>
        {options.map(({ value, label, ...restOption }) => (
          <div key={value} css={optionContainerCss}>
            <StyledCheckbox
              value={value}
              // Support uncontrolled field
              checked={
                fieldValue === undefined
                  ? undefined
                  : fieldValue.includes(value)
              }
              {...fieldData.getOptionControlProps(value)}
              {...rest}
              {...restOption}
            />
            <StyledCheckboxLabel
              {...fieldData.getOptionLabelProps(value)}
              css={getOptionLabelOffsetStyles(optionsDirection)}
            >
              {label}
            </StyledCheckboxLabel>
          </div>
        ))}
      </OptionsContainer>
    </FormGroupFieldBlockBoilerplate>
  )
}
