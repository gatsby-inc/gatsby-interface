/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Meta, Story } from "@storybook/react"
import { MdSync } from "react-icons/md"
import { BaseButton, BaseButtonProps } from "./"

export default {
  title: `BaseButton`,
  component: BaseButton,
  argTypes: {
    LoadingIcon: {
      control: {
        type: "select",
        options: ["None", "MdSync"],
      },
    },
    ButtonComponent: {
      control: {
        disable: true,
      },
    },
  },
} as Meta

const Template: Story<BaseButtonProps> = args => (
  <BaseButton
    {...args}
    LoadingIcon={
      // @ts-expect-error
      args.LoadingIcon === `MdSync`
        ? MdSync
        : // @ts-expect-error
        args.LoadingIcon === `None`
        ? undefined
        : args.LoadingIcon
    }
  />
)

export const Basic = Template.bind({})

Basic.args = {
  children: `Button`,
}

export const WithLoadingState = Template.bind({})

WithLoadingState.args = {
  loading: true,
  loadingLabel: `Loading…`,
  LoadingIcon: MdSync,
}
