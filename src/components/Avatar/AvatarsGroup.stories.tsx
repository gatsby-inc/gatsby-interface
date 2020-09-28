/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Meta, Story } from "@storybook/react"
import AvatarsGroup, { AvatarsGroupProps } from "./AvatarsGroup"

export default {
  title: `AvatarGroup`,
  component: AvatarsGroup,
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
const IMG_URL_2 = `https://picsum.photos/id/1025/200/200`

const Template: Story<AvatarsGroupProps> = args => <AvatarsGroup {...args} />

export const Basic = Template.bind({})

Basic.args = {
  avatars: [
    {
      src: IMG_URL_1,
      label: `John Doe`,
    },
    { src: ``, label: `John Doe`, fallback: "JD" },
    {
      src: IMG_URL_2,
      label: `Jane Doe`,
    },
  ],
}
