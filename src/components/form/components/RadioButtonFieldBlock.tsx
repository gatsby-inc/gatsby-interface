/** @jsx jsx */
import { jsx } from "@emotion/core"

import {
  RadioButtonFieldOptionItemProps,
  RadioButtonFieldVariant,
} from "./RadioButtonField"
import { FormGroupOptionsDirection } from "./FormGroupField"
import { FormGroupFieldBlock, WithFormFieldBlock } from "./FormFieldBlock"
import {
  StyledRadioButton,
  StyledRadioLabel,
} from "./styled-primitives/StyledRadio"
import { OptionsContainer } from "./styled-primitives/StyledFormElements"
import { Theme, ThemeCss } from "../../../theme"
import React from "react"
import { getOptionLabelOffsetStyles } from "../styles"

const framedCss: ThemeCss = theme => ({
  border: `2px solid ${theme.colors.white}`,
  borderRadius: theme.radii[3],
  margin: 0,
  width: `100%`,
  transition: `border .15s ease-in-out`,
  paddingTop: theme.space[4],
  paddingBottom: theme.space[4],
  paddingLeft: theme.space[4],
  paddingRight: theme.space[5],
})

export type RadioButtonFieldBlockOption = {
  label: React.ReactNode
  value: string
} & Partial<Omit<RadioButtonFieldOptionItemProps, "label" | "value">>

export type RadioButtonFieldBlockProps = WithFormFieldBlock<
  {
    options: RadioButtonFieldBlockOption[]
    value?: string
    optionsDirection?: FormGroupOptionsDirection
    variant?: RadioButtonFieldVariant
  } & Omit<RadioButtonFieldOptionItemProps, "value">
>

export const RadioButtonFieldBlock = (props: RadioButtonFieldBlockProps) => {
  const {
    id,
    label,
    labelSize,
    error,
    hint,
    className,
    validationMode,
    value: fieldValue,
    options,
    layout,
    optionsDirection,
    variant,
    required,
    ...rest
  } = props

  const [checkedOption, setCheckedOption] = React.useState<string | undefined>(
    () => {
      if (fieldValue) {
        return fieldValue
      }

      const defaultCheckedOption = options.find(
        ({ defaultChecked }) => defaultChecked
      )
      return defaultCheckedOption ? defaultCheckedOption.value : undefined
    }
  )

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
              onChange={() => setCheckedOption(value)}
              css={(theme: Theme) => [
                {
                  display: `flex`,
                  flexShrink: 0,
                  marginBottom: theme.space[4],
                },
                variant === `framed`
                  ? [
                      framedCss(theme),
                      value === checkedOption && {
                        borderColor: theme.colors.purple[60],
                      },
                    ]
                  : [
                      {
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
                    ],
              ]}
            >
              <StyledRadioButton
                value={value}
                // Support uncontrolled field
                checked={
                  fieldValue === undefined ? undefined : fieldValue === value
                }
                {...getOptionControlProps(value)}
                {...rest}
                {...restOption}
              />
              <StyledRadioLabel
                {...getOptionLabelProps(value)}
                css={getOptionLabelOffsetStyles(optionsDirection)}
              >
                {label}
              </StyledRadioLabel>
            </div>
          ))}
        </OptionsContainer>
      )}
    </FormGroupFieldBlock>
  )
}
