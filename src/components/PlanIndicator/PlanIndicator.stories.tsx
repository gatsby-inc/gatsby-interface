/** @jsx jsx */
import { jsx } from "@emotion/core"
import { withVariationsContainer } from "../../utils/storybook"
import { PlanIndicator } from "."
import { PlanIndicatorPlanType, PlanIndicatorProps } from "./PlanIndicator"
import { Meta, Story } from "@storybook/react"
import { Spacer } from "../Spacer"

export default {
  title: `PlanIndicator`,
  component: PlanIndicator,
} as Meta

const Template: Story<PlanIndicatorProps> = args => <PlanIndicator {...args} />

export const Basic = Template.bind({})

Basic.args = {
  planType: `FREE`,
  "aria-label": `Free plan`,
  children: `Free`,
}

// export const Basic = () => <PlanIndicator planType="FREE" aria-label="Free plan">Free</PlanIndicator>

const PLAN_TYPES: PlanIndicatorPlanType[] = [
  `FREE`,
  `PROFESSIONAL`,
  `BUSINESS`,
  `ENTERPRISE`,
  `TEAM`,
  `INDIVIDUAL`,
]

export const PlanTypes = () =>
  PLAN_TYPES.map(planType => {
    const planName = `${planType.substr(0, 1).toUpperCase()}${planType
      .substr(1)
      .toLowerCase()}`
    return (
      <div key={planType} css={{ display: `flex`, alignItems: `center` }}>
        <PlanIndicator planType={planType} aria-label={planName}>
          {planName}
        </PlanIndicator>
        <Spacer size={5} direction="horizontal" />
        <PlanIndicator
          planType={planType}
          aria-label={`${planName} trial`}
          isTrialling
        >
          {planName} trial
        </PlanIndicator>
      </div>
    )
  })

PlanTypes.story = {
  decorators: [withVariationsContainer],
}
