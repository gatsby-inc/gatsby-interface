/** @jsx jsx */
/* eslint-disable react/no-unescaped-entities */
import { jsx } from "@emotion/core"
import React from "react"

import { action } from "@storybook/addon-actions"
import { MdArrowForward } from "react-icons/md"
import { radios } from "@storybook/addon-knobs"

import { StoryUtils } from "../../../../utils/storybook"
import colors from "../../../../theme/colors"
import { Story } from "@storybook/react"
import { ButtonSize, ButtonTone, ButtonVariant } from "../Button"

function enumToOptions<T extends string>(
  memo: { [k: string]: string },
  value: T
) {
  return { ...memo, [value]: value }
}

const BUTTON_SIZES: ButtonSize[] = [`S`, `M`, `L`, `XL`]
const BUTTON_SIZE_OPTIONS = BUTTON_SIZES.reduce(enumToOptions, {})

const BUTTON_TONES: ButtonTone[] = [`BRAND`, `NEUTRAL`, `SUCCESS`, `DANGER`]
const BUTTON_TONE_OPTIONS = BUTTON_TONES.reduce(enumToOptions, {})

const BUTTON_VARIANTS: ButtonVariant[] = [`PRIMARY`, `SECONDARY`, `GHOST`]
const BUTTON_VARIANT_OPTIONS = BUTTON_VARIANTS.reduce(enumToOptions, {})

export function showcaseVariants<P>(
  Component: React.ComponentType<P>,
  defaultProps: P
): Parameters<Story["add"]> {
  return [
    `variants`,
    () => {
      const size: ButtonSize = radios(`size`, BUTTON_SIZE_OPTIONS, `L`)
      const tone: ButtonTone = radios(`tone`, BUTTON_TONE_OPTIONS, `BRAND`)

      const renderCase = (variant: ButtonVariant) => (
        <Component
          onClick={action(`Button was clicked`)}
          {...defaultProps}
          variant={variant}
          tone={tone}
          size={size}
          ref={undefined}
        >
          variant&nbsp;<React.Fragment>'{variant}'</React.Fragment>
        </Component>
      )

      return (
        <StoryUtils.Container>
          <StoryUtils.Stack>{BUTTON_VARIANTS.map(renderCase)}</StoryUtils.Stack>
        </StoryUtils.Container>
      )
    },
  ]
}

export function showcaseSizes<P>(
  Component: React.ComponentType<P>,
  defaultProps: P
): Parameters<Story["add"]> {
  return [
    `sizes`,
    () => {
      const variant: ButtonVariant = radios(
        `variant`,
        BUTTON_VARIANT_OPTIONS,
        `PRIMARY`
      )
      const tone: ButtonTone = radios(`tone`, BUTTON_TONE_OPTIONS, `BRAND`)

      const renderCase = (size: ButtonSize) => (
        <Component
          onClick={action(`Button was clicked`)}
          {...defaultProps}
          variant={variant}
          tone={tone}
          size={size}
          ref={undefined}
        >
          variant&nbsp;<React.Fragment>'{variant}'</React.Fragment>
        </Component>
      )

      return (
        <StoryUtils.Container>
          <StoryUtils.Stack>{BUTTON_SIZES.map(renderCase)}</StoryUtils.Stack>
        </StoryUtils.Container>
      )
    },
  ]
}

export function showcaseTones<P>(
  Component: React.ComponentType<P>,
  defaultProps: P
): Parameters<Story["add"]> {
  return [
    `tones`,
    () => {
      const variant: ButtonVariant = radios(
        `variant`,
        BUTTON_VARIANT_OPTIONS,
        `PRIMARY`
      )
      const size: ButtonSize = radios(`size`, BUTTON_SIZE_OPTIONS, `L`)

      const renderCase = (tone: ButtonTone) => (
        <Component
          onClick={action(`Button was clicked`)}
          {...defaultProps}
          variant={variant}
          tone={tone}
          size={size}
          ref={undefined}
        >
          variant&nbsp;<React.Fragment>'{variant}'</React.Fragment>
        </Component>
      )

      return (
        <StoryUtils.Container>
          <StoryUtils.Stack>{BUTTON_TONES.map(renderCase)}</StoryUtils.Stack>
        </StoryUtils.Container>
      )
    },
  ]
}

export function showcaseCustomStyles<P>(
  Component: React.ComponentType<P>,
  defaultProps: P,
  readme?: string
): Parameters<Story["add"]> {
  return [
    `override/extend styles`,
    () => (
      <StoryUtils.Container>
        <StoryUtils.Stack>
          <Component
            {...defaultProps}
            onClick={action(`Button was clicked`)}
            css={{
              color: colors.purple[60],
              background: colors.yellow[60],
              borderColor: colors.yellow[60],

              "&:hover:not([disabled])": {
                color: colors.white,
              },
            }}
          >
            Button with custom style
          </Component>
        </StoryUtils.Stack>
      </StoryUtils.Container>
    ),
    readme
      ? {
          readme: {
            sidebar: readme,
          },
        }
      : undefined,
  ]
}

export function showcaseIcons<P>(
  Component: React.ComponentType<P>,
  defaultProps: P,
  readme?: string
): Parameters<Story["add"]> {
  return [
    `with icons`,
    () => (
      <StoryUtils.Container>
        <StoryUtils.Stack>
          <Component
            {...defaultProps}
            onClick={action(`Button was clicked`)}
            rightIcon={<MdArrowForward />}
          >
            On the right
          </Component>
          <Component
            {...defaultProps}
            onClick={action(`Button was clicked`)}
            leftIcon={<MdArrowForward />}
          >
            On the left
          </Component>
        </StoryUtils.Stack>
      </StoryUtils.Container>
    ),
    readme
      ? {
          readme: {
            sidebar: readme,
          },
        }
      : undefined,
  ]
}
