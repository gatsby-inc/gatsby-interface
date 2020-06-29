/** @jsx jsx */
import { jsx } from "@emotion/core"

import {
  CheckboxGroupFieldOptionProps,
  CheckboxGroupFieldOptionItemProps,
} from "./CheckboxGroupField"
import { FormGroupOptionsDirection } from "./FormGroupField"
import { FormGroupFieldBlock, WithFormFieldBlock } from "./FormFieldBlock"
import {
  StyledCheckbox,
  StyledCheckboxLabel,
} from "./styled-primitives/StyledCheckbox"
import { Theme } from "../../../theme"
import { OptionsContainer } from "./styled-primitives/StyledFormElements"
import { getOptionLabelOffsetStyles } from "../styles"

export type CheckboxGroupFieldBlockOption = {
  label: React.ReactNode
  value: string
} & Partial<Omit<CheckboxGroupFieldOptionItemProps, "label" | "value">>

export type CheckboxGroupFieldBlockProps = WithFormFieldBlock<
  {
    options: CheckboxGroupFieldBlockOption[]
    optionsDirection?: FormGroupOptionsDirection
    value?: string[]
  } & Omit<CheckboxGroupFieldOptionProps, "value">
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

  return (
    <FormGroupFieldBlock
      id={id}
      label={label}
      error={error}
      hint={hint}
      required={required}
      labelSize={labelSize}
      validationMode={validationMode}
      layout={layout}
      className={className}
    >
      {({ getOptionControlProps, getOptionLabelProps }) => (
        <OptionsContainer optionsDirection={optionsDirection}>
          {options.map(({ value, label, ...restOption }) => (
            <div
              key={value}
              css={(theme: Theme) => [
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
              ]}
            >
              <StyledCheckbox
                value={value}
                // Support uncontrolled field
                checked={
                  fieldValue === undefined
                    ? undefined
                    : fieldValue.includes(value)
                }
                {...getOptionControlProps(value)}
                {...rest}
                {...restOption}
              />
              <StyledCheckboxLabel
                {...getOptionLabelProps(value)}
                css={getOptionLabelOffsetStyles(optionsDirection)}
              >
                {label}
              </StyledCheckboxLabel>
            </div>
          ))}
        </OptionsContainer>
      )}
    </FormGroupFieldBlock>
  )
}
