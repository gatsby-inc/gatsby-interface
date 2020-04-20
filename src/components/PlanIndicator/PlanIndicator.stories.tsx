/** @jsx jsx */
import { jsx } from "@emotion/core"
import { radios } from "@storybook/addon-knobs"
import {
  radioKnobOptions,
  withVariationsContainer,
} from "../../utils/storybook"
import { PlanIndicator } from "."
import { PlanIndicatorPlanType } from "./PlanIndicator"

export default {
  title: `PlanIndicator`,
  component: PlanIndicator,
}

export const Basic = () => <PlanIndicator planType="FREE" />

const PLAN_TYPES: PlanIndicatorPlanType[] = [
  `FREE`,
  `PROFESSIONAL`,
  `BUSINESS`,
  `ENTERPRISE`,
]

export const Sandbox = () => (
  <PlanIndicator
    planType={radios(
      `planType`,
      radioKnobOptions<PlanIndicatorPlanType>(PLAN_TYPES),
      `FREE`
    )}
  />
)

Sandbox.story = {
  parameters: {
    chromatic: { disable: true },
  },
}

export const PlanTypes = () =>
  PLAN_TYPES.map(planType => (
    <PlanIndicator key={planType} planType={planType} />
  ))

PlanTypes.story = {
  decorators: [withVariationsContainer],
}
