/** @jsx jsx */
import { jsx } from "@emotion/core"
import { storiesOf } from "@storybook/react"
import colors from "../../theme/colors"
import { StoryUtils } from "../../utils/storybook"
import { PricingCard } from "./"
import freePlanPic from "./assets/freePlan.svg"
import professionalPlanPic from "./assets/professionalPlan.svg"
import businessPlanPic from "./assets/businessPlan.svg"
import enterprisePlanPic from "./assets/enterprisePlan.svg"

const plansA = [
  {
    name: `Free`,
    icon: freePlanPic,
    color: colors.green[50],
    intro: `For personal projects and single-purpose sites`,
    price: {
      MONTHLY: 0,
      YEARLY: 0,
    },
    details: [
      { text: `Builds and Preview` },
      { text: `10 real-time edits/day` },
      { text: `nline documentation` },
    ],
    cta: {
      to: `/`,
      label: `Subscribe`,
    },
  },
]

const plansB = [
  {
    name: `Enterprise`,
    icon: enterprisePlanPic,
    color: colors.purple[50],
    intro: `Custom packages designed for your company`,
    details: [
      { text: `Builds and Preview` },
      { text: `1000 real-time edits/day` },
      { text: `Online documentation` },
      { text: `Dedicated account manager` },
    ],
    cta: {
      to: `/`,
      label: `Contact sales`,
    },
  },
]

const plansC = [
  {
    name: `Free`,
    icon: freePlanPic,
    color: colors.orange[70],
    intro: `For personal projects and single-purpose sites`,
    price: {
      MONTHLY: 0,
      YEARLY: 0,
    },
    details: [
      { text: `Builds and Preview` },
      {
        text: `10 real-time edits/day`,
        tip: `<p>Definition of real time edit</p>`,
      },
      { text: `Online documentation` },
    ],
  },
  {
    name: `Professional`,
    icon: professionalPlanPic,
    color: colors.blue[70],
    intro: `For personal projects and single-purpose sites`,
    price: {
      MONTHLY: 42,
      YEARLY: 0,
    },
    details: [
      { text: `Builds and Preview` },
      {
        text: `100 real-time edits/day`,
        tip: `<p>Definition of real time edit</p>`,
      },
      { text: `Online documentation` },
    ],
  },
  {
    name: `Bussines`,
    icon: businessPlanPic,
    color: colors.purple[60],
    intro: `For personal projects and single-purpose sites`,
    price: {
      MONTHLY: 722,
      YEARLY: 0,
    },
    details: [
      { text: `Builds and Preview` },
      {
        text: `<p>1000 real-time edits/day</p>`,
        tip: `<p>Definition of real time edit</p>`,
      },
      { text: `Online documentation` },
    ],
  },
]

const plansD = [
  {
    name: `Free`,
    icon: freePlanPic,
    color: colors.orange[70],
    intro: `For personal projects and single-purpose sites`,
    price: {
      MONTHLY: 0,
      YEARLY: 0,
    },
    details: [
      { text: `Builds and Preview` },
      {
        text: `10 real-time edits/day`,
        tip: `<p>Definition of real time edit</p>`,
      },
      { text: `Online documentation` },
    ],
    cta: {
      to: `/`,
      label: `Pick`,
    },
  },
  {
    name: `Professional`,
    icon: professionalPlanPic,
    color: colors.blue[70],
    intro: `For personal projects and single-purpose sites`,
    price: {
      MONTHLY: 42,
      YEARLY: 0,
    },
    details: [
      { text: `Builds and Preview` },
      {
        text: `100 real-time edits/day`,
        tip: `<p>Definition of real time edit</p>`,
      },
      { text: `Online documentation` },
    ],
    cta: {
      to: `/`,
      label: `Pick`,
    },
  },
]

storiesOf(`PricingCard`, module)
  .addParameters({
    options: {
      showPanel: true,
    },
    a11y: {
      disable: true,
    },
  })
  .add(`variants`, () => (
    <div
      css={{
        width: `660px`,
        maxWidth: `94%`,
        margin: `0 auto`,
      }}
    >
      <StoryUtils.Container>
        <div
          css={{
            display: `grid`,
            gridGap: `2rem`,
            gridTemplateColumns: `1fr 1fr`,
          }}
        >
          <PricingCard plans={plansA} />
          <PricingCard plans={plansA} selectedPlan="Free" />
          <PricingCard plans={plansB} variant={`SECONDARY`} />
          <PricingCard
            plans={plansB}
            variant={`SECONDARY`}
            selectedPlan="Enterprise"
          />
        </div>
      </StoryUtils.Container>
    </div>
  ))
  .add(`multiplan card`, () => (
    <div
      css={{
        width: `880px`,
        maxWidth: `94%`,
        margin: `0 auto`,
      }}
    >
      <StoryUtils.Container>
        <PricingCard
          plans={plansC}
          cta={{
            to: `/`,
            label: `Get started for free`,
            comment: `No commitment, no credit card required. All you need is a Github account.`,
          }}
        />
      </StoryUtils.Container>
    </div>
  ))
  .add(`individual multiplan card`, () => (
    <div
      css={{
        width: `880px`,
        maxWidth: `94%`,
        margin: `0 auto`,
      }}
    >
      <StoryUtils.Container>
        <PricingCard selectedPlan="Professional" plans={plansD} />
      </StoryUtils.Container>
    </div>
  ))
