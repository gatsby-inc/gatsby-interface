/** @jsx jsx */
import { jsx, Global } from "@emotion/core"
import React from "react"
import { DecoratorFn } from "@storybook/react"
import { text, boolean } from "@storybook/addon-knobs"

import { BaseNavigation } from "."
import { Theme } from "../../theme"

const items = [
  {
    name: `Alpha`,
    linkTo: `/alpha`,
    items: [
      {
        name: `Delta`,
        linkTo: `/alpha/delta`,
      },
      {
        name: `Echo`,
        linkTo: `/alpha/echo`,
      },
    ],
  },
  {
    name: `Bravo`,
    linkTo: `/bravo`,
  },
  {
    name: `Charlie`,
    linkTo: `/charlie`,
  },
]

export default {
  title: `BaseNavigation`,
  component: BaseNavigation,
}

export const Basic = () => <BaseNavigation items={items} />

export const Sandbox = () => {
  const isInverted = boolean("isInverted", false)

  return (
    <React.Fragment>
      {isInverted && (
        <Global
          styles={(theme: Theme) => ({
            body: {
              background: theme.colors.purple[70],
            },
          })}
        />
      )}
      <BaseNavigation
        items={items}
        mobileNavMediaQuery={text(
          "mobileNavMediaQuery",
          `@media (max-width: 1065px)`
        )}
        isInverted={isInverted}
      />
    </React.Fragment>
  )
}

Sandbox.story = {
  parameters: {
    chromatic: { disable: true },
  },
}

export const Inverted = () => <BaseNavigation items={items} isInverted />

Inverted.story = {
  decorators: [
    story => (
      <React.Fragment>
        <Global
          styles={(theme: Theme) => ({
            body: {
              background: theme.colors.purple[70],
            },
          })}
        />
        {story()}
      </React.Fragment>
    ),
  ] as DecoratorFn[],
}

export const WithSecondaryItems = () => (
  <BaseNavigation
    items={items}
    secondaryItems={[
      {
        name: "Doc & Lifestyle",
        linkTo: `doc-and-lifestyle`,
        items: [
          {
            name: "Blue Planet",
            linkTo: `blue-planet`,
          },
          {
            name: "Mary Berry's Country House Secrets",
            linkTo: `country-houses`,
          },
        ],
      },
      {
        name: `News`,
        linkTo: `news`,
      },
    ]}
  />
)
