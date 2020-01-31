/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import FormGroupFieldSkeleton, {
  FormGroupFieldSkeletonProps,
  FormGroupFieldSkeletonLabelProps,
  FormGroupFieldSkeletonOptionProps,
  FormGroupFieldSkeletonOptionLabelProps,
} from "../../form-skeletons/components/FormGroupFieldSkeleton"

import {
  FormField,
  FormFieldWrapperProps,
  FormFieldErrorProps,
  FormFieldHintProps,
} from "./FormField"
import { getStackStyles, StackGap } from "../../stack"
import { getClusterStyles } from "../../cluster"
import { useTheme } from "../../ThemeProvider"
import { Theme } from "../../../theme"
import {
  getLabelFontSize,
  getLabelStyles,
  FormFieldLabelSize,
  RequiredFlag,
} from "./FormField.helpers"

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
  const t = useTheme()

  return (
    <FormGroupFieldSkeleton.Label
      css={(theme: Theme) => [
        getLabelFontSize(size, theme),
        getLabelStyles(theme),
        getGroupFieldStackStyles(`item`, t),
        {
          padding: 0,
          marginRight: 0,
          marginLeft: 0,
          width: `100%`,
        },
      ]}
      {...rest}
    >
      {children} {isRequired && <RequiredFlag />}
    </FormGroupFieldSkeleton.Label>
  )
}

const Options: React.FC<{}> = props => {
  const { layout } = FormGroupField.useFormGroupField()
  const isHorizontal = layout === `horizontal`
  const t = useTheme()

  return isHorizontal ? (
    <div css={getGroupFieldStackStyles(`item`, t)}>
      <div css={getGroupFieldClusterStyles(`cluster`, t)} {...props} />
    </div>
  ) : (
    <div
      css={[
        getGroupFieldStackStyles(`item`, t),
        getGroupFieldStackStyles(`stack`, t),
      ]}
      {...props}
    />
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

const OptionLabel: React.FC<FormGroupFieldOptionLabelProps> = ({
  size = `L`,
  ...rest
}) => {
  const { layout } = FormGroupField.useFormGroupField()
  const isHorizontal = layout === `horizontal`

  return (
    <FormGroupFieldSkeleton.OptionLabel
      css={(theme: Theme) => [
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
      ]}
      {...rest}
    />
  )
}

const OptionWrapper: React.FC<FormFieldWrapperProps> = props => {
  const { layout } = FormGroupField.useFormGroupField()
  const isHorizontal = layout === `horizontal`
  const t = useTheme()

  return (
    <FormField.Wrapper
      css={[
        isHorizontal
          ? getGroupFieldClusterStyles(`item`, t)
          : getGroupFieldStackStyles(`item`, t),
      ]}
      {...props}
    />
  )
}

const FormGroupFieldHint: React.FC<FormFieldHintProps> = props => {
  const t = useTheme()

  return (
    <FormField.Hint css={[getGroupFieldStackStyles(`item`, t)]} {...props} />
  )
}

const FormGroupFieldError: React.FC<FormFieldErrorProps> = props => {
  const t = useTheme()

  return (
    <FormField.Error css={[getGroupFieldStackStyles(`item`, t)]} {...props} />
  )
}

function useFormGroupField() {
  return React.useContext(FormGroupFieldContext)
}

FormGroupField.Label = Label
FormGroupField.Label.displayName = `FormGroupField.Label`

FormGroupField.Options = Options
FormGroupField.Options.displayName = `FormGroupField.Options`

FormGroupField.Option = Option
FormGroupField.Option.displayName = `FormGroupField.Option`

FormGroupField.OptionLabel = OptionLabel
FormGroupField.OptionLabel.displayName = `FormGroupField.OptionLabel`

FormGroupField.OptionWrapper = OptionWrapper
FormGroupField.OptionWrapper.displayName = `FormGroupField.OptionWrapper`

FormGroupField.OptionWrapper = OptionWrapper
FormGroupField.OptionWrapper.displayName = `FormGroupField.OptionWrapper`

FormGroupField.Hint = FormGroupFieldHint
FormGroupField.Hint.displayName = `FormGroupField.Hint`

FormGroupField.Error = FormGroupFieldError
FormGroupField.Error.displayName = `FormGroupField.Error`

FormGroupField.useFormGroupField = useFormGroupField

export default FormGroupField
