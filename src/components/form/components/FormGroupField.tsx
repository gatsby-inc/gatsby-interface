/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import {
  useStyledFieldLabel,
  useStyledFieldHint,
  useStyledFieldError,
} from "./FormField"
import { getStackStyles, StackGap } from "../../stack"
import { getClusterStyles } from "../../cluster"
import { Theme, ThemeCss } from "../../../theme"
import { getLabelFontSize, FormFieldLabelSize } from "./FormField.helpers"

export const INPUT_WIDTH = `20px`
export const INPUT_VERTICAL_OFFSET_CALC = `(1em - 14px) * 0.5`

export function getGroupFieldStackStyles(type: `stack` | `item`, theme: Theme) {
  const { stackCss, stackItemCss } = getStackStyles({
    gap: 4,
    theme,
  })

  return type === `item` ? stackItemCss : stackCss
}

export function getGroupFieldClusterStyles(
  type: `cluster` | `item`,
  theme: Theme
) {
  const { clusterCss, clusterItemCss } = getClusterStyles({
    gap: 8,
    verticalGap: 4,
    theme,
  })

  return type === `item` ? clusterItemCss : clusterCss
}

export type FormGroupFieldContextValue = {
  layout?: `horizontal` | `vertical`
  variant?: `standard` | `framed`
}

const FormGroupFieldContext = React.createContext<FormGroupFieldContextValue>({
  variant: undefined,
  layout: undefined,
})

export type FormGroupFieldProviderProps = {
  layout?: `horizontal` | `vertical`
  variant?: `standard` | `framed`
  children?: React.ReactNode
  gap?: StackGap
}

// TODO we can probably do away with context for layout and variant
// they can be replaced with passing props since in most cases we're going to use *Block or *ConnectedField components
export function FormGroupFieldProvider({
  layout,
  variant,
  children,
}: FormGroupFieldProviderProps) {
  const fieldContext = React.useMemo<FormGroupFieldContextValue>(() => {
    return {
      layout,
      variant,
    }
  }, [variant, layout])

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
    css: (theme: Theme) => [
      baseCss(theme),
      getGroupFieldStackStyles(`item`, theme),
    ],
    ...baseStyledProps,
  }
}

export function useStyledGroupFieldError(
  ...args: Parameters<typeof useStyledFieldError>
) {
  const { css: baseCss, ...baseStyledProps } = useStyledFieldError(...args)

  return {
    css: (theme: Theme) => [
      baseCss(theme),
      getGroupFieldStackStyles(`item`, theme),
    ],
    ...baseStyledProps,
  }
}

const horizontalOptionsCss: ThemeCss = theme =>
  getGroupFieldStackStyles(`item`, theme)

const verticalOptionsCss: ThemeCss = theme => [
  getGroupFieldStackStyles(`item`, theme),
  getGroupFieldStackStyles(`stack`, theme),
]

export type FormGroupFieldOptionsProps = Omit<
  JSX.IntrinsicElements["div"],
  "ref"
>
export const FormGroupFieldOptions: React.FC<
  FormGroupFieldOptionsProps
> = props => {
  const { layout } = useFormGroupField()
  const isHorizontal = layout === `horizontal`

  return isHorizontal ? (
    <div css={horizontalOptionsCss}>
      <div
        css={(theme: Theme) => getGroupFieldClusterStyles(`cluster`, theme)}
        {...props}
      />
    </div>
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
  const { layout } = useFormGroupField()
  const isHorizontal = layout === `horizontal`

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
>
export const FormGroupFieldOptionWrapper: React.FC<
  FormGroupFieldOptionWrapperProps
> = props => {
  const { layout } = useFormGroupField()
  const isHorizontal = layout === `horizontal`

  return (
    <div
      css={(theme: Theme) => [
        isHorizontal
          ? getGroupFieldClusterStyles(`item`, theme)
          : getGroupFieldStackStyles(`item`, theme),
      ]}
      {...props}
    />
  )
}

export function useFormGroupField() {
  return React.useContext(FormGroupFieldContext)
}
