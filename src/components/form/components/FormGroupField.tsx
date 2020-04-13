/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import {
  useStyledFieldLabel,
  useStyledFieldHint,
  useStyledFieldError,
} from "./FormField"
import { Theme, ThemeCss } from "../../../theme"
import { getLabelFontSize, FormFieldLabelSize } from "./FormField.helpers"

export const INPUT_WIDTH = `20px`
export const INPUT_VERTICAL_OFFSET_CALC = `(1em - 14px) * 0.5`

export type FormGroupFieldContextValue = {
  optionsDirection?: `horizontal` | `vertical`
}

const FormGroupFieldContext = React.createContext<FormGroupFieldContextValue>({
  optionsDirection: undefined,
})

export type FormGroupFieldProviderProps = {
  optionsDirection?: `horizontal` | `vertical`
  children?: React.ReactNode
}

// TODO we can probably do away with context for optionsDirection
// it can be replaced with passing props since in most cases we're going to use *Block or *ConnectedField components
export function FormGroupFieldProvider({
  optionsDirection,
  children,
}: FormGroupFieldProviderProps) {
  const fieldContext = React.useMemo<FormGroupFieldContextValue>(() => {
    return {
      optionsDirection,
    }
  }, [optionsDirection])

  return (
    <FormGroupFieldContext.Provider value={fieldContext}>
      {children}
    </FormGroupFieldContext.Provider>
  )
}

export type WithFormGroupField<T> = Omit<T, keyof FormGroupFieldProviderProps> &
  FormGroupFieldProviderProps

export const formGroupFieldCss: ThemeCss = () => ({
  padding: 0,
  margin: 0,
  border: 0,
})

export function useStyledGroupFieldLabel(
  ...args: Parameters<typeof useStyledFieldLabel>
) {
  const { css: baseCss, ...rest } = useStyledFieldLabel(...args)

  return {
    css: (theme: Theme) => [
      baseCss(theme),
      {
        padding: 0,
        marginRight: 0,
        marginLeft: 0,
        width: `100%`,
      },
    ],
    ...rest,
  }
}

export function useStyledGroupFieldHint(
  ...args: Parameters<typeof useStyledFieldHint>
) {
  const { css: baseCss, ...baseStyledProps } = useStyledFieldHint(...args)

  return {
    css: (theme: Theme) => [baseCss(theme)],
    ...baseStyledProps,
  }
}

export function useStyledGroupFieldError(
  ...args: Parameters<typeof useStyledFieldError>
) {
  const { css: baseCss, ...baseStyledProps } = useStyledFieldError(...args)

  return {
    css: (theme: Theme) => [baseCss(theme)],
    ...baseStyledProps,
  }
}

const horizontalOptionsCss: ThemeCss = _theme => ({
  display: `flex`,
  flexWrap: `wrap`,
})

const verticalOptionsCss: ThemeCss = theme => [
  {
    paddingTop: theme.space[3],
    paddingBottom: theme.space[3],
  },
]

export type FormGroupFieldOptionsProps = Omit<
  JSX.IntrinsicElements["div"],
  "ref"
>
export const FormGroupFieldOptions: React.FC<FormGroupFieldOptionsProps> = props => {
  const { optionsDirection } = useFormGroupField()
  const isHorizontal = optionsDirection === `horizontal`

  return isHorizontal ? (
    <div css={horizontalOptionsCss} {...props} />
  ) : (
    <div css={verticalOptionsCss} {...props} />
  )
}

export type FormGroupFieldOptionLabelProps = {
  size?: FormFieldLabelSize
}

export function useStyledGroupFieldOptionLabel({
  size = `L`,
}: {
  size?: FormFieldLabelSize
}): { css: ThemeCss } {
  const { optionsDirection } = useFormGroupField()
  const isHorizontal = optionsDirection === `horizontal`

  return {
    css: (theme: Theme) => [
      getLabelFontSize(size, theme),
      {
        color: theme.colors.grey[90],
        cursor: `pointer`,
        justifyContent: `flex-start`,
        lineHeight: 1.3,
        paddingLeft: `calc(${INPUT_WIDTH} + ${
          isHorizontal ? theme.space[2] : theme.space[4]
        })`,
        position: `relative`,
      },
    ],
  }
}

export type FormGroupFieldOptionWrapperProps = Omit<
  JSX.IntrinsicElements["div"],
  "ref"
> & {
  noSpacing?: boolean
}

export const FormGroupFieldOptionWrapper: React.FC<FormGroupFieldOptionWrapperProps> = ({
  noSpacing,
  ...rest
}) => {
  const { optionsDirection } = useFormGroupField()
  const isHorizontal = optionsDirection === `horizontal`

  return (
    <div
      css={(theme: Theme) => [
        {
          display: `flex`,
          alignItems: `center`,
          flexShrink: 0,
        },
        !noSpacing && [
          {
            marginBottom: theme.space[4],
          },
          isHorizontal
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
      {...rest}
    />
  )
}

export function useFormGroupField() {
  return React.useContext(FormGroupFieldContext)
}
