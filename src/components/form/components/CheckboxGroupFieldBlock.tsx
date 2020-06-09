/** @jsx jsx */
import { jsx } from "@emotion/core"

import {
  CheckboxGroupFieldOptionProps,
  CheckboxGroupFieldOptionItemProps,
} from "./CheckboxGroupField"
import { WithFormFieldBlock } from "./FormField"
import { FormGroupOptionsDirection } from "./FormGroupField"
import { FormGroupFieldBlock } from "./FormFieldBlock"
import { StyledCheckbox, StyledCheckboxLabel } from "./styled/StyledCheckbox"
import { Theme } from "../../../theme"
import { OptionsContainer } from "./StyledFormElements"
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
      {({ getControlProps, getControlLabelProps }) => (
        <OptionsContainer layout={layout} optionsDirection={optionsDirection}>
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
                {...getControlProps(value)}
                {...rest}
                {...restOption}
              />
              <StyledCheckboxLabel
                {...getControlLabelProps(value)}
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
