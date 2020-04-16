/** @jsx jsx */
import { jsx, Global } from "@emotion/core"
import React from "react"
import { boolean, text } from "@storybook/addon-knobs"
import { Navigation, NavigationItemOptions } from "."

export default {
  title: `Navigation`,
  component: Navigation,
  subcomponents: {
    "Navigation.Nav": Navigation.Nav,
    "Navigation.Hamburger": Navigation.Hamburger,
    "Navigation.HamburgerIcon": Navigation.HamburgerIcon,
    "Navigation.List": Navigation.List,
    "Navigation.Item": Navigation.Item,
    "Navigation.ItemLink": Navigation.ItemLink,
    "Navigation.Dropdown": Navigation.Dropdown,
    "Navigation.DropdownToggle": Navigation.DropdownToggle,
    "Navigation.DropdownItem": Navigation.DropdownItem,
    "Navigation.ButtonNav": Navigation.Button,
    "Navigation.Spacer": Navigation.Spacer,
  },
  parameters: {
    layout: `padded`,
  },
}

const items: NavigationItemOptions[] = [
  {
    name: `Why Gatsby?`,
    linkTo: `/why-gatsby/`,
  },
  {
    name: `How It Works`,
    linkTo: `/how-it-works/`,
    items: [
      {
        name: `Bring Data From Anywhere`,
        linkTo: `/how-it-works/bring-data-from-anywhere/`,
      },
      {
        name: `Write Modern Apps`,
        linkTo: `/write-modern-apps/`,
      },
    ],
  },
  {
    name: `Integrations`,
    linkTo: `/integrations/`,
  },
  {
    name: `About Us`,
    linkTo: `/about-us/`,
  },
  {
    name: `Resources`,
    linkTo: `/resources/`,
    items: [
      {
        name: `Gatsby Days`,
        linkTo: `/resources/gatsby-days/`,
      },
      {
        name: `Webinars`,
        linkTo: `/resources/webinars/`,
      },
    ],
  },
]

const secondaryItems: NavigationItemOptions[] = [
  {
    name: `Docs`,
    linkTo: `/docs/`,
  },
  {
    name: `Contact Us`,
    linkTo: `/contact-us/`,
  },
]

const items2: NavigationItemOptions[] = [
  {
    name: `About`,
    linkTo: `/about/`,
  },
]

export const Basic = () => (
  <Navigation items={items} secondaryItems={secondaryItems} />
)

export const Sandbox = () => {
  const isInverted = boolean("isInverted", false)
  return (
    <React.Fragment>
      <Navigation
        items={items}
        secondaryItems={secondaryItems}
        isInverted={isInverted}
        mobileNavMediaQuery={text(
          "mobileNavMediaQuery",
          `@media (max-width: 1065px)`
        )}
      />
      <InvertedBackground isInverted={isInverted} />
    </React.Fragment>
  )
}

Sandbox.story = {
  parameters: {
    chromatic: { disable: true },
  },
}

export const Inverted = () => (
  <React.Fragment>
    <Navigation items={items} secondaryItems={secondaryItems} isInverted />
    <InvertedBackground />
  </React.Fragment>
)

export const WithItemLinksAsPropsAndChildren = () => (
  <Navigation items={items2}>
    <Navigation.Item item={{ name: `Contact`, linkTo: `/contact/` }} />
    <Navigation.Button linkTo="/">Test</Navigation.Button>
  </Navigation>
)

export const WithItemLinksAsChildren = () => (
  <Navigation>
    <Navigation.Item item={{ name: `Contact`, linkTo: `/contact/` }} />
    <Navigation.Item item={{ name: `About`, linkTo: `/about/` }} />
  </Navigation>
)

export const WithNestedItemLinksAsChildren = () => (
  <Navigation>
    <Navigation.Item item={{ name: `About`, linkTo: `/about/` }}>
      <Navigation.DropdownItem
        item={{ name: `Contact`, linkTo: `/contact/` }}
      />
      <Navigation.DropdownItem item={{ name: `FAQ`, linkTo: `/faq/` }} />
    </Navigation.Item>
  </Navigation>
)

export const WithItemLinksAsPropsAndButtonAsChild = () => (
  <Navigation items={items}>
    <Navigation.Spacer />
    <Navigation.Button linkTo="/get-started">
      Get started for free
    </Navigation.Button>
  </Navigation>
)

export const WithExternalButtonLinksAsChild = () => (
  <Navigation items={items}>
    <Navigation.Spacer />
    <Navigation.Button linkTo="https://www.bing.com/">
      Search it up
    </Navigation.Button>
  </Navigation>
)

export const WithExternalLinkItemsAsProps = () => (
  <Navigation
    items={[
      { name: `internal`, linkTo: `/test` },
      { name: `external`, linkTo: `http://www.google.com` },
    ]}
  />
)

function InvertedBackground({ isInverted = true }: { isInverted?: boolean }) {
  return (
    <Global
      styles={theme => ({
        body: {
          backgroundColor: isInverted ? theme.colors.purple[70] : undefined,
        },
      })}
    />
  )
}
