/** @jsx jsx */
import { jsx, keyframes } from "@emotion/core"
import React from "react"

import { MdError } from "react-icons/md"
import { getStackStyles } from "../../stack"
import { Theme } from "../../../theme"
import {
  FormFieldSkeletonProps,
  FormFieldSkeleton,
  FormFieldSkeletonLabelProps,
  FormFieldSkeletonHintProps,
  FormFieldSkeletonLabel,
  useFormFieldSkeleton,
  FormFieldSkeletonHint,
  FormFieldSkeletonError,
  FormFieldSkeletonErrorProps,
} from "../../form-skeletons/components/FormFieldSkeleton"

import {
  getLabelFontSize,
  getLabelStyles,
  getDescriptionStyles,
  RequiredFlag,
  FormFieldLabelSize,
} from "./FormField.helpers"

export function getFieldStackStyles(type: `stack` | `item`, theme: Theme) {
  const { stackCss, stackItemCss } = getStackStyles({
    gap: 2,
    align: "left",
    theme: theme,
  })

  return type === `item` ? stackItemCss : stackCss
}

export function FormField(props: FormFieldSkeletonProps) {
  return <FormFieldSkeleton {...props} />
}

export type FormFieldWrapperProps = Pick<
  JSX.IntrinsicElements["div"],
  "className" | "style"
>

export const FormFieldWrapper: React.FC<FormFieldWrapperProps> = props => {
  return <div {...props} />
}

FormField.Wrapper = FormFieldWrapper
FormField.Wrapper.displayName = `FormField.Wrapper`

export type FormFieldStackProps = FormFieldWrapperProps

export const FormFieldStack: React.FC<FormFieldStackProps> = props => {
  return <div css={theme => getFieldStackStyles(`stack`, theme)} {...props} />
}

FormField.Stack = FormFieldStack
FormField.Stack.displayName = `FormField.FieldStack`

export type FormFieldLabelProps = FormFieldSkeletonLabelProps & {
  isRequired?: boolean
  size?: FormFieldLabelSize
}

export const FormFieldLabel: React.FC<FormFieldLabelProps> = ({
  children,
  isRequired,
  size = `M`,
  ...rest
}) => {
  const styledProps = useStyledFieldLabel(children, { size, isRequired })

  return <FormFieldSkeletonLabel {...styledProps} {...rest} />
}

FormField.Label = FormFieldLabel
FormField.Label.displayName = `FormField.Label`

export function useStyledFieldLabel(
  label?: React.ReactNode,
  {
    size = `M`,
    isRequired = false,
  }: { size?: FormFieldLabelSize; isRequired?: boolean } = {}
) {
  return {
    css: (theme: Theme) => [
      getLabelFontSize(size, theme),
      getLabelStyles(theme),
      getFieldStackStyles(`item`, theme),
    ],
    children: (
      <React.Fragment>
        {label} {isRequired && <RequiredFlag />}
      </React.Fragment>
    ),
  }
}

export type FormFieldHintProps = FormFieldSkeletonHintProps

export const FormFieldHint: React.FC<FormFieldHintProps> = ({
  children,
  ...rest
}) => {
  const styledProps = useStyledFieldHint()

  return (
    <FormFieldSkeletonHint {...styledProps} {...rest}>
      {children}
    </FormFieldSkeletonHint>
  )
}

FormField.Hint = FormFieldHint
FormField.Hint.displayName = `FormField.Hint`

export function useStyledFieldHint() {
  const { hasHint } = useFormFieldSkeleton()

  return {
    css: (theme: Theme) => [
      getDescriptionStyles(theme),
      getFieldStackStyles(`item`, theme),
      {
        "&&": {
          marginTop: !hasHint ? 0 : undefined,
        },
      },
    ],
  }
}

const errorEntry = keyframes`
  50% {
    opacity: .5;
  }
  to {
    opacity: 1;
  }
`

const errorIconEntry = keyframes`
  to {
    transform: translateY(-0.1em) scale(1) 
  }
`

export type FormFieldErrorProps = FormFieldSkeletonErrorProps

export const FormFieldError: React.FC<FormFieldErrorProps> = ({
  children,
  ...rest
}) => {
  const styledProps = useStyledFieldError(children)

  return <FormFieldSkeletonError {...styledProps} {...rest} />
}

FormField.Error = FormFieldError
FormField.Error.displayName = `FormField.Error`

export function useStyledFieldError(error?: React.ReactNode) {
  const { hasError, hasHint } = useFormFieldSkeleton()

  return {
    css: (theme: Theme) => [
      getDescriptionStyles(theme),
      getFieldStackStyles(`item`, theme),
      {
        animation: `${errorEntry} .25s ease forwards`,
        color: theme.colors.red[70],
        opacity: 0,

        "&&": {
          marginTop: !hasError ? 0 : hasHint ? `${theme.space[1]}` : undefined,
        },
      },
    ],
    children: (
      <React.Fragment>
        <MdError
          css={(theme: Theme) => ({
            animation: `${errorIconEntry} .25s ease-out forwards`,
            height: `1em`,
            marginRight: theme.space[1],
            transform: `translateY(-0.1em) scale(0)`,
            verticalAlign: `middle`,
            width: `1em`,
          })}
        />
        {error}
      </React.Fragment>
    ),
  }
}
