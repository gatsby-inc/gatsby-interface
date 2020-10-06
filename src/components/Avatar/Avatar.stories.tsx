/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Avatar, AvatarProps, AvatarSize } from "."

const SIZES: AvatarSize[] = [`XS`, `S`, `M`, `L`, `XL`, `XXL`]

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
} as Meta

const IMG_URL_1 = `https://picsum.photos/id/1005/200/200`

const Template: Story<AvatarProps> = args => <Avatar {...args} />

export const Basic = Template.bind({})

Basic.args = { src: IMG_URL_1, label: "A nice userpic" }

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
