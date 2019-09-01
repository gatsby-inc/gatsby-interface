/** @jsx jsx */
import { jsx } from "@emotion/core"
import React, { useState } from "react"

import { storiesOf } from "@storybook/react"

import { StoryUtils } from "../../../utils/storybook"
import { Formik } from "formik"
import Toggle from "./Toggle"
import Debug from "../../../utils/formik/Debug"

import { spaces } from "../../../utils/presets"
import fontSizes from "../../../theme/fontSizes"
import colors from "../../../theme/colors"

storiesOf(`core/Toggle`, module)
  .addParameters({
    options: {
      showPanel: true,
    },
  })
  .add(`shortcut usage`, () => {
    const [subInterval, setSubInterval] = useState(true)
    const [renew, setRenew] = useState(false)

    return (
      <StoryUtils.Container>
        <StoryUtils.Stack>
          <Toggle
            fieldName="subInterval"
            fieldValue={subInterval}
            label="Yearly payment"
            onChange={e => {
              setSubInterval(e.target.checked)
            }}
          />
          <Toggle
            fieldName="renew"
            fieldValue={renew}
            label="Automaticaly renew"
            onChange={e => {
              setRenew(e.target.checked)
            }}
          />
        </StoryUtils.Stack>
      </StoryUtils.Container>
    )
  })
  .add(`before or after label`, () => {
    const [subInterval, setSubInterval] = useState(true)
    const [renew, setRenew] = useState(true)

    return (
      <StoryUtils.Container>
        <StoryUtils.Stack>
          <Toggle
            fieldName="subInterval"
            fieldValue={subInterval}
            label="Yearly payment"
            inOnPosition={`RIGHT`}
            onChange={e => {
              setSubInterval(e.target.checked)
            }}
          />
          <Toggle
            fieldName="renew"
            fieldValue={renew}
            label="Automaticaly renew"
            inOnPosition={`LEFT`}
            onChange={e => {
              setRenew(e.target.checked)
            }}
          />
        </StoryUtils.Stack>
      </StoryUtils.Container>
    )
  })

  .add(`with Formik`, () => (
      <StoryUtils.Container>
        <Formik
          initialValues={{
            subscriptionInterval: false,
            automaticalRenew: false,
          }}
        >
          {({ values, handleChange }) => (
            <form
              css={{
                display: `grid`,
                justifyItems: `start`,
                gridGap: `2rem`,
              }}
            >
              <Toggle
                fieldName="subscriptionInterval"
                fieldValue={values.subscriptionInterval}
                label="Yearly payment"
                onChange={handleChange}
              />
              <Toggle
                fieldName="automaticalRenew"
                fieldValue={values.automaticalRenew}
                label="Automaticaly renew"
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

    Toggle.CustomLabel = () => {
      const { checked } = Toggle.useToggleContext()

      return (
        <Toggle.Label
          customCss={{
            marginLeft: spaces.s,
            paddingBottom: spaces[`2xs`],
            borderBottom: `1px dotted ${colors.grey[30]}`,
          }}
        >
          <strong
            css={{
              margin: 0,
              color: checked ? colors.purple[60] : colors.grey[50],
            }}
          >
            Yearly payment
          </strong>
          <p
            css={{
              margin: `${spaces[`2xs`]} 0 0 0`,
              fontSize: fontSizes[1],
              color: colors.grey[50],
            }}
          >
            This is label with HTML
          </p>
        </Toggle.Label>
      )
    }

    return (
      <StoryUtils.Container>
        <StoryUtils.Stack>
          <Toggle
            fieldName="subInterval"
            fieldValue={subInterval}
            onChange={e => {
              setSubInterval(e.target.checked)
            }}
            customCss={{
              alignItems: `flex-start`,
            }}
          >
            <Toggle.CustomLabel />
          </Toggle>
        </StoryUtils.Stack>
      </StoryUtils.Container>
    )
  })