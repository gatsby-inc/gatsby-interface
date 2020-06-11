/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { ThemeCss } from "../../../../theme"
import { baseFormControlStyles } from "../../styles"
import { StyledLabel, StyledLabelProps } from "./StyledFormElements"

export type StyledRadioButtonProps = Omit<
  React.ComponentPropsWithRef<"input">,
  "type"
>

export const StyledRadioButton = React.forwardRef<
  HTMLInputElement,
  StyledRadioButtonProps
>(function StyledRadioButton(props, ref) {
  return (
    <React.Fragment>
      <input ref={ref} css={styledRadioButtonCss} {...props} type="radio" />
      <span aria-hidden="true" css={styledRadioButtonBoxCss} />
    </React.Fragment>
  )
})

export type StyledRadioLabelProps = StyledLabelProps

export function StyledRadioLabel(props: StyledRadioLabelProps) {
  return <StyledLabel labelSize="L" css={{ marginBottom: 0 }} {...props} />
}

const DOT_SIZE = `8px`
const RADIO_BOX_SIZE = `20px`
const CHECKBOX_VERTICAL_OFFSET_CALC = `(1em - 16px) * 0.5`

const styledRadioButtonCss: ThemeCss = theme => [
  {
    opacity: 0,
    cursor: `pointer`,
    width: RADIO_BOX_SIZE,
    height: RADIO_BOX_SIZE,
    flexShrink: 0,
    margin: 0,
    padding: 0,

    "&:checked + span": {
      color: theme.colors.purple[60],
    },

    "&:checked + span::before": {
      borderColor: theme.colors.purple[60],
      backgroundColor: theme.colors.white,
    },

    "&:not(:checked):not(:disabled):hover + span::before": {
      borderColor: theme.colors.purple[40],
    },

    "&:disabled + span": {
      color: theme.colors.grey[10],
      cursor: `not-allowed`,
    },

    "&:disabled + span::before": {
      borderColor: theme.colors.grey[30],
      backgroundColor: theme.colors.grey[10],
      cursor: `not-allowed`,
    },

    "&[aria-invalid='true'] + span::before": {
      borderWidth: 1,
    },

    "&[aria-invalid='true']:not(:checked) + span::before": {
      borderColor: theme.colors.red[60],
    },

    "&:checked:disabled + span": {
      color: theme.colors.grey[40],
    },

    "&:checked:disabled + span > svg": {
      backgroundColor: theme.colors.grey[40],
    },

    "&:focus + span::before": [
      baseFormControlStyles.focusedStyles(theme),
      {
        transition: `border-color 0.15s ease-in-out 0s`,
      },
    ],
  },
]

const styledRadioButtonBoxCss: ThemeCss = theme => ({
  cursor: `pointer`,
  position: `relative`,
  left: `-${RADIO_BOX_SIZE}`,
  pointerEvents: `none`,
  color: `transparent`,
  transition: `color 0.15s ease-in-out`,

  "::before": {
    cursor: `pointer`,
    backgroundColor: theme.colors.white,
    border: `2px solid ${theme.colors.grey[30]}`,
    borderRadius: theme.radii[5],
    content: `""`,
    display: `block`,
    position: `absolute`,
    height: RADIO_BOX_SIZE,
    width: RADIO_BOX_SIZE,
    top: 0,
    left: 0,
    transform: `translate(0, calc(${CHECKBOX_VERTICAL_OFFSET_CALC}))`,
  },

  "::after": {
    cursor: `pointer`,
    backgroundColor: `currentColor`,
    borderRadius: theme.radii[5],
    content: `""`,
    display: `block`,
    height: DOT_SIZE,
    width: DOT_SIZE,
    position: `absolute`,
    top: `calc((100% - ${DOT_SIZE}) / 2)`,
    left: `calc((${RADIO_BOX_SIZE} - ${DOT_SIZE}) / 2)`,
  },
})
