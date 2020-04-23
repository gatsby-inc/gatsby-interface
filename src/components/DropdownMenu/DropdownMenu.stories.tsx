/** @jsx jsx */
import { jsx } from "@emotion/core"
import { DecoratorFn } from "@storybook/react"
import {
  DropdownMenu,
  DropdownMenuButton,
  DropdownMenuPopover,
  DropdownMenuLink,
  DropdownMenuItem,
  DropdownMenuItems,
  DropdownMenuButtonStyled,
} from "./"
import React from "react"
import { select } from "@storybook/addon-knobs"
import { Theme } from "../../theme"

export default {
  title: `DropdownMenu`,
  component: DropdownMenu,
  subcomponents: {
    DropdownMenuButton,
    DropdownMenuButtonStyled,
    DropdownMenuPopover,
    DropdownMenuItems,
    DropdownMenuLink,
    DropdownMenuItem,
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
    <DropdownMenu>
      <DropdownMenuButton>
        {selected || "Placeholder for the dropdown"}
      </DropdownMenuButton>
      <DropdownMenuItems>
        <DropdownMenuItem onSelect={() => setSelected("First")}>
          First
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => setSelected("Second")}>
          Second
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => setSelected("Third")}>
          Third
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => setSelected("Fourth")}>
          Fourth
        </DropdownMenuItem>
      </DropdownMenuItems>
    </DropdownMenu>
  )
}

export const StyledButton = () => {
  const [selected, setSelected] = React.useState<undefined | string>(undefined)

  return (
    <DropdownMenu>
      <DropdownMenuButtonStyled>
        {selected || "Placeholder for the dropdown"}
      </DropdownMenuButtonStyled>
      <DropdownMenuItems>
        <DropdownMenuItem onSelect={() => setSelected("First")}>
          First
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => setSelected("Second")}>
          Second
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => setSelected("Third")}>
          Third
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => setSelected("Fourth")}>
          Fourth
        </DropdownMenuItem>
      </DropdownMenuItems>
    </DropdownMenu>
  )
}

export const WithComponentPlaceholder = () => {
  const [selected, setSelected] = React.useState<undefined | string>(undefined)

  return (
    <DropdownMenu>
      <DropdownMenuButton>
        {selected || <p>This is a complex placeholder</p>}
      </DropdownMenuButton>
      <DropdownMenuItems>
        <DropdownMenuItem onSelect={() => setSelected("First")}>
          First
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => setSelected("Second")}>
          Second
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => setSelected("Third")}>
          Third
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => setSelected("Fourth")}>
          Fourth
        </DropdownMenuItem>
      </DropdownMenuItems>
    </DropdownMenu>
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
    <DropdownMenu>
      <DropdownMenuButton>
        {selected || "Placeholder for the dropdown"}
      </DropdownMenuButton>
      <DropdownMenuItems>
        {items.map(item => (
          <DropdownMenuItem key={item} onSelect={() => undefined}>
            {item}
          </DropdownMenuItem>
        ))}
      </DropdownMenuItems>
    </DropdownMenu>
  )
}

Sandbox.story = {
  parameters: {
    chromatic: { disable: true },
  },
}
