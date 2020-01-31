/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import { getFocusStyles } from "./FormField.helpers"
import { FormGroupFieldSkeletonOptionProps } from "../../form-skeletons/components/FormGroupFieldSkeleton"
import FormGroupField, {
  FormGroupFieldOptionLabelProps,
} from "./FormGroupField"
// import colors from "../../../theme/colors"
// import space from "../../../theme/space"
// import radii from "../../../theme/radii"
import FormFieldSkeleton from "../../form-skeletons/components/FormFieldSkeleton"
import { FormGroupFieldProps } from "./FormGroupField"
import { getStackStyles } from "../../stack"
import { Theme } from "../../../theme"

import { INPUT_WIDTH, INPUT_VERTICAL_OFFSET_CALC } from "./FormGroupField"

function RadioButtonField(props: FormGroupFieldProps) {
  const framedVariantStyle =
    props.variant && props.variant === `framed`
      ? getStackStyles({ gap: 3 })
      : null
  return <FormGroupField css={[framedVariantStyle]} {...props} />
}

const Option = React.forwardRef<
  HTMLInputElement,
  FormGroupFieldSkeletonOptionProps
>((props, ref) => (
  <FormGroupField.Option
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
    type="radio"
    {...props}
  />
))

const getFrameStyles = (theme: Theme) => ({
  border: `2px solid ${theme.colors.white}`,
  borderRadius: theme.radii[3],
  margin: 0,
  width: `100%`,
  transition: `border .15s ease-in-out`,
})

const OptionLabel: React.FC<FormGroupFieldOptionLabelProps> = props => {
  const { hasError } = FormFieldSkeleton.useFormFieldSkeleton()
  const { variant } = FormGroupField.useFormGroupField()

  return (
    <FormGroupField.OptionLabel
      css={(theme: Theme) => [
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
        variant === `framed`
          ? {
              ...getFrameStyles(theme),
              marginBottom: 0,
              padding: `${theme.space[4]} ${theme.space[5]}`,
              paddingLeft: `calc(${INPUT_WIDTH} + ${theme.space[7]})`,
              "&:before": {
                left: theme.space[4],
                top: theme.space[4],
              },
            }
          : {},
      ]}
      {...props}
    />
  )
}

export type RadioButtonFieldOptionFramProps = Pick<
  JSX.IntrinsicElements["div"],
  "className" | "style"
>

const OptionFrame: React.FC<RadioButtonFieldOptionFramProps> = props => {
  const { variant } = FormGroupField.useFormGroupField()

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

RadioButtonField.Label = FormGroupField.Label
RadioButtonField.Label.displayName = `RadioButtonField.Label`

RadioButtonField.OptionFrame = OptionFrame
RadioButtonField.OptionFrame.displayName = `RadioButtonField.OptionFrame`

RadioButtonField.OptionWrapper = FormGroupField.OptionWrapper
RadioButtonField.OptionWrapper.displayName = `RadioButtonField.OptionWrapper`

RadioButtonField.Option = Option
RadioButtonField.Option.displayName = `RadioButtonField.Option`

RadioButtonField.OptionLabel = OptionLabel
RadioButtonField.OptionLabel.displayName = `RadioButtonField.OptionLabel`

RadioButtonField.Options = FormGroupField.Options
RadioButtonField.Options.displayName = `RadioButtonField.Options`

RadioButtonField.Hint = FormGroupField.Hint
RadioButtonField.Hint.displayName = `RadioButtonField.Hint`

RadioButtonField.Error = FormGroupField.Error
RadioButtonField.Error.displayName = `RadioButtonField.Error`

export default RadioButtonField
