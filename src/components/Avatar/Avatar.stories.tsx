/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { text, color, boolean, number, radios } from "@storybook/addon-knobs"
import Avatar from "./Avatar"
import AvatarsGroup from "./AvatarsGroup"
import { AvatarSize } from "./index"
import { radioKnobOptions } from "../../utils/storybook"

export default {
  title: `Avatar`,
  component: Avatar,
  parameters: {
    componentSubtitle:
      "Avatars can represent a user or a brand, plugin, theme, or starter (with a logo or branded graphic). Usually used to represent user, they can also display user initials or a default icon as a fallback.",
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/E9BxE7udN0PmULGRCevSsGtK/Avatars?node-id=257%3A0",
    },
  },
}

const IMG_URL_1 = `https://picsum.photos/id/1005/200/200`
const IMG_URL_2 = `https://picsum.photos/id/1025/200/200`
const SIZES: AvatarSize[] = [`XS`, `S`, `M`, `L`, `XL`, `XXL`]

export const Basic = () => <Avatar src={IMG_URL_1} label="A nice userpic" />

export const Sandbox = () => {
  const bordered = boolean("Show border?", false)
  const borderColor = color("borderColor", "#000")
  return (
    <Avatar
      src={text("src", IMG_URL_1)}
      label={text("label", "John Doe")}
      fallback={text("fallback text", "JD")}
      borderColor={bordered ? borderColor : null}
      size={radios("size", radioKnobOptions(SIZES), "M")}
    />
  )
}

Sandbox.story = {
  parameters: {
    chromatic: { disable: true },
  },
}

export const Sizes = () => (
  <React.Fragment>
    <div>
      {SIZES.map(size => (
        <Avatar
          key={size}
          src={IMG_URL_1}
          label={`Avatar of size ${size}`}
          size={size}
          css={{ verticalAlign: `bottom ` }}
        />
      ))}
    </div>
    <div>
      {SIZES.map(size => (
        <Avatar
          key={size}
          src=""
          label={`Avatar of size ${size}`}
          fallback={size}
          size={size}
          css={{ verticalAlign: `bottom ` }}
        />
      ))}
    </div>
  </React.Fragment>
)

export const AvatarsGroupStory = () => (
  <AvatarsGroup
    avatars={[
      {
        src: IMG_URL_1,
        label: `John Doe`,
      },
      { src: ``, label: `John Doe`, fallback: "JD" },
      {
        src: IMG_URL_2,
        label: `Jane Doe`,
      },
    ]}
    omittedAvatarsCount={3}
    omittedAvatarsLabel="3 more users not shown"
  />
)

AvatarsGroupStory.story = {
  name: `AvatarsGroup`,
}

export const AvatarsGroupSandbox = () => {
  return (
    <AvatarsGroup
      avatars={[
        {
          src: IMG_URL_1,
          label: `John Doe`,
        },
        { src: ``, label: `John Doe`, fallback: "JD" },
        {
          src: IMG_URL_2,
          label: `Jane Doe`,
        },
      ]}
      borderColor={color("borderColor", "#fff")}
      size={radios("size", radioKnobOptions(SIZES), "M")}
      omittedAvatarsCount={number("omittedAvatarsCount", 1)}
      omittedAvatarsLabel={text(
        "omittedAvatarsLabel",
        "More users not displayed"
      )}
    />
  )
}

AvatarsGroupSandbox.story = {
  parameters: {
    chromatic: { disable: true },
  },
}
