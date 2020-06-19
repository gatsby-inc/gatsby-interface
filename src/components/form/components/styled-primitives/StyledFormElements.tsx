/** @jsx jsx */
import { jsx, keyframes } from "@emotion/core"
import React from "react"
import { ThemeCss } from "../../../../theme"
import { MdError } from "react-icons/md"
import { FormGroupOptionsDirection } from "../FormGroupField"

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

export type StyledLabelSize = "L" | "M" | "S"

const labelBaseCss: ThemeCss = theme => ({
  color: theme.colors.grey[90],
  lineHeight: theme.lineHeights.dense,
  alignSelf: `baseline`,
  wordWrap: `break-word`,
  overflowWrap: `break-word`,
  hyphens: `auto`,
})

const labelRequiredFlagCss: ThemeCss = theme => ({
  color: theme.colors.grey[50],
  fontSize: theme.fontSizes[0],
  marginLeft: theme.space[1],
})

const labelSizeStyles: Record<StyledLabelSize, ThemeCss> = {
  L: theme => ({ fontSize: theme.fontSizes[2] }),
  M: theme => ({ fontSize: theme.fontSizes[1] }),
  S: theme => ({ fontSize: theme.fontSizes[0] }),
}

type StyledLabelOptions = {
  labelSize?: StyledLabelSize
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

export type StyledLabelProps = React.ComponentPropsWithoutRef<"label"> &
  StyledLabelOptions

export function StyledLabel({
  children,
  required,
  labelSize,
  ...rest
}: StyledLabelProps) {
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

export type FormLegendProps = React.ComponentPropsWithoutRef<"legend"> &
  StyledLabelOptions

export function FormLegend({
  children,
  required,
  labelSize,
  ...rest
}: FormLegendProps) {
  if (!children) {
    return null
  }

  const { finalLabel, labelCss } = getStyledFieldLabel(children, {
    required,
    labelSize,
  })

  const finalLabelCss: ThemeCss = theme => [
    labelCss(theme),
    { display: `block`, padding: 0 },
  ]

  return (
    <legend {...rest} css={finalLabelCss}>
      {finalLabel}
    </legend>
  )
}

export type FormFieldsetProps = React.ComponentPropsWithoutRef<"fieldset">

export function FormFieldset(props: FormFieldsetProps) {
  return (
    <fieldset
      {...props}
      // CSS reset for <fieldset> based on https://thatemil.com/blog/2015/01/03/reset-your-fieldset/
      css={{
        border: 0,
        margin: 0,
        padding: `0.01em 0 0 0`,
        minWidth: 0,
      }}
    />
  )
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
  optionsDirection?: FormGroupOptionsDirection
}

export function OptionsContainer({
  optionsDirection = `column`,
  ...rest
}: OptionsContainerProps) {
  const baseCss: ThemeCss = theme => [
    optionsDirection === `row`
      ? horizontalOptionsCss(theme)
      : verticalOptionsCss(theme),
  ]
  return <div css={baseCss} {...rest} />
}
