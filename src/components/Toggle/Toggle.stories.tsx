/** @jsx jsx */
import { jsx } from "@emotion/core"
import React, { useState } from "react"
import { storiesOf } from "@storybook/react"
import { StoryUtils } from "../../utils/storybook"
import { Formik } from "formik"
import Toggle from "./Toggle"
import Debug from "../../utils/formik/Debug"

import space from "../../theme/space"
import fontSizes from "../../theme/fontSizes"
import colors from "../../theme/colors"
import ToggleCheckbox, { ToggleCheckboxProps } from "./ToggleCheckbox"
import ToggleSwitch from "./ToggleSwitch"
import { radioKnobOptions } from "../../utils/storybook/knobs"
import { AtomTone } from "../../theme/types"
import { radios } from "@storybook/addon-knobs"
import { Theme } from "../../theme"

const TOGGLE_TONES = radioKnobOptions<AtomTone>([
  `BRAND`,
  `SUCCESS`,
  `DANGER`,
  `WARNING`,
  `NEUTRAL`,
])

const TOGGLE_LABEL_POSITIONS = radioKnobOptions<
  ToggleCheckboxProps["labelPosition"]
>([`end`, `start`])

storiesOf(`Toggle`, module)
  .addParameters({
    options: {
      showPanel: true,
    },
  })
  .addDecorator(story => (
    <StoryUtils.Container>
      <StoryUtils.Stack>{story()}</StoryUtils.Stack>
    </StoryUtils.Container>
  ))
  .add(`ToggleCheckbox`, () => {
    return (
      <ToggleCheckbox
        label="Behaves like a checkbox"
        id="toggleCheckbox"
        tone={radios("tone", TOGGLE_TONES, `BRAND`)}
        labelPosition={radios("labelPosition", TOGGLE_LABEL_POSITIONS, `end`)}
      />
    )
  })
  .add(`ToggleCheckbox label position`, () => {
    return (
      <React.Fragment>
        <ToggleCheckbox
          label="Label after toggle"
          labelPosition="end"
          id="toggleCheckbox--position-end"
        />
        <ToggleCheckbox
          label="Label before toggle"
          labelPosition="start"
          id="toggleCheckbox--position-start"
        />
      </React.Fragment>
    )
  })
  .add(`ToggleCheckbox with rich label`, () => {
    return (
      <ToggleCheckbox
        label={
          <div>
            This is a rich label
            <br />
            <small css={(theme: Theme) => ({ color: theme.colors.grey[50] })}>
              Some styled text
            </small>
          </div>
        }
        id="toggleCheckbox"
        tone={radios("tone", TOGGLE_TONES, `BRAND`)}
        labelPosition={radios("labelPosition", TOGGLE_LABEL_POSITIONS, `end`)}
      />
    )
  })
  .add(`ToggleCheckbox (controlled)`, () => {
    function TestComponent() {
      const [checked, setChecked] = React.useState(false)

      return (
        <ToggleCheckbox
          checked={checked}
          onChange={() => setChecked(!checked)}
          label={`Controlled value: ${JSON.stringify(checked)}`}
          id="toggleCheckbox--controlled"
        />
      )
    }

    return <TestComponent />
  })
  .add(`ToggleSwitch`, () => {
    function TestComponent() {
      const [value, setValue] = React.useState<string>("off")

      return (
        <ToggleSwitch
          id="toggleSwitch"
          name="toggleSwitch"
          valueOn="on"
          valueOff="off"
          value={value}
          labelOn="Monthly"
          labelOff="Yearly"
          onChange={e => setValue(e.target.value)}
          tone={radios("tone", TOGGLE_TONES, `BRAND`)}
        />
      )
    }

    return <TestComponent />
  })
  .add(`ToggleSwitch with accessible description/label`, () => {
    function TestComponent() {
      const [value, setValue] = React.useState<string>("off")

      return (
        <div>
          <p id="toggleSwitch__description">Billing Period</p>
          <ToggleSwitch
            id="toggleSwitch"
            name="toggleSwitch"
            valueOn="on"
            valueOff="off"
            value={value}
            labelOn="Monthly"
            labelOff="Yearly"
            onChange={e => setValue(e.target.value)}
            tone={radios("tone", TOGGLE_TONES, `BRAND`)}
            aria-describedby="toggleSwitch__description"
          />
        </div>
      )
    }

    return <TestComponent />
  })
  .add(`ToggleSwitch with rich labels`, () => {
    function TestComponent() {
      const [value, setValue] = React.useState<string>("off")

      return (
        <ToggleSwitch
          id="toggleSwitch"
          name="toggleSwitch"
          valueOn="on"
          valueOff="off"
          value={value}
          onChange={e => setValue(e.target.value)}
          tone={radios("tone", TOGGLE_TONES, `BRAND`)}
          labelOn={
            <div>
              ON
              <br />
              <small css={(theme: Theme) => ({ color: theme.colors.grey[50] })}>
                This is a rich label
              </small>
            </div>
          }
          labelOff={
            <div>
              OFF
              <br />
              <small css={(theme: Theme) => ({ color: theme.colors.grey[50] })}>
                This is a rich label
              </small>
            </div>
          }
        />
      )
    }

    return <TestComponent />
  })
  .add(`shortcut usage`, () => {
    const [subInterval, setSubInterval] = useState(true)
    const [renew, setRenew] = useState(false)

    return (
      <React.Fragment>
        {/* 
      // @ts-ignore */}
        <Toggle
          fieldName="subInterval"
          fieldValue={subInterval}
          label="Yearly payment"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setSubInterval(e.target.checked)
          }}
        />
        {/* 
        // @ts-ignore */}
        <Toggle
          fieldName="renew"
          fieldValue={renew}
          label="Automaticaly renew"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setRenew(e.target.checked)
          }}
        />
      </React.Fragment>
    )
  })
  .add(`before or after label`, () => {
    const [subInterval, setSubInterval] = useState(true)
    const [renew, setRenew] = useState(true)

    return (
      <React.Fragment>
        {/* 
        // @ts-ignore */}
        <Toggle
          fieldName="subInterval"
          fieldValue={subInterval}
          label="Yearly payment"
          inOnPosition={`RIGHT`}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setSubInterval(e.target.checked)
          }}
        />
        {/* 
          // @ts-ignore */}
        <Toggle
          fieldName="renew"
          fieldValue={renew}
          label="Automaticaly renew"
          inOnPosition={`LEFT`}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setRenew(e.target.checked)
          }}
        />
      </React.Fragment>
    )
  })

  .add(`with Formik`, () => (
    <StoryUtils.Container>
      <Formik
        initialValues={{
          subscriptionInterval: false,
          automaticalRenew: false,
        }}
        onSubmit={console.log}
      >
        {({ values, handleChange }) => (
          <form
            css={{
              display: `grid`,
              justifyItems: `start`,
              gridGap: `2rem`,
            }}
          >
            {/* 
          // @ts-ignore */}
            <Toggle
              fieldName="subscriptionInterval"
              fieldValue={values.subscriptionInterval}
              label="Yearly payment"
              onChange={handleChange}
            />

            <Debug />
          </form>
        )}
      </Formik>
    </StoryUtils.Container>
  ))
  .add(`with a rich label`, () => {
    const [subInterval, setSubInterval] = useState(false)

    return (
      <StoryUtils.Container>
        <StoryUtils.Stack>
          {/* 
  // @ts-ignore */}
          <Toggle
            fieldName="subInterval"
            fieldValue={subInterval}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setSubInterval(e.target.checked)
            }}
            css={{
              alignItems: `flex-start`,
            }}
          >
            {/* 
          // @ts-ignore */}
            <Toggle.Wrapper
              css={{
                marginLeft: space[4],
                display: `flex`,
              }}
            >
              {/* 
            // @ts-ignore */}
              <Toggle.Input />
              {/* 
  // @ts-ignore */}
              <Toggle.Mark />
              {/* 
  // @ts-ignore */}
              <Toggle.Label
                css={{
                  marginLeft: space[3],
                }}
              >
                <strong
                  css={{
                    margin: 0,
                    color: colors.grey[50],
                  }}
                >
                  Yearly payment
                </strong>
                <p
                  css={{
                    margin: `${space[2]} 0 0 0`,
                    fontSize: fontSizes[1],
                    color: colors.grey[50],
                  }}
                >
                  This is label with HTML
                </p>
              </Toggle.Label>
            </Toggle.Wrapper>
          </Toggle>
        </StoryUtils.Stack>
      </StoryUtils.Container>
    )
  })
