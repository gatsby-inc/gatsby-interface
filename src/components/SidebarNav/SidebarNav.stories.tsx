/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { DecoratorFn } from "@storybook/react"
import { StoryUtils } from "../../utils/storybook"
import { General, Integrations, Preview, Skull, Reports } from "../../assets"
import {
  SidebarNav,
  SidebarNavOption,
  SidebarNavProps,
  SidebarNavVariant,
} from "./"
import { radioKnobOptions } from "../../utils/storybook/knobs"
import { radios, text } from "@storybook/addon-knobs"

const SIDEBAR_NAV_VARIANTS: SidebarNavVariant[] = [`DEFAULT`, `FULL`]

export default {
  title: `SidebarNav`,
  component: SidebarNav,
  decorators: [
    story => (
      <StoryUtils.Container>
        <StoryUtils.Stack>{story()}</StoryUtils.Stack>
      </StoryUtils.Container>
    ),
  ] as DecoratorFn[],
}

export const Basic = () => <SidebarNavExample />

export const Sandbox = () => (
  <SidebarNavExample
    variant={radios(
      "variant",
      radioKnobOptions(SIDEBAR_NAV_VARIANTS),
      `DEFAULT`
    )}
    aria-label={text("accessible label", "Sandbox navigation")}
  />
)

Sandbox.story = {
  parameters: {
    chromatic: { disable: true },
  },
}

export const Variants = () =>
  SIDEBAR_NAV_VARIANTS.map(variant => (
    <React.Fragment key={variant}>
      <h3>{variant}:</h3>
      <SidebarNavExample key={variant} variant={variant} />
    </React.Fragment>
  ))

const SidebarNavExample = (props: Partial<SidebarNavProps>) => {
  // The active prop should be managed by path rather than component state. This use case is for storybook only
  const [activeNav, setNav] = React.useState(`general`)
  const [subNav, setSubNav] = React.useState(`site`)
  const getPath = (section: string) => `${window.location.pathname}${section}`

  const options: SidebarNavOption[] = [
    {
      label: `General`,
      Icon: General,
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
      Icon: Preview,
      onClick: () => setNav(`builds`),
      active: activeNav === `builds`,
      to: getPath(`#builds`),
    },
    {
      label: `Reports`,
      Icon: Reports,
      onClick: () => setNav(`reports`),
      active: activeNav === `reports`,
      to: getPath(`#reports`),
    },
    {
      label: `Integrations`,
      Icon: Integrations,
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
      Icon: Skull,
      onClick: () => setNav(`danger`),
      active: activeNav === `danger`,
      to: getPath(`#danger`),
    },
  ]

  return <SidebarNav options={options} {...props} />
}
