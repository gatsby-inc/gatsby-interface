/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import {
  FormGroupFieldSkeleton,
  FormGroupFieldSkeletonProps,
  FormGroupFieldSkeletonLabelProps,
  FormGroupFieldSkeletonOptionProps,
  FormGroupFieldSkeletonOptionLabelProps,
  FormGroupFieldSkeletonOptionLabel,
} from "../../form-skeletons/components/FormGroupFieldSkeleton"

import {
  FormField,
  FormFieldWrapperProps,
  FormFieldErrorProps,
  FormFieldHintProps,
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

function FormGroupFieldProvider({
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

export type FormGroupFieldProps = FormGroupFieldProviderProps &
  FormGroupFieldSkeletonProps

export function FormGroupField({
  variant,
  layout,
  ...rest
}: FormGroupFieldProps) {
  return (
    <FormGroupFieldProvider variant={variant} layout={layout}>
      <FormGroupFieldSkeleton
        css={[
          {
            padding: 0,
            margin: 0,
            border: 0,
          },
        ]}
        {...rest}
      />
    </FormGroupFieldProvider>
  )
}

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

export type FormGroupFieldLabelProps = {
  isRequired?: boolean
  size?: FormFieldLabelSize
} & FormGroupFieldSkeletonLabelProps

const Label: React.FC<FormGroupFieldLabelProps> = ({
  children,
  isRequired,
  size = `M`,
  ...rest
}) => {
  const styledProps = useStyledGroupFieldLabel(children, { size, isRequired })

  return <FormGroupFieldSkeleton.Label {...rest} {...styledProps} />
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

const FormGroupFieldHint: React.FC<FormFieldHintProps> = props => {
  const styledProps = useStyledGroupFieldHint()

  return <FormField.Hint {...props} {...styledProps} />
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

const FormGroupFieldError: React.FC<FormFieldErrorProps> = props => {
  const styledProps = useStyledGroupFieldError(props.children)

  return <FormField.Error {...props} {...styledProps} />
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
  const { layout } = FormGroupField.useFormGroupField()
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

export type FormGroupFieldOptionProps = Omit<
  FormGroupFieldSkeletonOptionProps,
  "ref"
>

const Option: React.FC<FormGroupFieldOptionProps> = props => (
  <FormGroupFieldSkeleton.Option {...props} />
)

export type FormGroupFieldOptionLabelProps = {
  size?: FormFieldLabelSize
} & FormGroupFieldSkeletonOptionLabelProps

export function useStyledGroupFieldOptionLabel({
  size = `L`,
}: {
  size?: FormFieldLabelSize
}): { css: ThemeCss } {
  const { layout } = FormGroupField.useFormGroupField()
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

const OptionLabel: React.FC<FormGroupFieldOptionLabelProps> = ({
  size = `L`,
  ...rest
}) => {
  const styledProps = useStyledGroupFieldOptionLabel({ size })

  return <FormGroupFieldSkeletonOptionLabel {...rest} {...styledProps} />
}

export type FormGroupFieldOptionWrapperProps = FormFieldWrapperProps
export const FormGroupFieldOptionWrapper: React.FC<
  FormGroupFieldOptionWrapperProps
> = props => {
  const { layout } = FormGroupField.useFormGroupField()
  const isHorizontal = layout === `horizontal`

  return (
    <FormField.Wrapper
      css={(theme: Theme) => [
        isHorizontal
          ? getGroupFieldClusterStyles(`item`, theme)
          : getGroupFieldStackStyles(`item`, theme),
      ]}
      {...props}
    />
  )
}

function useFormGroupField() {
  return React.useContext(FormGroupFieldContext)
}

FormGroupField.Label = Label
FormGroupField.Label.displayName = `FormGroupField.Label`

FormGroupField.Options = FormGroupFieldOptions
FormGroupField.Options.displayName = `FormGroupField.Options`

FormGroupField.Option = Option
FormGroupField.Option.displayName = `FormGroupField.Option`

FormGroupField.OptionLabel = OptionLabel
FormGroupField.OptionLabel.displayName = `FormGroupField.OptionLabel`

FormGroupField.OptionWrapper = FormGroupFieldOptionWrapper
FormGroupField.OptionWrapper.displayName = `FormGroupField.OptionWrapper`

FormGroupField.Hint = FormGroupFieldHint
FormGroupField.Hint.displayName = `FormGroupField.Hint`

FormGroupField.Error = FormGroupFieldError
FormGroupField.Error.displayName = `FormGroupField.Error`

FormGroupField.useFormGroupField = useFormGroupField

export default FormGroupField
