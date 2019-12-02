/** @jsx jsx */
import { jsx } from "@emotion/core"
import { useState } from "react"
import { storiesOf } from "@storybook/react"
import { StoryUtils } from "../../utils/storybook"
import { Formik } from "formik"
import { Toggle } from "./"
import Debug from "../../utils/formik/Debug"

import { spaces } from "../../utils/presets"
import fontSizes from "../../theme/fontSizes"
import colors from "../../theme/colors"

storiesOf(`Toggle`, module)
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
          <Toggle
            fieldName="subInterval"
            fieldValue={subInterval}
            onChange={e => {
              setSubInterval(e.target.checked)
            }}
            css={{
              alignItems: `flex-start`,
            }}
          >
            <Toggle.Wrapper
              css={{
                marginLeft: spaces.s,
                display: `flex`,
              }}
            >
              <Toggle.Input />
              <Toggle.Mark />
              <Toggle.Label
                css={{
                  marginLeft: spaces.xs,
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
                    margin: `${spaces[`2xs`]} 0 0 0`,
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
