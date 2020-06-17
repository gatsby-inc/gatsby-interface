/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { text, radios, select } from "@storybook/addon-knobs"
import { DecoratorFn } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import {
  radioKnobOptions,
  withVariationsContainer,
} from "../../utils/storybook"
import {
  EmptyState,
  EmptyStateVariant,
  EmptyStatePrimaryAction,
  EmptyStateSecondaryAction,
} from "."
import { MdLockOpen } from "react-icons/md"

export default {
  title: `EmptyState`,
  component: EmptyState,
  subcomponents: {
    EmptyStatePrimaryAction,
    EmptyStateSecondaryAction,
  },
  decorators: [withDesign] as DecoratorFn[],
  parameters: {
    componentSubtitle:
      "Empty states are an important opportunity to avoid user confusion and disappointment, and to let them know what to do next when they use a product or feature for the first time, or have cleared all content.",
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/qfzaQ4vULNNpO2du4zZPr7/Empty-states?node-id=0%3A1",
    },
  },
}

export const Basic = () => (
  <EmptyState
    heading="Upgrade your plan to build more branches"
    text="The Free plan only allows one branch to be built. Please consider upgrading your plan to build more branches."
    primaryAction={
      <EmptyStatePrimaryAction>Upgrade plan</EmptyStatePrimaryAction>
    }
    secondaryAction={
      <EmptyStateSecondaryAction href="https://www.github.com" target="_blank">
        View production branch
      </EmptyStateSecondaryAction>
    }
  />
)

const VARIANTS: EmptyStateVariant[] = [`DEFAULT`, `BORDERED`, `WITH_BACKGROUND`]

export const Sandbox = () => {
  const primaryActionLabel = text(`Primary action label`, ``)
  const secondaryActionLabel = text(`Secondary action label`, ``)
  const graphicType = radios(
    "graphic",
    { Icon: "icon", Image: "image", None: "none" },
    `none`
  )
  let graphic = null
  if (graphicType === `image`) {
    graphic = <GraphicImage />
  } else if (graphicType === `icon`) {
    graphic = <MdLockOpen />
  }

  return (
    <EmptyState
      heading={text("heading", "Upgrade your plan to build more branches")}
      text={text(
        "text",
        "The Free plan only allows one branch to be built. Please consider upgrading your plan to build more branches."
      )}
      variant={radios(
        `variant`,
        radioKnobOptions<EmptyStateVariant>(VARIANTS),
        `DEFAULT`
      )}
      graphic={graphic}
      primaryAction={
        primaryActionLabel ? (
          <EmptyStatePrimaryAction>
            {primaryActionLabel}
          </EmptyStatePrimaryAction>
        ) : null
      }
      secondaryAction={
        secondaryActionLabel ? (
          <EmptyStateSecondaryAction href="https://www.github.com">
            {secondaryActionLabel}
          </EmptyStateSecondaryAction>
        ) : null
      }
      headingAs={select(
        "headingAs",
        ["h1", "h2", "h3", "h4", "h5", "h6", "span"],
        "h3"
      )}
    />
  )
}

Sandbox.story = {
  parameters: {
    chromatic: { disable: true },
  },
}

export const Variants = () =>
  VARIANTS.map(variant => (
    <EmptyState
      key={variant}
      heading={`Variant: ${variant}`}
      text="The Free plan only allows one branch to be built. Please consider upgrading your plan to build more branches."
      variant={variant}
    />
  ))

Variants.story = {
  decorators: [withVariationsContainer],
}

export const WithGraphic = () => (
  <React.Fragment>
    <EmptyState
      heading="Image/SVG/Component graphic"
      text="The Free plan only allows one branch to be built. Please consider upgrading your plan to build more branches."
      graphic={<GraphicImage />}
      primaryAction={
        <EmptyStatePrimaryAction>Upgrade plan</EmptyStatePrimaryAction>
      }
      secondaryAction={
        <EmptyStateSecondaryAction
          href="https://www.github.com"
          target="_blank"
        >
          View production branch
        </EmptyStateSecondaryAction>
      }
    />
    <EmptyState
      heading="Icon graphic"
      text="The Free plan only allows one branch to be built. Please consider upgrading your plan to build more branches."
      graphic={<MdLockOpen />}
      primaryAction={
        <EmptyStatePrimaryAction>Upgrade plan</EmptyStatePrimaryAction>
      }
      secondaryAction={
        <EmptyStateSecondaryAction
          href="https://www.github.com"
          target="_blank"
        >
          View production branch
        </EmptyStateSecondaryAction>
      }
    />
  </React.Fragment>
)

WithGraphic.story = {
  decorators: [withVariationsContainer],
}

function GraphicImage() {
  return (
    <svg
      width="105"
      height="114"
      viewBox="0 0 105 114"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="52.8028" cy="52" r="52" fill="#F7FDF7" />
      <g clipPath="url(#clip0)">
        <path
          d="M27.1583 20.5544H70.9805V23.1322H27.1583V20.5544Z"
          fill="#F1DEFA"
        />
        <path
          d="M27.1583 70.8211V20.5544H70.9805L78.7139 28.2878V70.8211"
          fill="white"
        />
        <path
          d="M27.1583 70.8211V20.5544H70.9805L78.7139 28.2878V70.8211"
          stroke="#8954A8"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M70.9805 20.5544C70.9805 20.5544 70.9805 23.1322 70.9805 25.71C70.9805 28.2878 73.5583 28.2878 73.5583 28.2878H78.7139"
          stroke="#8954A8"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.425 66.9544H15.5583C15.5583 66.9544 12.9805 66.9544 12.9805 64.3766C12.9805 61.7989 12.9805 59.2211 12.9805 59.2211C12.9805 59.2211 12.9805 56.6433 15.5583 56.6433C18.1361 56.6433 19.425 56.6433 19.425 56.6433V66.9544Z"
          fill="#F7FFFF"
          stroke="#8954A8"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M86.4472 56.6433H90.3139C90.3139 56.6433 92.8916 56.6433 92.8916 59.2211C92.8916 61.7989 92.8916 64.3766 92.8916 64.3766C92.8916 64.3766 92.8916 66.9544 90.3139 66.9544C87.7361 66.9544 86.4472 66.9544 86.4472 66.9544V56.6433Z"
          fill="#F7FFFF"
          stroke="#8954A8"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.425 59.2211H15.5583"
          stroke="#8954A8"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="34.2472"
          y="25.71"
          width="23.2"
          height="2.57778"
          rx="1.28889"
          fill="#A1DA9E"
        />
        <rect
          opacity="0.25"
          x="34.2472"
          y="30.8655"
          width="33.5111"
          height="2.57778"
          rx="1.28889"
          fill="#FFDF37"
        />
        <rect
          opacity="0.25"
          x="34.2472"
          y="51.4877"
          width="33.5111"
          height="2.57778"
          rx="1.28889"
          fill="#FFB238"
        />
        <rect
          opacity="0.25"
          x="34.2472"
          y="56.6433"
          width="23.2"
          height="2.57778"
          rx="1.28889"
          fill="#BC027F"
        />
        <rect
          x="34.2472"
          y="61.7988"
          width="23.2"
          height="2.57778"
          rx="1.28889"
          fill="#F1DEFA"
        />
        <rect
          x="34.2472"
          y="66.9544"
          width="23.2"
          height="2.57778"
          rx="1.28889"
          fill="#F6EDFA"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M35.5432 61.7988C36.256 61.7988 36.8335 62.3757 36.8335 63.0877C36.8335 63.7997 36.256 64.3766 35.5432 64.3766C34.8304 64.3766 34.2529 63.7997 34.2529 63.0877C34.2529 62.3757 34.8304 61.7988 35.5432 61.7988Z"
          fill="#EC1818"
        />
        <path
          d="M19.425 61.7988H15.5583"
          stroke="#8954A8"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.425 64.3766H15.5583"
          stroke="#8954A8"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M90.3139 59.2211H86.4472"
          stroke="#8954A8"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M90.3139 61.7988H86.4472"
          stroke="#8954A8"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M90.3139 64.3766H86.4472"
          stroke="#8954A8"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M33.9993 51.4877C33.9993 63.0363 43.3697 69.256 53.8178 69.256C64.2659 69.256 72.2694 61.6609 72.2694 51.4877C78.7564 51.4877 84.5486 51.4877 85.1583 51.4877C87.6423 51.4877 87.7361 54.0655 87.7361 54.0655C87.7361 54.0655 87.7361 62.5461 87.7361 74.688H18.1361C18.1361 63.0697 18.1361 54.0655 18.1361 54.0655C18.1361 54.0655 18.1361 51.4877 20.7139 51.4877C21.3449 51.4877 27.1323 51.4877 33.6028 51.4877"
          fill="white"
        />
        <path
          d="M33.9993 51.4877C33.9993 63.0363 43.3697 69.256 53.8178 69.256C64.2659 69.256 72.2694 61.6609 72.2694 51.4877C78.7564 51.4877 84.5486 51.4877 85.1583 51.4877C87.6423 51.4877 87.7361 54.0655 87.7361 54.0655C87.7361 54.0655 87.7361 62.5461 87.7361 74.688H18.1361C18.1361 63.0697 18.1361 54.0655 18.1361 54.0655C18.1361 54.0655 18.1361 51.4877 20.7139 51.4877C21.3449 51.4877 27.1323 51.4877 33.6028 51.4877"
          stroke="#8954A8"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <path
          d="M87.7361 74.6877C87.7361 88.4334 87.7361 102.279 87.7361 104.332C87.7361 113.354 80.0028 113.354 80.0028 113.354H27.1583C27.1583 113.354 18.1361 113.354 18.1361 104.332C18.1361 102.848 18.1361 89.0451 18.1361 74.688L87.7361 74.6877Z"
          stroke="#8954A8"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25.8694 84.9988C27.2931 84.9988 28.4472 83.8447 28.4472 82.421C28.4472 80.9974 27.2931 79.8433 25.8694 79.8433C24.4458 79.8433 23.2917 80.9974 23.2917 82.421C23.2917 83.8447 24.4458 84.9988 25.8694 84.9988Z"
          fill="white"
          stroke="#3FA9F5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M33.6028 84.9988C35.0264 84.9988 36.1805 83.8447 36.1805 82.421C36.1805 80.9974 35.0264 79.8433 33.6028 79.8433C32.1791 79.8433 31.025 80.9974 31.025 82.421C31.025 83.8447 32.1791 84.9988 33.6028 84.9988Z"
          fill="white"
          stroke="#8954A8"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M41.3361 84.9988C42.7598 84.9988 43.9139 83.8447 43.9139 82.421C43.9139 80.9974 42.7598 79.8433 41.3361 79.8433C39.9124 79.8433 38.7583 80.9974 38.7583 82.421C38.7583 83.8447 39.9124 84.9988 41.3361 84.9988Z"
          fill="white"
          stroke="#8954A8"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M38.7583 108.199C37.3347 108.199 36.1805 107.045 36.1805 105.621C36.1805 104.197 37.3347 103.043 38.7583 103.043H67.1141C68.5377 103.043 69.6917 104.198 69.6917 105.621C69.6917 107.045 68.5375 108.199 67.1139 108.199H38.7583Z"
          fill="white"
          stroke="#8954A8"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M49.0694 84.9988C50.4931 84.9988 51.6472 83.8447 51.6472 82.421C51.6472 80.9974 50.4931 79.8433 49.0694 79.8433C47.6458 79.8433 46.4917 80.9974 46.4917 82.421C46.4917 83.8447 47.6458 84.9988 49.0694 84.9988Z"
          fill="#FFDF37"
          stroke="#FFDF37"
          strokeWidth="0.644444"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M56.8028 84.9988C58.2264 84.9988 59.3805 83.8447 59.3805 82.421C59.3805 80.9974 58.2264 79.8433 56.8028 79.8433C55.3791 79.8433 54.225 80.9974 54.225 82.421C54.225 83.8447 55.3791 84.9988 56.8028 84.9988Z"
          fill="white"
          stroke="#8954A8"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M64.5361 84.9988C65.9598 84.9988 67.1139 83.8447 67.1139 82.421C67.1139 80.9974 65.9598 79.8433 64.5361 79.8433C63.1124 79.8433 61.9583 80.9974 61.9583 82.421C61.9583 83.8447 63.1124 84.9988 64.5361 84.9988Z"
          fill="white"
          stroke="#8954A8"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M72.2694 84.9988C73.6931 84.9988 74.8472 83.8447 74.8472 82.421C74.8472 80.9974 73.6931 79.8433 72.2694 79.8433C70.8458 79.8433 69.6917 80.9974 69.6917 82.421C69.6917 83.8447 70.8458 84.9988 72.2694 84.9988Z"
          fill="white"
          stroke="#BC027F"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M80.0028 84.9988C81.4264 84.9988 82.5805 83.8447 82.5805 82.421C82.5805 80.9974 81.4264 79.8433 80.0028 79.8433C78.5791 79.8433 77.425 80.9974 77.425 82.421C77.425 83.8447 78.5791 84.9988 80.0028 84.9988Z"
          fill="white"
          stroke="#8954A8"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M29.7361 92.7322C31.1598 92.7322 32.3139 91.5781 32.3139 90.1544C32.3139 88.7308 31.1598 87.5767 29.7361 87.5767C28.3124 87.5767 27.1583 88.7308 27.1583 90.1544C27.1583 91.5781 28.3124 92.7322 29.7361 92.7322Z"
          fill="white"
          stroke="#8954A8"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M37.4694 92.7322C38.8931 92.7322 40.0472 91.5781 40.0472 90.1544C40.0472 88.7308 38.8931 87.5767 37.4694 87.5767C36.0458 87.5767 34.8917 88.7308 34.8917 90.1544C34.8917 91.5781 36.0458 92.7322 37.4694 92.7322Z"
          fill="#FFB238"
          stroke="#FFB238"
          strokeWidth="0.644444"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M45.2028 92.7322C46.6264 92.7322 47.7805 91.5781 47.7805 90.1544C47.7805 88.7308 46.6264 87.5767 45.2028 87.5767C43.7791 87.5767 42.625 88.7308 42.625 90.1544C42.625 91.5781 43.7791 92.7322 45.2028 92.7322Z"
          fill="#BC027F"
          stroke="#BC027F"
          strokeWidth="0.644444"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M52.9361 92.7322C54.3598 92.7322 55.5139 91.5781 55.5139 90.1544C55.5139 88.7308 54.3598 87.5767 52.9361 87.5767C51.5124 87.5767 50.3583 88.7308 50.3583 90.1544C50.3583 91.5781 51.5124 92.7322 52.9361 92.7322Z"
          fill="white"
          stroke="#8954A8"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M60.6694 92.7322C62.0931 92.7322 63.2472 91.5781 63.2472 90.1544C63.2472 88.7308 62.0931 87.5767 60.6694 87.5767C59.2458 87.5767 58.0917 88.7308 58.0917 90.1544C58.0917 91.5781 59.2458 92.7322 60.6694 92.7322Z"
          fill="#73FFF7"
          stroke="#73FFF7"
          strokeWidth="0.644444"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M68.4028 92.7322C69.8264 92.7322 70.9805 91.5781 70.9805 90.1544C70.9805 88.7308 69.8264 87.5767 68.4028 87.5767C66.9791 87.5767 65.825 88.7308 65.825 90.1544C65.825 91.5781 66.9791 92.7322 68.4028 92.7322Z"
          fill="white"
          stroke="#8954A8"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M76.1361 92.7322C77.5598 92.7322 78.7139 91.5781 78.7139 90.1544C78.7139 88.7308 77.5598 87.5767 76.1361 87.5767C74.7124 87.5767 73.5583 88.7308 73.5583 90.1544C73.5583 91.5781 74.7124 92.7322 76.1361 92.7322Z"
          fill="white"
          stroke="#37B635"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M33.6028 100.465C35.0264 100.465 36.1805 99.3114 36.1805 97.8877C36.1805 96.464 35.0264 95.3099 33.6028 95.3099C32.1791 95.3099 31.025 96.464 31.025 97.8877C31.025 99.3114 32.1791 100.465 33.6028 100.465Z"
          fill="white"
          stroke="#8954A8"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M41.3361 100.465C42.7598 100.465 43.9139 99.3114 43.9139 97.8877C43.9139 96.464 42.7598 95.3099 41.3361 95.3099C39.9124 95.3099 38.7583 96.464 38.7583 97.8877C38.7583 99.3114 39.9124 100.465 41.3361 100.465Z"
          fill="#37B635"
          stroke="#37B635"
          strokeWidth="0.644444"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M49.0694 100.465C50.4931 100.465 51.6472 99.3114 51.6472 97.8877C51.6472 96.464 50.4931 95.3099 49.0694 95.3099C47.6458 95.3099 46.4917 96.464 46.4917 97.8877C46.4917 99.3114 47.6458 100.465 49.0694 100.465Z"
          fill="white"
          stroke="#8954A8"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M56.8028 100.465C58.2264 100.465 59.3805 99.3114 59.3805 97.8877C59.3805 96.464 58.2264 95.3099 56.8028 95.3099C55.3791 95.3099 54.225 96.464 54.225 97.8877C54.225 99.3114 55.3791 100.465 56.8028 100.465Z"
          fill="white"
          stroke="#FFB238"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M64.5361 100.465C65.9598 100.465 67.1139 99.3114 67.1139 97.8877C67.1139 96.464 65.9598 95.3099 64.5361 95.3099C63.1124 95.3099 61.9583 96.464 61.9583 97.8877C61.9583 99.3114 63.1124 100.465 64.5361 100.465Z"
          fill="white"
          stroke="#8954A8"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M72.2694 100.465C73.6931 100.465 74.8472 99.3114 74.8472 97.8877C74.8472 96.464 73.6931 95.3099 72.2694 95.3099C70.8458 95.3099 69.6917 96.464 69.6917 97.8877C69.6917 99.3114 70.8458 100.465 72.2694 100.465Z"
          fill="#FFE6F6"
          stroke="#FFE6F6"
          strokeWidth="0.644444"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <path
        d="M38.1139 43.8222C38.1139 41.3308 40.1336 39.3111 42.625 39.3111C45.1164 39.3111 47.1361 41.3308 47.1361 43.8222"
        stroke="#8954A8"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M60.025 43.8222C60.025 41.3308 62.0447 39.3111 64.5361 39.3111C67.0275 39.3111 69.0472 41.3308 69.0472 43.8222"
        stroke="#8954A8"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <defs>
        <clipPath id="clip0">
          <rect
            width="82"
            height="94"
            fill="white"
            transform="translate(11.936 20)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
