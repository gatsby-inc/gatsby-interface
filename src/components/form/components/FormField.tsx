/** @jsx jsx */
import { jsx, keyframes } from "@emotion/core"
import React from "react"

import { MdError } from "react-icons/md"
import { getStackStyles } from "../../stack"
import { Theme } from "../../../theme"
import {
  useFormFieldSkeleton,
  ErrorValidationMode,
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

export type FormFieldStackProps = Omit<JSX.IntrinsicElements["div"], "ref">

export const FormFieldStack: React.FC<FormFieldStackProps> = props => {
  return <div css={theme => getFieldStackStyles(`stack`, theme)} {...props} />
}

export type StyledFieldLabelProps = {
  isRequired?: boolean
  size?: FormFieldLabelSize
}

export type WithStyledFieldLabel<T> = Omit<T, keyof StyledFieldLabelProps> &
  StyledFieldLabelProps

export function useStyledFieldLabel(
  label?: React.ReactNode,
  { size = `M`, isRequired = false }: StyledFieldLabelProps = {}
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

export type FormFieldBlockProps = {
  id: string
  label: React.ReactNode
  labelSize?: FormFieldLabelSize
  error?: React.ReactNode
  hint?: React.ReactNode
  validationMode?: ErrorValidationMode
}

export type WithFormFieldBlock<T> = Omit<T, keyof FormFieldBlockProps> &
  FormFieldBlockProps
