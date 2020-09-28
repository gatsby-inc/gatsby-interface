/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"

import { action } from "@storybook/addon-actions"
import { MdArrowForward } from "react-icons/md"
import { radios } from "@storybook/addon-knobs"

import { StoryUtils } from "../../../utils/storybook"
import { StoryApi } from "@storybook/addons"
import {
  ButtonSize,
  ButtonTone,
  ButtonVariant,
  ButtonTextVariant,
} from "../../../theme/styles/button"
import { StoryFnReactReturnType } from "@storybook/react/dist/client/preview/types"

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

const BUTTON_TEXT_VARIANTS: ButtonTextVariant[] = [`DEFAULT`, `BRAND`]
const BUTTON_TEXT_VARIANT_OPTIONS = BUTTON_TEXT_VARIANTS.reduce(
  enumToOptions,
  {}
)

type ShowcaseReturn = Parameters<StoryApi<StoryFnReactReturnType>["add"]>

export function showcaseVariants<P>(
  Component: React.ComponentType<P>,
  defaultProps: P
): ShowcaseReturn {
  return [
    `variants`,
    () => {
      const size: ButtonSize = radios(`size`, BUTTON_SIZE_OPTIONS, `L`)
      const tone: ButtonTone = radios(`tone`, BUTTON_TONE_OPTIONS, `BRAND`)
      const textVariant: ButtonTextVariant = radios(
        `textVariant`,
        BUTTON_TEXT_VARIANT_OPTIONS,
        `DEFAULT`
      )

      const renderCase = (variant: ButtonVariant) => (
        <Component
          onClick={action(`Button was clicked`)}
          {...defaultProps}
          variant={variant}
          tone={tone}
          size={size}
          ref={undefined}
          textVariant={textVariant}
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
): ShowcaseReturn {
  return [
    `sizes`,
    () => {
      const variant: ButtonVariant = radios(
        `variant`,
        BUTTON_VARIANT_OPTIONS,
        `PRIMARY`
      )
      const tone: ButtonTone = radios(`tone`, BUTTON_TONE_OPTIONS, `BRAND`)
      const textVariant: ButtonTextVariant = radios(
        `textVariant`,
        BUTTON_TEXT_VARIANT_OPTIONS,
        `DEFAULT`
      )

      const renderCase = (size: ButtonSize) => (
        <Component
          onClick={action(`Button was clicked`)}
          {...defaultProps}
          variant={variant}
          tone={tone}
          size={size}
          ref={undefined}
          textVariant={textVariant}
        >
          size&nbsp;<React.Fragment>'{size}'</React.Fragment>
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
): ShowcaseReturn {
  return [
    `tones`,
    () => {
      const variant: ButtonVariant = radios(
        `variant`,
        BUTTON_VARIANT_OPTIONS,
        `PRIMARY`
      )
      const size: ButtonSize = radios(`size`, BUTTON_SIZE_OPTIONS, `L`)
      const textVariant: ButtonTextVariant = radios(
        `textVariant`,
        BUTTON_TEXT_VARIANT_OPTIONS,
        `DEFAULT`
      )

      const renderCase = (tone: ButtonTone) => (
        <Component
          onClick={action(`Button was clicked`)}
          {...defaultProps}
          variant={variant}
          tone={tone}
          size={size}
          ref={undefined}
          textVariant={textVariant}
        >
          tone&nbsp;<React.Fragment>'{tone}'</React.Fragment>
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
): ShowcaseReturn {
  return [
    `override/extend styles`,
    () => (
      <StoryUtils.Container>
        <StoryUtils.Stack>
          <Component
            {...defaultProps}
            onClick={action(`Button was clicked`)}
            css={theme => ({
              color: theme.colors.blackFade[80],
              background: theme.colors.teal[20],
              borderColor: theme.colors.teal[20],

              "&:hover:not([disabled])": {
                background: theme.colors.teal[30],
                borderColor: theme.colors.teal[30],
                color: theme.colors.black,
              },
            })}
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
): ShowcaseReturn {
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
