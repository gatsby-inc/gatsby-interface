/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
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
import { styledCheckboxCss } from "./CheckboxField"
import { showFormFieldDeprecatedMessage } from "../../../utils/maintenance/deprecationMessages"

export type CheckboxGroupFieldProps = Omit<
  WithFormGroupField<CheckboxGroupFieldSkeletonProps>,
  "variant"
>
export function CheckboxGroupField({
  optionsDirection,
  ...rest
}: CheckboxGroupFieldProps) {
  showFormFieldDeprecatedMessage("CheckboxGroupField", true)
  return (
    <FormGroupFieldProvider optionsDirection={optionsDirection}>
      <CheckboxGroupFieldSkeleton css={formGroupFieldCss} {...rest} />
    </FormGroupFieldProvider>
  )
}

export type CheckboxGroupFieldOptionProps = CheckboxGroupFieldSkeletonOptionProps
export const CheckboxGroupFieldOption = React.forwardRef<
  HTMLInputElement,
  CheckboxGroupFieldOptionProps
>(function CheckboxGroupFieldOption(props, ref) {
  const { hasError } = useFormFieldSkeleton()

  return (
    <CheckboxGroupFieldSkeletonOption
      ref={ref}
      css={styledCheckboxCss(hasError)}
      {...props}
    />
  )
})

export type CheckboxGroupFieldOptionLabelProps = CheckboxGroupFieldSkeletonOptionLabelProps &
  FormGroupFieldOptionLabelProps
export const CheckboxGroupFieldOptionLabel: React.FC<CheckboxGroupFieldOptionLabelProps> = ({
  size,
  ...rest
}) => {
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

export type CheckboxGroupFieldOptionItemProps = CheckboxGroupFieldOptionProps & {
  label: React.ReactNode
}

export function CheckboxGroupFieldOptionItem({
  label,
  value,
  ...rest
}: CheckboxGroupFieldOptionItemProps) {
  return (
    <CheckboxGroupFieldOptionWrapper>
      <CheckboxGroupFieldOption value={value} {...rest} />
      <CheckboxGroupFieldOptionLabel optionValue={value}>
        {label}
      </CheckboxGroupFieldOptionLabel>
    </CheckboxGroupFieldOptionWrapper>
  )
}
