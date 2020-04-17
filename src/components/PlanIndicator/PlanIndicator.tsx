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

const baseCss: ThemeCss = theme => ({
  fontWeight: theme.fontWeights.semiBold,
})

const planTypeFreeCss: ThemeCss = theme => ({
  backgroundColor: theme.colors.orange[10],
  color: theme.colors.orange[90],
})

const planTypeProfessionalCss: ThemeCss = theme => ({
  backgroundColor: theme.colors.blue[10],
  color: theme.colors.blue[90],
})

const planTypeBusinessCss: ThemeCss = theme => ({
  backgroundColor: theme.colors.purple[10],
  color: theme.colors.purple[70],
})

const planTypeEnterpriseCss: ThemeCss = theme => ({
  backgroundColor: theme.colors.purple[90],
  color: theme.colors.white,
})

const planTypeCss: Record<PlanIndicatorPlanType, ThemeCss> = {
  FREE: planTypeFreeCss,
  PROFESSIONAL: planTypeProfessionalCss,
  BUSINESS: planTypeBusinessCss,
  ENTERPRISE: planTypeEnterpriseCss,
}

const planTypeLabels: Record<PlanIndicatorPlanType, string> = {
  FREE: `Free`,
  PROFESSIONAL: `Professional`,
  BUSINESS: `Business`,
  ENTERPRISE: `Enterprise`,
}

const planTypeIcons: Record<PlanIndicatorPlanType, React.ComponentType> = {
  FREE: FreePlanIcon,
  PROFESSIONAL: ProfessionalPlanIcon,
  BUSINESS: BusinessPlanIcon,
  ENTERPRISE: EnterprisePlanIcon,
}

export type PlanIndicatorPlanType =
  | `FREE`
  | `PROFESSIONAL`
  | `BUSINESS`
  | `ENTERPRISE`

export type PlanIndicatorProps = {
  planType: PlanIndicatorPlanType
}

export function PlanIndicator({ planType }: PlanIndicatorProps) {
  const label = planTypeLabels[planType]
  const Icon = planTypeIcons[planType]

  return (
    <Badge
      size="MEDIUM"
      textVariant="DEFAULT"
      Icon={Icon}
      aria-label={`Plan: ${label}`}
      css={theme => [baseCss(theme), planTypeCss[planType](theme)]}
    >
      {label}
    </Badge>
  )
}
