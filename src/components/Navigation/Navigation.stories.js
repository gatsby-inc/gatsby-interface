/** @jsx jsx */
import { jsx } from "@emotion/core"

import { storiesOf } from "@storybook/react"

import Navigation from "./Navigation"

const items = [
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

const secondaryItems = [
  {
    name: `Docs`,
    linkTo: `/docs/`,
  },
  {
    name: `Contact Us`,
    linkTo: `/contact-us/`,
  },
]

const items2 = [
  {
    name: `About`,
    linkTo: `/about/`,
  },
]

storiesOf(`Navigation`, module)
  .add(`default example`, () => (
    <div css={{ padding: `2rem` }}>
      <Navigation items={items} secondaryItems={secondaryItems} />
    </div>
  ))
  .add(`inverted example`, () => (
    <div css={{ height: `100vh`, background: `#362066`, padding: `2rem` }}>
      <Navigation isInverted items={items} />
    </div>
  ))
  .add(`with item links as props and children`, () => (
    <div css={{ padding: `2rem` }}>
      <Navigation items={items2}>
        <Navigation.Item item={{ name: `Contact`, linkTo: `/contact/` }} />
        <Navigation.Button linkTo="/">Test</Navigation.Button>
      </Navigation>
    </div>
  ))
  .add(`with item links as children`, () => (
    <div css={{ padding: `2rem` }}>
      <Navigation>
        <Navigation.Item item={{ name: `Contact`, linkTo: `/contact/` }} />
        <Navigation.Item item={{ name: `About`, linkTo: `/about/` }} />
      </Navigation>
    </div>
  ))
  .add(`with nested item links as children`, () => (
    <div css={{ padding: `2rem` }}>
      <Navigation>
        <Navigation.Item item={{ name: `About`, linkTo: `/about/` }}>
          <Navigation.DropdownItem
            item={{ name: `Contact`, linkTo: `/contact/` }}
          />
          <Navigation.DropdownItem item={{ name: `FAQ`, linkTo: `/faq/` }} />
        </Navigation.Item>
      </Navigation>
    </div>
  ))
  .add(`with item links as props and button as child`, () => (
    <div css={{ padding: `2rem` }}>
      <Navigation items={items}>
        <Navigation.Spacer />
        <Navigation.Button linkTo="/get-started">
          Get started for free
        </Navigation.Button>
      </Navigation>
    </div>
  ))
  .add(`with external button link as child`, () => (
    <div css={{ padding: `2rem` }}>
      <Navigation items={items}>
        <Navigation.Spacer />
        <Navigation.Button linkTo="https://www.bing.com/">
          Search it up
        </Navigation.Button>
      </Navigation>
    </div>
  ))
  .add(`with external children`, () => (
    <Navigation
      items={[
        { name: `internal`, linkTo: `/test` },
        { name: `external`, linkTo: `http://www.google.com` },
      ]}
    />
  ))
