/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { DecoratorFn } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import {
  IntegrationsIcon,
  BuildsIcon,
  ReportsIcon,
  SkullIcon,
  GeneralIcon,
} from "../icons"
import { SidebarNav, SidebarNavOption, SidebarNavProps } from "./"
import { text } from "@storybook/addon-knobs"

export default {
  title: `SidebarNav`,
  component: SidebarNav,
  decorators: [withDesign] as DecoratorFn[],
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/OfhYd2rjUTCeu65VGlzH1wtv/Menus?node-id=295%3A335",
    },
  },
}

export const Basic = () => <SidebarNavExample />

export const Sandbox = () => (
  <SidebarNavExample
    aria-label={text("Accessible label", "Sandbox navigation")}
  />
)

Sandbox.story = {
  parameters: {
    chromatic: { disable: true },
  },
}

const SidebarNavExample = (props: Partial<SidebarNavProps>) => {
  // The active prop should be managed by path rather than component state. This use case is for storybook only
  const [activeNav, setNav] = React.useState(`general`)
  const [subNav, setSubNav] = React.useState(`site`)
  const getPath = (section: string) => `${window.location.pathname}${section}`

  const options: SidebarNavOption[] = [
    {
      label: `General`,
      Icon: GeneralIcon,
      onClick: () => setNav(`general`),
      active: activeNav === `general`,
      to: getPath(`#general`),
      subItems: [
        {
          label: `Site Details`,
          onClick: () => setSubNav(`site`),
          active: subNav === `site`,
          to: getPath(`#site-details`),
        },
        {
          label: `Contributors`,
          onClick: () => setSubNav(`contributors`),
          active: subNav === `contributors`,
          to: getPath(`#contributors`),
        },
        {
          label: `Environment Variables`,
          onClick: () => setSubNav(`envVars`),
          active: subNav === `envVars`,
          to: getPath(`#envVars`),
        },
        {
          label: `Webhooks`,
          onClick: () => setSubNav(`webhooks`),
          active: subNav === `webhooks`,
          to: getPath(`#webhooks`),
        },
        {
          label: `Access Control`,
          onClick: () => setSubNav(`accessControl`),
          active: subNav === `accessControl`,
          to: getPath(`#accessControl`),
        },
      ],
    },
    {
      label: `Builds`,
      Icon: BuildsIcon,
      onClick: () => setNav(`builds`),
      active: activeNav === `builds`,
      to: getPath(`#builds`),
    },
    {
      label: `Reports`,
      Icon: ReportsIcon,
      onClick: () => setNav(`reports`),
      active: activeNav === `reports`,
      to: getPath(`#reports`),
    },
    {
      label: `Integrations`,
      Icon: IntegrationsIcon,
      onClick: () => setNav(`integrations`),
      active: activeNav === `integrations`,
      to: getPath(`#integrations`),
      subItems: [
        {
          label: `Automated`,
          onClick: () => setSubNav(`automated`),
          active: subNav === `automated`,
          to: getPath(`#automated`),
        },
        {
          label: `Manual`,
          onClick: () => setSubNav(`manual`),
          active: subNav === `manual`,
          to: getPath(`#manual`),
        },
        {
          label: `Hosting`,
          onClick: () => setSubNav(`hosting`),
          active: subNav === `hosting`,
          to: getPath(`#hosting`),
        },
      ],
    },
    {
      label: `Danger Zone`,
      Icon: SkullIcon,
      onClick: () => setNav(`danger`),
      active: activeNav === `danger`,
      to: getPath(`#danger`),
    },
  ]

  return <SidebarNav options={options} {...props} />
}
