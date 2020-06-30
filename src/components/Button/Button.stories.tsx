/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { DecoratorFn } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import { Button } from "./Button"
import { AnchorButton } from "../AnchorButton"
import { LinkButton } from "../LinkButton"
import {
  getButtonCss,
  ButtonVariant,
  ButtonTone,
  ButtonSize,
  ButtonTextVariant,
} from "../../theme/styles/button"
import {
  withVariationsContainer,
  radioKnobOptions,
} from "../../utils/storybook"
import { MdCloud, MdAutorenew, MdCancel, MdArrowForward } from "react-icons/md"
import { Theme } from "../../theme"
import { Notification } from "../Notification"
import { StoryPropVariant } from "../../utils/storybook/components"
import { text, radios, boolean } from "@storybook/addon-knobs"

export default {
  title: `Button, AnchorButton, LinkButton`,
  component: Button,
  subcomponents: {
    AnchorButton,
    LinkButton,
  },
  parameters: {
    componentSubtitle: (
      <React.Fragment>
        <p>
          Buttons allow users to take actions and make choices. They are common
          in dialogs, forms, panels, and pages: An example of their usage is
          confirming the deletion of a user in a dialog.
        </p>
        <p>
          {`<Button>`} is the primary component for most of the cases, while{" "}
          {`<AnchorButton>`} and {`<LinkButton>`}
          allow to display a button-like anchor tag and a Gatsby Link
          respectively.
        </p>
      </React.Fragment>
    ),
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/cHuwAiLmd42iE9JC4EVnSvRW/Buttons?node-id=502%3A0",
    },
  },
}

const withButtonOnlyWarning: DecoratorFn = story => (
  <React.Fragment>
    <Notification
      tone="WARNING"
      css={(theme: Theme) => ({ marginBottom: theme.space[4] })}
    >
      Only availbale for Button component
    </Notification>
    {story()}
  </React.Fragment>
)

export const Basic = () => (
  <React.Fragment>
    <Button>Button</Button> <AnchorButton href="#">AnchorButton</AnchorButton>{" "}
    <LinkButton to="/">LinkButton</LinkButton>
  </React.Fragment>
)

export const Sandbox = () => {
  const label = text("button label", "Button")
  const variant = radios("variant", radioKnobOptions(VARIANTS), "PRIMARY")
  const tone = radios("tone", radioKnobOptions(TONES), "BRAND")
  const size = radios("size", radioKnobOptions(SIZES), "L")
  const textVariant = radios(
    "text variant",
    radioKnobOptions(TEXT_VARIANTS),
    "DEFAULT"
  )
  const icon = radios(
    "icon",
    { left: `left`, right: "right", none: `none` },
    `none`
  )
  const disabled = boolean("disabled (Button only)", false)
  const loading = boolean("loading (Button only)", false)
  const loadingLabel = text("loading label (Button only)", "Loading")

  const leftIcon = icon === `left` ? <MdCancel /> : null
  const rightIcon = icon === `right` ? <MdArrowForward /> : null

  return (
    <React.Fragment>
      <Button
        variant={variant}
        tone={tone}
        size={size}
        textVariant={textVariant}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        disabled={disabled}
        loading={loading}
        loadingLabel={loadingLabel}
      >
        {label}
      </Button>{" "}
      <AnchorButton
        href="#"
        variant={variant}
        tone={tone}
        size={size}
        textVariant={textVariant}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
      >
        AnchorButton
      </AnchorButton>{" "}
      <LinkButton
        to="/"
        variant={variant}
        tone={tone}
        size={size}
        textVariant={textVariant}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
      >
        LinkButton
      </LinkButton>
    </React.Fragment>
  )
}

Sandbox.story = {
  parameters: {
    chromatic: { disable: true },
  },
}

const VARIANTS: ButtonVariant[] = [`PRIMARY`, `SECONDARY`, `GHOST`]

export const Variants = () =>
  VARIANTS.map(variant => (
    <div key={variant}>
      <StoryPropVariant propName="variant" propValue={variant} />
      <Button variant={variant}>Button</Button>{" "}
      <AnchorButton href="#" variant={variant}>
        AnchorButton
      </AnchorButton>{" "}
      <LinkButton to="/" variant={variant}>
        LinkButton
      </LinkButton>
    </div>
  ))

Variants.story = {
  decorators: [withVariationsContainer],
}

const TONES: ButtonTone[] = [`BRAND`, `NEUTRAL`, `SUCCESS`, `DANGER`]

export const Tones = () =>
  TONES.map(tone => (
    <div key={tone}>
      <StoryPropVariant propName="tone" propValue={tone} />
      <Button tone={tone}>Button</Button>{" "}
      <AnchorButton href="#" tone={tone}>
        AnchorButton
      </AnchorButton>{" "}
      <LinkButton to="/" tone={tone}>
        LinkButton
      </LinkButton>
    </div>
  ))

Tones.story = {
  decorators: [withVariationsContainer],
}

const SIZES: ButtonSize[] = [`S`, `M`, `L`, `XL`]

export const Sizes = () =>
  SIZES.map(size => (
    <div key={size}>
      <StoryPropVariant propName="size" propValue={size} />
      <Button size={size}>Button</Button>{" "}
      <AnchorButton href="#" size={size}>
        AnchorButton
      </AnchorButton>{" "}
      <LinkButton to="/" size={size}>
        LinkButton
      </LinkButton>
    </div>
  ))

Sizes.story = {
  decorators: [withVariationsContainer],
}

const TEXT_VARIANTS: ButtonTextVariant[] = [`DEFAULT`, `BRAND`]

export const TextVariants = () =>
  TEXT_VARIANTS.map(textVariant => (
    <div key={textVariant}>
      <StoryPropVariant propName="textVariant" propValue={textVariant} />
      <Button textVariant={textVariant}>Button</Button>{" "}
      <AnchorButton href="#" textVariant={textVariant}>
        AnchorButton
      </AnchorButton>{" "}
      <LinkButton to="/" textVariant={textVariant}>
        LinkButton
      </LinkButton>
    </div>
  ))

TextVariants.story = {
  decorators: [withVariationsContainer],
}

export const Disabled = () => <Button disabled>Button</Button>

Disabled.story = {
  decorators: [withButtonOnlyWarning],
}

export const WithIcons = () => (
  <React.Fragment>
    <div>
      <StoryPropVariant
        propName="rightIcon"
        propValue="<MdCloud />"
        displayValueInQuotes={false}
      />
      <Button rightIcon={<MdCloud />}>Button</Button>{" "}
      <AnchorButton href="#" rightIcon={<MdCloud />}>
        AnchorButton
      </AnchorButton>{" "}
      <LinkButton to="/" rightIcon={<MdCloud />}>
        LinkButton
      </LinkButton>
    </div>
    <div>
      <StoryPropVariant
        propName="leftIcon"
        propValue="<MdCloud />"
        displayValueInQuotes={false}
      />
      <Button leftIcon={<MdCloud />}>Button</Button>{" "}
      <AnchorButton href="#" leftIcon={<MdCloud />}>
        AnchorButton
      </AnchorButton>{" "}
      <LinkButton to="/" leftIcon={<MdCloud />}>
        LinkButton
      </LinkButton>
    </div>
  </React.Fragment>
)

WithIcons.story = {
  decorators: [withVariationsContainer],
}

export const InLoadingState = () => (
  <React.Fragment>
    <Button loading={true}>Button</Button>
    <Button loading={true} loadingLabel="Custom loading label">
      Button
    </Button>
    <Button
      loading={true}
      LoadingIcon={MdAutorenew}
      loadingLabel="Custom loading icon"
    >
      Button
    </Button>
  </React.Fragment>
)

InLoadingState.story = {
  decorators: [withVariationsContainer, withButtonOnlyWarning],
}

export const CustomButtonComponent = () => {
  function CustomButton(props: JSX.IntrinsicElements["button"]) {
    return <button {...props} onClick={action("click custom component")} />
  }

  return (
    <Button ButtonComponent={CustomButton} rightIcon={<MdCloud />}>
      Custom component
    </Button>
  )
}

CustomButtonComponent.story = {
  decorators: [withButtonOnlyWarning],
}

export const ManuallyApplyStyles = () => (
  <button css={getButtonCss({ size: `L`, tone: `BRAND` })}>
    I'm a &lt;button&gt; but I look like a &lt;Button&gt;
  </button>
)
