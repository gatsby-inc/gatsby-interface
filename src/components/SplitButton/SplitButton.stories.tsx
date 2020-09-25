/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import { text, radios, boolean } from "@storybook/addon-knobs"
import {
  radioKnobOptions,
  withVariationsContainer,
  getStoryOptions,
  disableAnimationsDecorator,
} from "../../utils/storybook"
import { SplitButton, SplitButtonVariant } from "."
import { ButtonTone, ButtonSize, ButtonWidth } from "../../theme/styles/button"
import { DropdownMenuItem } from "../DropdownMenu"
import { DecoratorFn } from "@storybook/react"
import isChromatic from "storybook-chromatic/isChromatic"

export default {
  title: `SplitButton`,
  component: SplitButton,
  subcomponents: { DropdownMenuItem },
  decorators: [disableAnimationsDecorator],
}

const options = getStoryOptions("short")

const withOpenMenuOnMount = (selector = "button"): DecoratorFn => {
  return story => {
    React.useEffect(() => {
      const button = document.querySelector<HTMLButtonElement>(selector)
      if (button) {
        // Toggle menu for Chromatic snapshots
        button.focus()
        button.dispatchEvent(
          new KeyboardEvent("keydown", {
            bubbles: true,
            cancelable: true,
            key: "Enter",
            shiftKey: false,
          })
        )
      }
    }, [])

    return <div css={isChromatic() && { height: `100vh` }}>{story()}</div>
  }
}

export const Basic = () => (
  <SplitButton buttonLabel="Button" dropdownButtonLabel="Other options">
    {options.map(({ value, label }) => (
      <DropdownMenuItem onSelect={() => console.log(value)}>
        {label}
      </DropdownMenuItem>
    ))}
  </SplitButton>
)

Basic.story = {
  decorators: [withOpenMenuOnMount(`button[aria-haspopup="true"]`)],
}

const VARIANTS: SplitButtonVariant[] = [`PRIMARY`, `SECONDARY`]

export const Sandbox = () => (
  <SplitButton
    buttonLabel={text("buttonLabel", "Button")}
    dropdownButtonLabel={text("dropdownButtonLabel", "Other options")}
    disabled={boolean("disabled", false)}
    variant={radios(
      `variant`,
      radioKnobOptions<SplitButtonVariant>(VARIANTS),
      `PRIMARY`
    )}
    tone={radios(`tone`, radioKnobOptions<ButtonTone>(TONES), `BRAND`)}
    size={radios(`size`, radioKnobOptions<ButtonSize>(SIZES), `L`)}
    width={radios(`width`, radioKnobOptions<ButtonWidth>(WIDTHS), `AUTO`)}
  >
    {options.map(({ value, label }) => (
      <DropdownMenuItem onSelect={() => console.log(value)}>
        {label}
      </DropdownMenuItem>
    ))}
  </SplitButton>
)

Sandbox.story = {
  parameters: {
    chromatic: { disable: true },
  },
}

export const Variants = () =>
  VARIANTS.map(variant => (
    <SplitButton
      key={variant}
      variant={variant}
      buttonLabel={`Variant: ${variant}`}
      dropdownButtonLabel="Other options"
    >
      {options.map(({ value, label }) => (
        <DropdownMenuItem onSelect={() => console.log(value)}>
          {label}
        </DropdownMenuItem>
      ))}
    </SplitButton>
  ))

Variants.story = {
  decorators: [withVariationsContainer],
}

const TONES: ButtonTone[] = [`BRAND`, `NEUTRAL`, `SUCCESS`, `DANGER`]

export const Tones = () =>
  TONES.map(tone => (
    <SplitButton
      key={tone}
      tone={tone}
      buttonLabel={`Tone: ${tone}`}
      dropdownButtonLabel="Other options"
    >
      {options.map(({ value, label }) => (
        <DropdownMenuItem onSelect={() => console.log(value)}>
          {label}
        </DropdownMenuItem>
      ))}
    </SplitButton>
  ))

Tones.story = {
  decorators: [withVariationsContainer],
}

const SIZES: ButtonSize[] = [`S`, `M`, `L`, `XL`]

export const Sizes = () =>
  SIZES.map(size => (
    <SplitButton
      key={size}
      size={size}
      buttonLabel={`Size: ${size}`}
      dropdownButtonLabel="Other options"
    >
      {options.map(({ value, label }) => (
        <DropdownMenuItem onSelect={() => console.log(value)}>
          {label}
        </DropdownMenuItem>
      ))}
    </SplitButton>
  ))

Sizes.story = {
  decorators: [withVariationsContainer],
}

const WIDTHS: ButtonWidth[] = [`AUTO`, `FIT_CONTAINER`]

export const Widths = () =>
  WIDTHS.map(width => (
    <SplitButton
      key={width}
      width={width}
      buttonLabel={`Width: ${width}`}
      dropdownButtonLabel="Other options"
      data-testid={width}
    >
      {options.map(({ value, label }) => (
        <DropdownMenuItem onSelect={() => console.log(value)}>
          {label}
        </DropdownMenuItem>
      ))}
    </SplitButton>
  ))

Widths.story = {
  decorators: [
    withVariationsContainer,
    withOpenMenuOnMount(`button[data-testid="FIT_CONTAINER"] ~ button`),
  ],
}

export const Disabled = () => (
  <SplitButton
    buttonLabel="Button"
    dropdownButtonLabel="Other options"
    disabled
  >
    {options.map(({ value, label }) => (
      <DropdownMenuItem onSelect={() => console.log(value)}>
        {label}
      </DropdownMenuItem>
    ))}
  </SplitButton>
)
