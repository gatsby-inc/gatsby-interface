/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { Link as GatsbyLink, GatsbyLinkProps } from "gatsby"
import { Theme } from "../../theme"
import {
  baseCss,
  activeCss,
  linkCss,
  stepNumberCss,
  stepNumberActiveCss,
  stepNumberDoneCss,
  labelCss,
  labelActiveCss,
} from "./StepIndicatorStep.styles"

export type StepIndicatorStepStatus = `DEFAULT` | `ACTIVE` | `DONE`

export type StepIndicatorStepProps = {
  children?: React.ReactNode
  to?: string
  status?: StepIndicatorStepStatus
  onClick?: GatsbyLinkProps<any>["onClick"]
}

export function StepIndicatorStep({
  children,
  to,
  status = `DEFAULT`,
  onClick,
}: StepIndicatorStepProps) {
  const label = (
    <React.Fragment>
      <span
        css={(theme: Theme) => [
          stepNumberCss(theme),
          status === `ACTIVE` && stepNumberActiveCss(theme),
          status === `DONE` && stepNumberDoneCss(theme),
        ]}
      />
      <span
        css={(theme: Theme) => [
          labelCss(theme),
          status === `ACTIVE` && labelActiveCss(theme),
        ]}
      >
        {children}
      </span>
    </React.Fragment>
  )

  return (
    <li
      css={(theme: Theme) => [
        baseCss(theme),
        status === `ACTIVE` && activeCss(theme),
      ]}
    >
      {to ? (
        <GatsbyLink to={to} onClick={onClick} css={linkCss}>
          {label}
        </GatsbyLink>
      ) : (
        label
      )}
    </li>
  )
}
