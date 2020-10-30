/** @jsx jsx */
import { jsx } from "@emotion/core"
import { ThemeCss } from "../../theme"
import { Badge, BadgeProps } from "../Badge"
import {
  FreePlanIcon,
  ProfessionalPlanIcon,
  BusinessPlanIcon,
  EnterprisePlanIcon,
  IndividualPlanIcon,
  TeamPlanIcon,
} from "../icons"
const baseCss: ThemeCss = _theme => ({
  fontWeight: 500,
})

const planTypeFreeCss: ThemeCss = theme => ({
  borderColor: theme.colors.blue[10],
  backgroundColor: theme.colors.blue[10],
  color: theme.colors.blue[80],
})

const planTypeIndividualCss: ThemeCss = theme => ({
  borderColor: theme.colors.orange[10],
  backgroundColor: theme.colors.orange[10],
  color: theme.colors.red[70],
})

const planTypeTeamCss: ThemeCss = theme => ({
  borderColor: theme.colors.magenta[10],
  backgroundColor: theme.colors.magenta[10],
  color: theme.colors.magenta[70],
})

const planTypeEnterpriseCss: ThemeCss = theme => ({
  borderColor: theme.colors.purple[80],
  backgroundColor: theme.colors.purple[80],
  color: theme.colors.white,
})

const planTypeProfessionalCss: ThemeCss = theme => ({
  borderColor: theme.colors.blue[10],
  backgroundColor: theme.colors.blue[10],
  color: theme.colors.blue[90],
})

const planTypeBusinessCss: ThemeCss = theme => ({
  borderColor: theme.colors.purple[10],
  backgroundColor: theme.colors.purple[10],
  color: theme.colors.purple[70],
})

const trialingCss: ThemeCss = theme => ({
  borderColor: theme.colors.green[10],
  backgroundColor: theme.colors.green[10],
  color: theme.colors.green[90],
})

const planTypeCss: Record<PlanIndicatorPlanType, ThemeCss> = {
  FREE: planTypeFreeCss,
  INDIVIDUAL: planTypeIndividualCss,
  TEAM: planTypeTeamCss,
  ENTERPRISE: planTypeEnterpriseCss,
  PROFESSIONAL: planTypeProfessionalCss,
  BUSINESS: planTypeBusinessCss,
}

const planTypeIcons: Record<PlanIndicatorPlanType, BadgeProps["Icon"]> = {
  FREE: FreePlanIcon,
  INDIVIDUAL: IndividualPlanIcon,
  TEAM: TeamPlanIcon,
  ENTERPRISE: EnterprisePlanIcon,
  PROFESSIONAL: ProfessionalPlanIcon,
  BUSINESS: BusinessPlanIcon,
}

export type PlanIndicatorPlanType =
  | `FREE`
  | `INDIVIDUAL`
  | `TEAM`
  | `ENTERPRISE`
  // backwards compatibility for older plans
  | `PROFESSIONAL`
  | `BUSINESS`

export type PlanIndicatorProps = {
  planType: PlanIndicatorPlanType
  isTrialling?: boolean
  children: React.ReactNode
  "aria-label": string
}

export function PlanIndicator({
  planType,
  isTrialling = false,
  children,
  "aria-label": ariaLabel,
}: PlanIndicatorProps) {
  const Icon = planTypeIcons[planType]

  return (
    <Badge
      size="M"
      textVariant="DEFAULT"
      Icon={isTrialling ? undefined : Icon}
      aria-label={ariaLabel}
      css={theme => [
        baseCss(theme),
        isTrialling ? trialingCss(theme) : planTypeCss[planType](theme),
      ]}
    >
      {children}
    </Badge>
  )
}
