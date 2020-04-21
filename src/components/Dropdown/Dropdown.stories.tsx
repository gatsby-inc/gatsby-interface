/** @jsx jsx */
import { jsx } from "@emotion/core"
import { DecoratorFn } from "@storybook/react"
import {
  Dropdown,
  DropdownButton,
  DropdownPopover,
  DropdownLink,
  DropdownItem,
  DropdownItems,
  DropdownButtonStyled,
} from "./"
import React from "react"
import { select } from "@storybook/addon-knobs"
import { Theme } from "../../theme"

export default {
  title: `Dropdown`,
  component: Dropdown,
  subcomponents: {
    DropdownButton,
    DropdownButtonStyled,
    DropdownPopover,
    DropdownItems,
    DropdownLink,
    DropdownItem,
  },
  parameters: {
    layout: `padded`,
  },
  decorators: [
    story => (
      <div
        css={(theme: Theme) => ({
          width: "300px",
          [theme.mediaQueries.phablet]: {
            width: "700px",
          },
        })}
      >
        {story()}
      </div>
    ),
  ] as DecoratorFn[],
}

export const Basic = () => {
  const [selected, setSelected] = React.useState<undefined | string>(undefined)

  return (
    <Dropdown>
      <DropdownButton>
        {selected || "Placeholder for the dropdown"}
      </DropdownButton>
      <DropdownItems>
        <DropdownItem onSelect={() => setSelected("First")}>First</DropdownItem>
        <DropdownItem onSelect={() => setSelected("Second")}>
          Second
        </DropdownItem>
        <DropdownItem onSelect={() => setSelected("Third")}>Third</DropdownItem>
        <DropdownItem onSelect={() => setSelected("Fourth")}>
          Fourth
        </DropdownItem>
      </DropdownItems>
    </Dropdown>
  )
}

export const StyledButton = () => {
  const [selected, setSelected] = React.useState<undefined | string>(undefined)

  return (
    <Dropdown>
      <DropdownButtonStyled>
        {selected || "Placeholder for the dropdown"}
      </DropdownButtonStyled>
      <DropdownItems>
        <DropdownItem onSelect={() => setSelected("First")}>First</DropdownItem>
        <DropdownItem onSelect={() => setSelected("Second")}>
          Second
        </DropdownItem>
        <DropdownItem onSelect={() => setSelected("Third")}>Third</DropdownItem>
        <DropdownItem onSelect={() => setSelected("Fourth")}>
          Fourth
        </DropdownItem>
      </DropdownItems>
    </Dropdown>
  )
}

export const WithComponentPlaceholder = () => {
  const [selected, setSelected] = React.useState<undefined | string>(undefined)

  return (
    <Dropdown>
      <DropdownButton>
        {selected || <p>This is a complex placeholder</p>}
      </DropdownButton>
      <DropdownItems>
        <DropdownItem onSelect={() => setSelected("First")}>First</DropdownItem>
        <DropdownItem onSelect={() => setSelected("Second")}>
          Second
        </DropdownItem>
        <DropdownItem onSelect={() => setSelected("Third")}>Third</DropdownItem>
        <DropdownItem onSelect={() => setSelected("Fourth")}>
          Fourth
        </DropdownItem>
      </DropdownItems>
    </Dropdown>
  )
}

const items: string[] = ["First", "Second", "Third"]

const label = "Items"
const options = {
  None: undefined,
  First: "First",
  Second: "Second",
  Third: "Third",
}
const defaultValue = options.None
const groupId = "GROUP-ID1"

export const Sandbox = () => {
  const selected = select(label, options, defaultValue, groupId)

  return (
    <Dropdown>
      <DropdownButton>
        {selected || "Placeholder for the dropdown"}
      </DropdownButton>
      <DropdownItems>
        {items.map(item => (
          <DropdownItem key={item} onSelect={() => undefined}>
            {item}
          </DropdownItem>
        ))}
      </DropdownItems>
    </Dropdown>
  )
}

Sandbox.story = {
  parameters: {
    chromatic: { disable: true },
  },
}
