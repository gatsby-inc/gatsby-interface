/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import { DecoratorFn, Meta, Story } from "@storybook/react"
import {
  withVariationsContainer,
  getStoryOptions,
  disableAnimationsDecorator,
} from "../../utils/storybook"
import { SplitButton, SplitButtonProps, SplitButtonVariant } from "."
import { ButtonTone, ButtonSize, ButtonWidth } from "../../theme/styles/button"
import { DropdownMenuItem } from "../DropdownMenu"
import isChromatic from "storybook-chromatic/isChromatic"

const VARIANTS: SplitButtonVariant[] = [`PRIMARY`, `SECONDARY`]
const TONES: ButtonTone[] = [`BRAND`, `NEUTRAL`, `SUCCESS`, `DANGER`]
const SIZES: ButtonSize[] = [`S`, `M`, `L`, `XL`]
const WIDTHS: ButtonWidth[] = [`AUTO`, `FIT_CONTAINER`]

export default {
  title: `SplitButton`,
  component: SplitButton,
  subcomponents: { DropdownMenuItem },
  decorators: [disableAnimationsDecorator],
  argTypes: {
    variant: {
      table: {
        type: {
          summary: VARIANTS.map(variant => `"${variant}"`).join(` | `),
        },
        defaultValue: {
          summary: `PRIMARY`,
        },
      },
      control: {
        type: `select`,
        options: VARIANTS,
      },
    },
    tone: {
      table: {
        type: {
          summary: TONES.map(tone => `"${tone}"`).join(` | `),
        },
        defaultValue: {
          summary: `BRAND`,
        },
      },
      control: {
        type: `select`,
        options: TONES,
      },
    },
    size: {
      table: {
        type: {
          summary: SIZES.map(size => `"${size}"`).join(` | `),
        },
        defaultValue: {
          summary: `L`,
        },
      },
      control: {
        type: `select`,
        options: SIZES,
      },
    },
    width: {
      table: {
        type: {
          summary: WIDTHS.map(width => `"${width}"`).join(` | `),
        },
        defaultValue: {
          summary: `AUTO`,
        },
      },
      control: {
        type: `select`,
        options: WIDTHS,
      },
    },
    disabled: {
      table: {
        type: {
          summary: `boolean`,
        },
        defaultValue: {
          summary: false,
        },
      },
      control: {
        type: `boolean`,
      },
    },
  },
} as Meta

const options = getStoryOptions("short")

const withOpenMenuOnMount = (selector = "button"): DecoratorFn => {
  if (!isChromatic()) {
    return story => story()
  }

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

    return <div css={{ height: `100vh` }}>{story()}</div>
  }
}

const Template: Story<SplitButtonProps> = args => (
  <SplitButton {...args}>
    {options.map(({ value, label }) => (
      <DropdownMenuItem onSelect={() => console.log(value)}>
        {label}
      </DropdownMenuItem>
    ))}
  </SplitButton>
)

export const Basic = Template.bind({})

Basic.args = {
  buttonLabel: `Button`,
  dropdownButtonLabel: `Other options`,
}

Basic.decorators = [withOpenMenuOnMount(`button[aria-haspopup="true"]`)]

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
