/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { getFocusStyles } from "./FormField.helpers"
import {
  CheckboxGroupFieldSkeleton,
  CheckboxGroupFieldSkeletonProps,
  CheckboxGroupFieldSkeletonOptionProps,
  CheckboxGroupFieldSkeletonOptionLabelProps,
  CheckboxGroupFieldSkeletonOption,
  CheckboxGroupFieldSkeletonOptionLabel,
  CheckboxGroupFieldSkeletonLabel,
  CheckboxGroupFieldSkeletonHintProps,
  CheckboxGroupFieldSkeletonHint,
  CheckboxGroupFieldSkeletonErrorProps,
  CheckboxGroupFieldSkeletonError,
  CheckboxGroupFieldSkeletonLabelProps,
} from "../../form-skeletons/components/CheckboxGroupFieldSkeleton"
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
  FormGroupFieldProvider,
  WithFormGroupField,
  formGroupFieldCss,
} from "./FormGroupField"
import { useFormFieldSkeleton } from "../../form-skeletons/components/FormFieldSkeleton"
import { Theme } from "../../../theme"
import { INPUT_WIDTH, INPUT_VERTICAL_OFFSET_CALC } from "./FormGroupField"
import { WithStyledFieldLabel } from "./FormField"

export type CheckboxGroupFieldProps = Omit<
  WithFormGroupField<CheckboxGroupFieldSkeletonProps>,
  "variant"
>
export function CheckboxGroupField({
  layout,
  ...rest
}: CheckboxGroupFieldProps) {
  return (
    <FormGroupFieldProvider layout={layout}>
      <CheckboxGroupFieldSkeleton css={formGroupFieldCss} {...rest} />
    </FormGroupFieldProvider>
  )
}

export type CheckboxGroupFieldOptionProps = CheckboxGroupFieldSkeletonOptionProps
export const CheckboxGroupFieldOption = React.forwardRef<
  HTMLInputElement,
  CheckboxGroupFieldOptionProps
>(function CheckboxGroupFieldOption(props, ref) {
  return (
    <CheckboxGroupFieldSkeletonOption
      ref={ref}
      css={(theme: Theme) => [
        {
          position: `absolute`,
          left: `-9999px`,
          opacity: 1,

          "&:focus + label::before": getFocusStyles(theme),

          "&:checked + label::before": {
            backgroundColor: theme.colors.purple[60],
            borderColor: theme.colors.purple[60],
            backgroundOrigin: `border-box`,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.32505 15.1584L4.19049 10.8791C3.87533 10.423 3.95905 9.80199 4.38373 9.44564L4.38374 9.44564C4.80842 9.08929 5.43452 9.11468 5.82896 9.50424L9.49899 13.3343C10.0964 13.9243 10.0568 14.9003 9.41361 15.44L9.4136 15.44C8.7704 15.9797 7.80237 15.8492 7.32505 15.1584Z' fill='white'/%3E%3Cpath d='M7.58182 15.4296C6.92843 14.8813 6.86426 13.8988 7.44078 13.2703L14.7221 5.33129C15.0919 4.92814 15.7135 4.88754 16.1326 5.23917L16.1326 5.23917C16.5517 5.59081 16.6196 6.21003 16.2868 6.64418L9.73285 15.1935C9.21392 15.8704 8.23522 15.9779 7.58182 15.4296L7.58182 15.4296Z' fill='white'/%3E%3Cpath d='M7.747 11.5322C8.1138 11.9724 8.38279 12.2658 8.8474 11.7523C9.31202 11.2388 8.70068 13.0483 8.70068 13.0483L7.18457 12.5593L7.747 11.5322Z' fill='white'/%3E%3C/svg%3E")`,
          },
        },
      ]}
      {...props}
    />
  )
})

export type CheckboxGroupFieldOptionLabelProps = CheckboxGroupFieldSkeletonOptionLabelProps &
  FormGroupFieldOptionLabelProps
export const CheckboxGroupFieldOptionLabel: React.FC<
  CheckboxGroupFieldOptionLabelProps
> = ({ size, ...rest }) => {
  const { hasError } = useFormFieldSkeleton()
  const { css, ...styledProps } = useStyledGroupFieldOptionLabel({ size })

  return (
    <CheckboxGroupFieldSkeletonOptionLabel
      css={(theme: Theme) => [
        css(theme),
        {
          "&:before": {
            backgroundColor: theme.colors.white,
            border: hasError
              ? `1px solid ${theme.colors.red[60]}`
              : `2px solid ${theme.colors.grey[30]}`,
            borderRadius: `3px`,
            content: `""`,
            display: `block`,
            height: INPUT_WIDTH,
            marginRight: theme.space[3],
            position: `absolute`,
            top: 0,
            left: 0,
            transition: `border-color 0.15s ease-in-out, background 0.15s ease-in-out`,
            transform: `translate(0, calc(${INPUT_VERTICAL_OFFSET_CALC}))`,
            width: INPUT_WIDTH,
          },
        },
      ]}
      {...rest}
      {...styledProps}
    />
  )
}

export type CheckboxGroupFieldLabelProps = WithStyledFieldLabel<
  CheckboxGroupFieldSkeletonLabelProps
>
export function CheckboxGroupFieldLabel({
  children,
  size,
  isRequired,
  ...props
}: CheckboxGroupFieldLabelProps) {
  const styledProps = useStyledGroupFieldLabel(children, { size, isRequired })

  return <CheckboxGroupFieldSkeletonLabel {...props} {...styledProps} />
}

export type CheckboxGroupFieldHintProps = CheckboxGroupFieldSkeletonHintProps
export function CheckboxGroupFieldHint(props: CheckboxGroupFieldHintProps) {
  const styledProps = useStyledGroupFieldHint()

  return <CheckboxGroupFieldSkeletonHint {...props} {...styledProps} />
}

export type CheckboxGroupFieldErrorProps = CheckboxGroupFieldSkeletonErrorProps
export function CheckboxGroupFieldError(props: CheckboxGroupFieldErrorProps) {
  const styledProps = useStyledGroupFieldError(props.children)

  return <CheckboxGroupFieldSkeletonError {...props} {...styledProps} />
}

export type CheckboxGroupFieldOptionsProps = FormGroupFieldOptionsProps
export function CheckboxGroupFieldOptions(
  props: CheckboxGroupFieldOptionsProps
) {
  return <FormGroupFieldOptions {...props} />
}

export type CheckboxGroupFieldOptionWrapperProps = FormGroupFieldOptionWrapperProps
export function CheckboxGroupFieldOptionWrapper(
  props: CheckboxGroupFieldOptionWrapperProps
) {
  return <FormGroupFieldOptionWrapper {...props} />
}
