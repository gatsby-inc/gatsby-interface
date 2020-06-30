/** @jsx jsx */
import { jsx, keyframes } from "@emotion/core"
import React from "react"

import { MdError } from "react-icons/md"
import { Theme } from "../../../theme"

import {
  getLabelFontSize,
  getLabelStyles,
  getDescriptionStyles,
  RequiredFlag,
  FormFieldLabelSize,
  getFieldLayoutStyles,
} from "./FormField.helpers"

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
    ],
    children: (
      <React.Fragment>
        {label} {isRequired && <RequiredFlag />}
      </React.Fragment>
    ),
  }
}

export function useStyledFieldHint() {
  return {
    css: (theme: Theme) => [
      getDescriptionStyles(theme),
      {
        gridArea: `hint`,
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
  return {
    css: (theme: Theme) => [
      getDescriptionStyles(theme),
      {
        gridArea: `error`,
        animation: `${errorEntry} .25s ease forwards`,
        color: theme.colors.red[70],
        opacity: 0,
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

export type FormFieldBlockLayout = `horizontal` | `vertical`

export type FormFieldContainerProps = Omit<
  JSX.IntrinsicElements["div"],
  "ref"
> & {
  layout?: FormFieldBlockLayout
}

export function FormFieldContainer({
  layout,
  ...rest
}: FormFieldContainerProps) {
  const layoutProps = useFormFieldContainerProps(layout)

  return <div {...layoutProps} {...rest} />
}

export function useFormFieldContainerProps(
  layout: FormFieldBlockLayout = `vertical`
) {
  return {
    css: (theme: Theme) => getFieldLayoutStyles(theme, layout),
  }
}
