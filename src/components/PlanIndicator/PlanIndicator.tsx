/** @jsx jsx */
import { jsx } from "@emotion/core"
import { ThemeCss } from "../../theme"
import { Badge } from "../Badge"
import {
  FreePlanIcon,
  ProfessionalPlanIcon,
  BusinessPlanIcon,
  EnterprisePlanIcon,
} from "../icons"

const baseCss: ThemeCss = _theme => ({
  fontWeight: 500,
})

const planTypeFreeCss: ThemeCss = theme => ({
  borderColor: theme.colors.orange[10],
  backgroundColor: theme.colors.orange[10],
  color: theme.colors.orange[90],
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

const planTypeEnterpriseCss: ThemeCss = theme => ({
  borderColor: theme.colors.purple[80],
  backgroundColor: theme.colors.purple[80],
  color: theme.colors.white,
})

const planTypeTrialingCss: ThemeCss = theme => ({
  borderColor: theme.colors.green[10],
  backgroundColor: theme.colors.green[10],
  color: theme.colors.green[70],
})

const planTypeCss: Record<PlanIndicatorPlanType, ThemeCss> = {
  FREE: planTypeFreeCss,
  PROFESSIONAL: planTypeProfessionalCss,
  BUSINESS: planTypeBusinessCss,
  ENTERPRISE: planTypeEnterpriseCss,
  TRIALING: planTypeTrialingCss,
}

const planTypeLabels: Record<PlanIndicatorPlanType, string> = {
  FREE: `Free`,
  PROFESSIONAL: `Professional`,
  BUSINESS: `Business`,
  ENTERPRISE: `Enterprise`,
  TRIALING: "Professional Trial",
}

const planTypeIcons: Record<
  PlanIndicatorPlanType,
  React.ComponentType | null
> = {
  FREE: FreePlanIcon,
  PROFESSIONAL: ProfessionalPlanIcon,
  BUSINESS: BusinessPlanIcon,
  ENTERPRISE: EnterprisePlanIcon,
  TRIALING: null,
}

export type PlanIndicatorPlanType =
  | `FREE`
  | `PROFESSIONAL`
  | `BUSINESS`
  | `ENTERPRISE`
  | `TRIALING`

export type PlanIndicatorProps = {
  planType: PlanIndicatorPlanType
}

export function PlanIndicator({ planType }: PlanIndicatorProps) {
  const label = planTypeLabels[planType]
  const Icon = planTypeIcons[planType]

  return (
    <Badge
      size="M"
      textVariant="DEFAULT"
      Icon={Icon}
      aria-label={`Plan: ${label}`}
      css={theme => [baseCss(theme), planTypeCss[planType](theme)]}
    >
      {label}
    </Badge>
  )
}
