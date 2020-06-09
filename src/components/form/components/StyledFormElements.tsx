/** @jsx jsx */
import { jsx, keyframes } from "@emotion/core"
import React from "react"
import { ThemeCss } from "../../../theme"
import { MdError } from "react-icons/md"
import { FormFieldBlockLayout } from "./FormField"
import { FormGroupOptionsDirection } from "./FormGroupField"

const auxillaryTextCss: ThemeCss = theme => ({
  color: theme.colors.grey[50],
  fontSize: theme.fontSizes[0],
  lineHeight: theme.lineHeights.dense,
  position: `relative`,
  zIndex: 0,
})

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

const errorIconCss: ThemeCss = theme => ({
  animation: `${errorIconEntry} .25s ease-out forwards`,
  height: `1em`,
  marginRight: theme.space[1],
  transform: `translateY(-0.1em) scale(0)`,
  verticalAlign: `middle`,
  width: `1em`,
})

export type FormErrorProps = React.ComponentPropsWithoutRef<"div">

export function FormError({ children, ...rest }: FormErrorProps) {
  const baseCss: ThemeCss = theme => [
    auxillaryTextCss(theme),
    {
      animation: `${errorEntry} .25s ease forwards`,
      color: theme.colors.red[70],
      opacity: 0,
    },
    {
      marginTop: theme.space[2],
    },
  ]

  return (
    <div {...rest} css={baseCss}>
      <MdError css={errorIconCss} />
      {children}
    </div>
  )
}

export type FormHintProps = React.ComponentPropsWithoutRef<"div">

export function FormHint(props: FormHintProps) {
  const baseCss: ThemeCss = theme => [
    auxillaryTextCss(theme),
    {
      marginTop: theme.space[2],
    },
  ]
  return <div {...props} css={baseCss} />
}

export type StyledFieldLabelSize = "L" | "M" | "S"

const labelBaseCss: ThemeCss = theme => ({
  color: theme.colors.grey[90],
  lineHeight: theme.lineHeights.dense,
  alignSelf: `baseline`,
})

const labelRequiredFlagCss: ThemeCss = theme => ({
  color: theme.colors.grey[50],
  fontSize: theme.fontSizes[0],
  marginLeft: theme.space[1],
})

const labelSizeStyles: Record<StyledFieldLabelSize, ThemeCss> = {
  L: theme => ({ fontSize: theme.fontSizes[2] }),
  M: theme => ({ fontSize: theme.fontSizes[1] }),
  S: theme => ({ fontSize: theme.fontSizes[0] }),
}

type StyledLabelOptions = {
  labelSize?: StyledFieldLabelSize
  required?: boolean
}

function getStyledFieldLabel(
  label: React.ReactNode,
  { labelSize = `M`, required }: StyledLabelOptions = {}
) {
  const finalLabel = required ? (
    <React.Fragment>
      {label} <span css={labelRequiredFlagCss}>(required)</span>
    </React.Fragment>
  ) : (
    label
  )

  const labelCss: ThemeCss = theme => [
    labelBaseCss(theme),
    labelSizeStyles[labelSize](theme),
    {
      marginBottom: theme.space[2],
    },
  ]

  return {
    finalLabel,
    labelCss,
  }
}

export type StyledFieldLabelProps = React.ComponentPropsWithoutRef<"label"> &
  StyledLabelOptions

export function StyledFieldLabel({
  children,
  required,
  labelSize,
  ...rest
}: StyledFieldLabelProps) {
  if (!children) {
    return null
  }

  const { finalLabel, labelCss } = getStyledFieldLabel(children, {
    required,
    labelSize,
  })

  return (
    <label {...rest} css={labelCss}>
      {finalLabel}
    </label>
  )
}

export type StyledGroupFieldLabelProps = React.ComponentPropsWithoutRef<"div"> &
  StyledLabelOptions

export function StyledGroupFieldLabel({
  children,
  required,
  labelSize,
  ...rest
}: StyledGroupFieldLabelProps) {
  if (!children) {
    return null
  }

  const { finalLabel, labelCss } = getStyledFieldLabel(children, {
    required,
    labelSize,
  })

  return (
    <div {...rest} css={labelCss}>
      {finalLabel}
    </div>
  )
}

export type FieldContainerProps = React.ComponentPropsWithoutRef<"div"> & {
  layout?: FormFieldBlockLayout
}

export function FieldContainer({ layout, ...rest }: FieldContainerProps) {
  const baseCss: ThemeCss = theme => [
    layout === `horizontal`
      ? {
          display: `grid`,
          gridTemplateColumns: `auto auto`,
          gridColumnGap: theme.space[7],
          alignItems: `baseline`,
        }
      : { display: `block` },
  ]

  return <div css={baseCss} {...rest}></div>
}

const horizontalOptionsCss: ThemeCss = theme => ({
  display: `flex`,
  flexWrap: `wrap`,
  paddingTop: theme.space[3],
})

const verticalOptionsCss: ThemeCss = theme => [
  {
    paddingTop: theme.space[3],
    paddingBottom: theme.space[3],
  },
]

export type OptionsContainerProps = React.ComponentPropsWithoutRef<"div"> & {
  layout?: FormFieldBlockLayout
  optionsDirection?: FormGroupOptionsDirection
}

export function OptionsContainer({
  layout = `vertical`,
  optionsDirection = `column`,
  ...rest
}: OptionsContainerProps) {
  const baseCss: ThemeCss = theme => [
    optionsDirection === `row`
      ? horizontalOptionsCss(theme)
      : [
          verticalOptionsCss(theme),
          layout === `horizontal` && { paddingTop: 0 },
        ],
  ]
  return <div css={baseCss} {...rest} />
}
