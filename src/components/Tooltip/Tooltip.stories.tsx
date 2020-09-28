/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import { Meta, Story } from "@storybook/react"

import README from "./README.md"
import { MdNotifications, MdInfoOutline } from "react-icons/md"
import { Theme } from "../../theme"
import { LONG_TEXT, withVariationsContainer } from "../../utils/storybook"
import { Tooltip, TooltipPosition, TooltipProps } from "."

const POSITIONS: TooltipPosition[] = [`top`, `bottom`]

export default {
  title: `Tooltip`,
  parameters: {
    componentSubtitle:
      "Tooltips display contextual information when users hover over, focus on, or tap an element.",
    layout: `padded`,
    readme: {
      sidebar: README,
    },
  },
  argTypes: {
    position: {
      table: {
        type: {
          summary: POSITIONS.map(position => `"${position}"`).join(` | `),
        },
        defaultValue: {
          summary: `top`,
        },
      },
      control: {
        type: `select`,
        options: POSITIONS,
      },
    },
    children: {
      control: {
        disable: true,
      },
    },
  },
  decorators: [
    story => {
      React.useEffect(() => {
        const tooltipToggle = document.querySelector<
          HTMLButtonElement | HTMLInputElement | HTMLAnchorElement
        >("button, input, a")
        if (tooltipToggle) {
          tooltipToggle.focus()
        }
      }, [])

      return (
        <div
          css={(theme: Theme) => ({
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0px",
            padding: theme.space[15],
            boxSizing: "border-box",
          })}
        >
          {story()}
        </div>
      )
    },
  ],
} as Meta

const Template: Story<TooltipProps> = args => <Tooltip {...args} />

export const Basic = Template.bind({})

Basic.args = {
  label: "Tooltip text",
  children: <button>Hover on me!</button>,
}

export const Positions = () =>
  POSITIONS.map(position => (
    <Tooltip key={position} label="Tooltip text" position={position}>
      <button>Position: {position}</button>
    </Tooltip>
  ))

Positions.story = {
  decorators: [withVariationsContainer],
}

export const WithAccessibleLabel = () => (
  <div css={{ textAlign: `center` }}>
    <Tooltip label="Notfications" aria-label="3 notifications">
      <button
        css={(theme: Theme) => ({
          fontSize: theme.fontSizes[5],
          display: `inline-flex`,
          alignItems: "center",
        })}
      >
        <MdNotifications /> 3
      </button>
    </Tooltip>
    <p>
      The tooltip text should say "Notifications",
      <br />
      but screen readers should announce "3 notifications"
    </p>
  </div>
)

export const WithRichTooltip = Template.bind({})

WithRichTooltip.args = {
  label: (
    <span css={{ display: `inline-flex`, alignItems: `center` }}>
      <MdInfoOutline />
      <span>
        This is a <strong>rich</strong> tooltip
      </span>
    </span>
  ),
  children: <button>Hover on me!</button>,
}

export const WithLongTooltipText = Template.bind({})

WithLongTooltipText.args = {
  label: LONG_TEXT,
  children: <button>Hover on me!</button>,
}

export const LinkWithTooltip = Template.bind({})

LinkWithTooltip.args = {
  label: "Tooltip text",
  children: (
    <a href="https://google.com" target="_blank" rel="noreferrer noopener">
      a link with a tooltip
    </a>
  ),
}

export const InputWithTooltip = () => (
  <React.Fragment>
    <label htmlFor="inputTooltip">An input with a tooltip</label>
    <Tooltip label="Tooltip text">
      <input id="inputTooltip" type="text" size={30} />
    </Tooltip>
  </React.Fragment>
)

export const CustomStyling = Template.bind({})

CustomStyling.args = {
  label: "This text should be ALL CAPS",
  css: { textTransform: "uppercase" },
  children: <button>Hover on me!</button>,
}

export const EventHandlersOnTriggerElement = () => {
  const [firedEvent, setFiredEvent] = React.useState<string>("")

  function updateEvent<TEvent extends React.SyntheticEvent>(e: TEvent) {
    setFiredEvent(e.type)
  }

  return (
    <div css={{ textAlign: `center` }}>
      <Tooltip label="Tooltip text" css={{ textTransform: "uppercase" }}>
        <button
          onMouseEnter={updateEvent}
          onMouseMove={updateEvent}
          onMouseLeave={updateEvent}
          onFocus={updateEvent}
          onBlur={updateEvent}
          onKeyDown={updateEvent}
          onMouseDown={updateEvent}
        >
          Hover on me!
        </button>
      </Tooltip>
      <p>
        Event fired:{" "}
        <span css={(theme: Theme) => ({ fontFamily: theme.fonts.monospace })}>
          {firedEvent}
        </span>
      </p>
    </div>
  )
}

EventHandlersOnTriggerElement.story = {
  parameters: {
    chromatic: { disable: true },
  },
}
