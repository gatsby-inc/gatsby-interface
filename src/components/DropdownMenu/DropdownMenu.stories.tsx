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
  DropdownMenuItemsLowLevel,
  DropdownMenuButtonStyled,
  DropdownDivider,
  DropdownHeader,
} from "./"
import * as React from "react"
import { radios, text } from "@storybook/addon-knobs"
import { action } from "@storybook/addon-actions"
import { Theme } from "../../theme"
import {
  disableAnimationsDecorator,
  radioKnobOptions,
} from "../../utils/storybook"
import { DropdownMenuSize } from "./DropdownMenu"
import { Notification } from "../Notification"
import { Link } from "gatsby"
import { positionRight } from "@reach/popover"

export default {
  title: `DropdownMenu`,
  component: DropdownMenu,
  subcomponents: {
    DropdownMenuButton,
    DropdownMenuButtonStyled,
    DropdownMenuPopover,
    DropdownMenuItems,
    DropdownMenuItemsLowLevel,
    DropdownMenuLink,
    DropdownMenuItem,
  },
  parameters: {
    componentSubtitle:
      "Dropdown Menus display a list of choices on a temporary surface.",
    layout: `padded`,
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/vaWj58n22gCrJ3JujReTvw/Dropdown?node-id=1%3A41",
    },
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
    disableAnimationsDecorator,
  ] as DecoratorFn[],
}

const SIZES: DropdownMenuSize[] = [`AUTO`, `MAX_CONTENT`, `LEGACY`]
const items: string[] = ["Item 1", "Item 2", "Item 3"]

export const Basic = () => {
  useOpenMenuOnMount()

  return (
    <div css={{ minHeight: "100vh" }}>
      <DropdownMenu>
        <DropdownMenuButton onKeyDown={console.log}>Actions</DropdownMenuButton>
        <DropdownMenuItems>
          {items.map(item => (
            <DropdownMenuItem
              key={item}
              onSelect={() => action("Select")(item)}
            >
              {item}
            </DropdownMenuItem>
          ))}
        </DropdownMenuItems>
      </DropdownMenu>
    </div>
  )
}

export const Sandbox = () => {
  return (
    <DropdownMenu>
      <DropdownMenuButton>{text("label", "Actions")}</DropdownMenuButton>
      <DropdownMenuItems
        size={radios(`size`, radioKnobOptions(SIZES), `LEGACY`)}
      >
        <DropdownHeader>Header</DropdownHeader>
        {items.map(item => (
          <DropdownMenuItem key={item} onSelect={() => action("Select")(item)}>
            {item}
          </DropdownMenuItem>
        ))}
        <DropdownDivider />
        <DropdownMenuItem
          key="Item 4"
          onSelect={() => action("Select")("Item 4")}
        >
          Item 4
        </DropdownMenuItem>
      </DropdownMenuItems>
    </DropdownMenu>
  )
}

Sandbox.story = {
  parameters: {
    chromatic: { disable: true },
  },
}

// This is a hack to display multiple menus at the same time
function ForceOpenMenu() {
  const selfRef = React.useRef<HTMLDivElement>(null)
  React.useEffect(() => {
    let menu: HTMLElement | null = selfRef.current
    while (menu && !menu.hasAttribute("data-reach-menu")) {
      menu = menu.parentElement
    }

    if (menu) {
      menu.removeAttribute("hidden")
    }
  })

  return <div ref={selfRef} />
}

export const Sizes = () => {
  return (
    <React.Fragment>
      <Notification
        tone="WARNING"
        content="This story's only purpose is to demonstrate 'size' prop variants, which is why all menus are forced to be open"
      />
      <br />
      <div
        css={{
          display: `grid`,
          gridTemplateColumns: `1fr 1fr`,
          gridAutoRows: `200px`,
        }}
      >
        {SIZES.map(size => (
          <div key={size}>
            <DropdownMenu>
              <DropdownMenuButton>Size: {size}</DropdownMenuButton>
              <DropdownMenuItems size={size}>
                {items.map(item => (
                  <DropdownMenuItem
                    key={item}
                    onSelect={() => action("Select")(item)}
                  >
                    {item}
                  </DropdownMenuItem>
                ))}
                <ForceOpenMenu />
              </DropdownMenuItems>
            </DropdownMenu>
          </div>
        ))}
      </div>
    </React.Fragment>
  )
}

export const MenuLinks = () => {
  useOpenMenuOnMount()

  return (
    <div css={{ minHeight: "100vh" }}>
      <DropdownMenu>
        <DropdownMenuButton>{text("label", "Actions")}</DropdownMenuButton>
        <DropdownMenuItems>
          {["Ashalmawia", "Addadshashanammu", "Ularradallaku"].map(item => (
            <React.Fragment>
              <DropdownMenuLink
                href={`https://www.google.com/search?q=${item}`}
                target="_blank"
                rel="noreferrer noopener"
                key={item}
                as={"a"}
                onSelect={() => action("Select")(item)}
              >
                {item} {`(as "<a>")`}
              </DropdownMenuLink>
              <DropdownMenuLink
                to={`https://www.google.com/search?q=${item}`}
                target="_blank"
                rel="noreferrer noopener"
                key={item}
                as={Link}
                onSelect={() => action("Select")(item)}
              >
                {item} {`(as "<Link>")`}
              </DropdownMenuLink>
            </React.Fragment>
          ))}
        </DropdownMenuItems>
      </DropdownMenu>
    </div>
  )
}

export const StyledButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuButtonStyled>Actions</DropdownMenuButtonStyled>
      <DropdownMenuItems>
        {items.map(item => (
          <DropdownMenuItem key={item} onSelect={() => action("Select")(item)}>
            {item}
          </DropdownMenuItem>
        ))}
      </DropdownMenuItems>
    </DropdownMenu>
  )
}

export const WithComponentPlaceholder = () => {
  return (
    <DropdownMenu>
      <DropdownMenuButton>
        <p>This is a complex placeholder</p>
      </DropdownMenuButton>
      <DropdownMenuItems>
        {items.map(item => (
          <DropdownMenuItem key={item} onSelect={() => action("Select")(item)}>
            {item}
          </DropdownMenuItem>
        ))}
      </DropdownMenuItems>
    </DropdownMenu>
  )
}

export const WithCustomPositioning = () => {
  useOpenMenuOnMount()

  return (
    <div css={{ minHeight: "100vh" }}>
      <DropdownMenu>
        <DropdownMenuButton onKeyDown={console.log}>
          Click this button to open dropdown
        </DropdownMenuButton>
        <DropdownMenuPopover position={positionRight}>
          <DropdownMenuItemsLowLevel size="MAX_CONTENT">
            {items.map(item => (
              <DropdownMenuItem
                key={item}
                onSelect={() => action("Select")(item)}
              >
                {item}
              </DropdownMenuItem>
            ))}
          </DropdownMenuItemsLowLevel>
        </DropdownMenuPopover>
      </DropdownMenu>
    </div>
  )
}

function useOpenMenuOnMount() {
  React.useEffect(() => {
    const button = document.querySelector<HTMLButtonElement>("button")
    if (button) {
      // Toggle menu for Chromatic snapshots
      button.focus()
      button.dispatchEvent(
        new KeyboardEvent("keydown", {
          bubbles: true,
          cancelable: true,
          key: "Enter",
          shiftKey: false,
        })
      )
    }
  }, [])
}
