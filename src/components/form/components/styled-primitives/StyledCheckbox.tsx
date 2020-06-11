/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { ThemeCss } from "../../../../theme"
import { baseFormControlStyles } from "../../styles"
import { StyledLabel, StyledLabelProps } from "./StyledFormElements"

export type StyledCheckboxProps = Omit<
  React.ComponentPropsWithRef<"input">,
  "type"
>

export const StyledCheckbox = React.forwardRef<
  HTMLInputElement,
  StyledCheckboxProps
>(function StyledCheckbox(props, ref) {
  return (
    <React.Fragment>
      <input ref={ref} css={styledCheckboxCss} {...props} type="checkbox" />
      <span aria-hidden="true" css={styledCheckboxBoxCss}>
        <Checkmark />
      </span>
    </React.Fragment>
  )
})

export type StyledCheckboxLabelProps = StyledLabelProps

export function StyledCheckboxLabel(props: StyledCheckboxLabelProps) {
  return <StyledLabel labelSize="L" css={{ marginBottom: 0 }} {...props} />
}

const CHECKBOX_BOX_SIZE = "20px"

const styledCheckboxCss: ThemeCss = theme => [
  {
    opacity: 0,
    cursor: `pointer`,
    width: CHECKBOX_BOX_SIZE,
    height: CHECKBOX_BOX_SIZE,
    flexShrink: 0,
    margin: 0,
    padding: 0,

    "&:focus + span::before": baseFormControlStyles.focusedStyles(theme),

    "&:checked + span": {
      color: theme.colors.white,
    },

    "&:checked + span::before": {
      backgroundColor: theme.colors.purple[60],
      borderColor: theme.colors.purple[60],
    },

    "&:checked:disabled + span": {
      color: theme.colors.grey[40],
    },

    "&:disabled": {
      cursor: `not-allowed`,
    },

    "&:disabled + span": {
      cursor: `not-allowed`,
    },

    "&:disabled + span::before": [
      baseFormControlStyles.disabledStyles(theme),
      {
        borderColor: theme.colors.grey[30],
      },
    ],

    "&[aria-invalid='true']": baseFormControlStyles.errorStyles(theme),
    "&[aria-invalid='true']:focus + span::before": baseFormControlStyles.focusedErrorStyles(
      theme
    ),
  },
]

const styledCheckboxBoxCss: ThemeCss = theme => ({
  cursor: `pointer`,
  position: `relative`,
  left: `-${CHECKBOX_BOX_SIZE}`,
  pointerEvents: `none`,
  color: `transparent`,

  ":before": {
    cursor: `pointer`,
    backgroundColor: theme.colors.white,
    border: `2px solid ${theme.colors.grey[30]}`,
    borderRadius: `3px`,
    content: `""`,
    display: `block`,
    height: CHECKBOX_BOX_SIZE,
    marginRight: theme.space[3],
    position: `absolute`,
    top: 0,
    left: 0,
    transition: `0.1s ease-in-out`,
    width: CHECKBOX_BOX_SIZE,
  },
})

function Checkmark() {
  return (
    <svg
      aria-hidden
      css={{
        pointerEvents: `none`,
        position: `absolute`,
        top: 0,
        left: 0,
        zIndex: 1,
      }}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.32505 15.1584L4.19049 10.8791C3.87533 10.423 3.95905 9.80199 4.38373 9.44564L4.38374 9.44564C4.80842 9.08929 5.43452 9.11468 5.82896 9.50424L9.49899 13.3343C10.0964 13.9243 10.0568 14.9003 9.41361 15.44L9.4136 15.44C8.7704 15.9797 7.80237 15.8492 7.32505 15.1584Z"
        fill="currentColor"
      />
      <path
        d="M7.58182 15.4296C6.92843 14.8813 6.86426 13.8988 7.44078 13.2703L14.7221 5.33129C15.0919 4.92814 15.7135 4.88754 16.1326 5.23917L16.1326 5.23917C16.5517 5.59081 16.6196 6.21003 16.2868 6.64418L9.73285 15.1935C9.21392 15.8704 8.23522 15.9779 7.58182 15.4296L7.58182 15.4296Z"
        fill="currentColor"
      />
      <path
        d="M7.747 11.5322C8.1138 11.9724 8.38279 12.2658 8.8474 11.7523C9.31202 11.2388 8.70068 13.0483 8.70068 13.0483L7.18457 12.5593L7.747 11.5322Z"
        fill="currentColor"
      />
    </svg>
  )
}
