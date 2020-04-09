/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { DecoratorFn } from "@storybook/react"
import { text, radios } from "@storybook/addon-knobs"

import README from "./README.md"
import { Tooltip, TooltipPosition } from "."
import { MdNotifications, MdInfoOutline } from "react-icons/md"
import { Theme } from "../../theme"
import {
  radioKnobOptions,
  withVariationsContainer,
} from "../../utils/storybook"

export default {
  title: `Tooltip`,
  parameters: {
    layout: `padded`,
    readme: {
      sidebar: README,
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
            minHeight: "100vh",
            margin: "0px",
            padding: theme.space[4],
            boxSizing: "border-box",
          })}
        >
          {story()}
        </div>
      )
    },
  ] as DecoratorFn[],
}

export const Basic = () => (
  <Tooltip label="Tooltip text">
    <button>Hover on me!</button>
  </Tooltip>
)

const POSITIONS: TooltipPosition[] = [`top`, `bottom`]

export const Sandbox = () => (
  <Tooltip
    label={text("label", "Notfications")}
    aria-label={text("aria-label (accessible tooltip text)", "3 notifications")}
    position={radios(
      `position`,
      radioKnobOptions<TooltipPosition>(POSITIONS),
      `top`
    )}
  >
    <button
      css={(theme: Theme) => ({
        fontSize: theme.fontSizes[5],
        display: `flex`,
        alignItems: "center",
      })}
    >
      <MdNotifications /> 3
    </button>
  </Tooltip>
)

Sandbox.story = {
  parameters: {
    chromatic: { disable: true },
  },
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

export const WithReachTooltip = () => (
  <Tooltip
    label={
      <span css={{ display: `inline-flex`, alignItems: `center` }}>
        <MdInfoOutline />
        <span>
          This is a <strong>rich</strong> tooltip
        </span>
      </span>
    }
  >
    <button>Hover on me!</button>
  </Tooltip>
)

const LONG_TEXT = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo officia recusandae nisi magni, dolore laboriosam maiores suscipit perspiciatis. Perspiciatis quod ipsum corporis officia necessitatibus, doloribus fuga culpa. Unde, molestiae repellendus.`
export const WithLongTooltipText = () => (
  <Tooltip label={LONG_TEXT}>
    <button>Hover on me!</button>
  </Tooltip>
)

export const LinkWithTooltip = () => (
  <Tooltip label="Tooltip text">
    <a href="https://google.com" target="_blank" rel="noreferrer noopener">
      a link with a tooltip
    </a>
  </Tooltip>
)

export const InputWithTooltip = () => (
  <React.Fragment>
    <label htmlFor="inputTooltip">An input with a tooltip</label>
    <Tooltip label="Tooltip text">
      <input id="inputTooltip" type="text" size={30} />
    </Tooltip>
  </React.Fragment>
)

export const CustomStyling = () => (
  <Tooltip
    label="This text should be ALL CAPS"
    css={{ textTransform: "uppercase" }}
  >
    <button>Hover on me!</button>
  </Tooltip>
)

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
