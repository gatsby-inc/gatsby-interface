/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Meta, Story } from "@storybook/react"

import { Announcement, AnnouncementProps } from "."

export default {
  title: `Announcement`,
  component: Announcement,
} as Meta

const Template: Story<AnnouncementProps> = args => <Announcement {...args} />

export const Basic = Template.bind({})

Basic.args = {
  children:
    "We are working on adding more integrations all the time—watch your inbox!",
}
