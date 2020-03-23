/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import { getFocusStyles } from "./FormField.helpers"
import {
  RadioButtonFieldSkeleton,
  RadioButtonFieldSkeletonProps,
  RadioButtonFieldSkeletonOptionProps,
  RadioButtonFieldSkeletonOptionLabelProps,
  RadioButtonFieldSkeletonOption,
  RadioButtonFieldSkeletonOptionLabel,
  RadioButtonFieldSkeletonLabel,
  RadioButtonFieldSkeletonHintProps,
  RadioButtonFieldSkeletonHint,
  RadioButtonFieldSkeletonErrorProps,
  RadioButtonFieldSkeletonError,
  RadioButtonFieldSkeletonLabelProps,
} from "../../form-skeletons/components/RadioButtonFieldSkeleton"
import {
  useStyledGroupFieldLabel,
  useStyledGroupFieldHint,
  useStyledGroupFieldError,
  FormGroupFieldOptionsProps,
  FormGroupFieldOptions,
  FormGroupFieldOptionWrapperProps,
  FormGroupFieldOptionWrapper,
  useStyledGroupFieldOptionLabel,
  FormGroupFieldOptionLabelProps,
  useFormGroupField,
  FormGroupFieldProvider,
  formGroupFieldCss,
  WithFormGroupField,
} from "./FormGroupField"
import { useFormFieldSkeleton } from "../../form-skeletons/components/FormFieldSkeleton"
import { getStackStyles } from "../../stack"
import { Theme, ThemeCss } from "../../../theme"

import { INPUT_WIDTH, INPUT_VERTICAL_OFFSET_CALC } from "./FormGroupField"
import { WithStyledFieldLabel } from "./FormField"

export type RadioButtonFieldProps = WithFormGroupField<
  RadioButtonFieldSkeletonProps
>
export function RadioButtonField({
  variant,
  layout,
  ...rest
}: RadioButtonFieldProps) {
  return (
    <FormGroupFieldProvider variant={variant} layout={layout}>
      <RadioButtonFieldSkeleton
        css={(theme: Theme) => [
          formGroupFieldCss(theme),
          variant === `framed` && getStackStyles({ gap: 3, theme }),
        ]}
        {...rest}
      />
    </FormGroupFieldProvider>
  )
}

export type RadioButtonFieldOptionProps = RadioButtonFieldSkeletonOptionProps
export const RadioButtonFieldOption = React.forwardRef<
  HTMLInputElement,
  RadioButtonFieldOptionProps
>(function RadioButtonFieldOption(props, ref) {
  return (
    <RadioButtonFieldSkeletonOption
      ref={ref}
      css={(theme: Theme) => [
        {
          position: `absolute`,
          left: `-9999px`,
          opacity: 0,

          "&:checked + label": {
            borderColor: theme.colors.purple[60],
          },

          "&:checked + label::before": {
            borderColor: theme.colors.purple[60],
            backgroundColor: theme.colors.purple[60],
            backgroundOrigin: `border-box`,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M20 0H0V20H20V0ZM10 14C12.2091 14 14 12.2091 14 10C14 7.79086 12.2091 6 10 6C7.79086 6 6 7.79086 6 10C6 12.2091 7.79086 14 10 14Z' fill='white'/%3E%3C/svg%3E%0A")`,
          },

          "&:not(:checked):hover + label::before": {
            borderColor: theme.colors.purple[40],
          },

          "&:focus + label::before": {
            ...getFocusStyles(theme),
            transition: `border-color 0.15s ease-in-out, background 0.15s ease-in-out`,
          },
        },
      ]}
      {...props}
    />
  )
})

const getFrameStyles: ThemeCss = theme => ({
  border: `2px solid ${theme.colors.white}`,
  borderRadius: theme.radii[3],
  margin: 0,
  width: `100%`,
  transition: `border .15s ease-in-out`,
})

export type RadioButtonFieldOptionLabelProps = RadioButtonFieldSkeletonOptionLabelProps &
  FormGroupFieldOptionLabelProps
export const RadioButtonFieldOptionLabel: React.FC<
  RadioButtonFieldOptionLabelProps
> = ({ size, ...rest }) => {
  const { hasError } = useFormFieldSkeleton()
  const { css, ...styledProps } = useStyledGroupFieldOptionLabel({ size })
  const { variant } = useFormGroupField()

  return (
    <RadioButtonFieldSkeletonOptionLabel
      css={(theme: Theme) => [
        css(theme),
        {
          "&:before": {
            backgroundColor: theme.colors.white,
            border: hasError
              ? `1px solid ${theme.colors.red[60]}`
              : `2px solid ${theme.colors.grey[30]}`,
            display: `block`,
            borderRadius: `50%`,
            content: `""`,
            height: INPUT_WIDTH,
            position: `absolute`,
            top: 0,
            left: 0,
            transition: `border-color 0.15s ease-in-out`,
            transform: `translate(0, calc(${INPUT_VERTICAL_OFFSET_CALC}))`,
            width: INPUT_WIDTH,
          },
        },
        variant === `framed` && [
          getFrameStyles(theme),
          {
            marginBottom: 0,
            padding: `${theme.space[4]} ${theme.space[5]}`,
            paddingLeft: `calc(${INPUT_WIDTH} + ${theme.space[7]})`,
            "&:before": {
              left: theme.space[4],
              top: theme.space[4],
            },
          },
        ],
      ]}
      {...rest}
      {...styledProps}
    />
  )
}

export type RadioButtonFieldOptionFrameProps = Pick<
  JSX.IntrinsicElements["div"],
  "className" | "style"
>

export const RadioButtonFieldOptionFrame: React.FC<
  RadioButtonFieldOptionFrameProps
> = props => {
  const { variant } = useFormGroupField()

  return (
    <div
      css={(theme: Theme) => [
        variant !== `framed` ? getFrameStyles(theme) : {},
        {
          label: {
            display: `block`,
            margin: 0,
          },
          "&:focus-within": {
            borderColor: theme.colors.purple[40],
          },
        },
      ]}
      {...props}
    />
  )
}

export type RadioButtonFieldLabelProps = WithStyledFieldLabel<
  RadioButtonFieldSkeletonLabelProps
>
export function RadioButtonFieldLabel({
  children,
  size,
  isRequired,
  ...props
}: RadioButtonFieldLabelProps) {
  const styledProps = useStyledGroupFieldLabel(children, { size, isRequired })

  return <RadioButtonFieldSkeletonLabel {...props} {...styledProps} />
}

export type RadioButtonFieldHintProps = RadioButtonFieldSkeletonHintProps
export function RadioButtonFieldHint(props: RadioButtonFieldHintProps) {
  const styledProps = useStyledGroupFieldHint()

  return <RadioButtonFieldSkeletonHint {...props} {...styledProps} />
}

export type RadioButtonFieldErrorProps = RadioButtonFieldSkeletonErrorProps
export function RadioButtonFieldError(props: RadioButtonFieldErrorProps) {
  const styledProps = useStyledGroupFieldError(props.children)

  return <RadioButtonFieldSkeletonError {...props} {...styledProps} />
}

export type RadioButtonFieldOptionsProps = FormGroupFieldOptionsProps
export function RadioButtonFieldOptions(props: RadioButtonFieldOptionsProps) {
  return <FormGroupFieldOptions {...props} />
}

export type RadioButtonFieldOptionWrapperProps = FormGroupFieldOptionWrapperProps
export function RadioButtonFieldOptionWrapper(
  props: RadioButtonFieldOptionWrapperProps
) {
  return <FormGroupFieldOptionWrapper {...props} />
}
