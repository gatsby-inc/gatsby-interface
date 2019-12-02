/** @jsx jsx */
import { jsx } from "@emotion/core"
import { useState } from "react"
import { Formik } from "formik"
import { storiesOf } from "@storybook/react"
import Debug from "../../utils/formik/Debug"
import { StoryUtils } from "../../utils/storybook"
import { Switch } from "."

storiesOf(`Switch`, module)
  .addParameters({
    options: {
      showPanel: true,
    },
  })
  .add(`usage`, () => {
    const [subInterval, setSubInterval] = useState(`MONTHLY`)

    return (
      <StoryUtils.Container>
        <Switch
          fieldName="interval"
          fieldValue={subInterval}
          onChange={e => {
            setSubInterval(e.target.value)
          }}
          options={{
            primary: {
              value: `YEARLY`,
              label: `YEARLY`,
              ariaLabel: `YEARLY PAYMENT`,
            },
            secondary: { value: `MONTHLY`, label: `MONTHLY` },
          }}
        />
      </StoryUtils.Container>
    )
  })
  .add(`with Formik`, () => (
    <StoryUtils.Container>
      <Formik
        initialValues={{
          subInterval: `MONTHLY`,
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
            <Switch
              fieldName="subInterval"
              fieldValue={values.subInterval}
              onChange={handleChange}
              options={{
                primary: {
                  value: `YEARLY`,
                  label: `YEARLY`,
                  ariaLabel: `YEARLY PAYMENT`,
                },
                secondary: { value: `MONTHLY`, label: `MONTHLY` },
              }}
            />
            <Debug />
          </form>
        )}
      </Formik>
    </StoryUtils.Container>
  ))
