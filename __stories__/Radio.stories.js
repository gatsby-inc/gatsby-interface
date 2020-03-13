import React, { useState } from "react"
import styled from "@emotion/styled"

import { storiesOf } from "@storybook/react"
import { radios } from "@storybook/addon-knobs"

import { Radio, RadioSkeleton } from "../src/components/Radio"
import fonts from "../src/theme/fonts"
import fontSizes from "../src/theme/fontSizes"
import colors from "../src/theme/colors"
import space from "../src/theme/space"

const Form = styled(`form`)`
  min-width: 20rem;
`

const CustomRadio1 = styled(Radio)`
  & > label {
    & > span {
      display: flex;
      flex-direction: column;

      strong {
        font-size: ${fontSizes[4]};
        font-weight: 800;
        font-family: ${fonts.heading};
      }

      span {
        color: ${colors.grey[60]};
        font-size: ${fontSizes[1]};
        margin: 0;
        margin-top: ${space[2]};
      }
    }
  }
`

const CustomRadio2 = styled(Radio)`
  label {
    &.emphasized {
      padding: ${space[7]} ${space[8]};

      :after,
      :before {
        display: none;
      }

      & > span {
        display: flex;
        flex-direction: column;

        strong {
          font-size: ${fontSizes.l};
          font-weight: 800;
          font-family: ${fonts.heading};
        }

        span {
          color: ${colors.grey[60]};
          font-size: ${fontSizes[1]};
          margin: 0;
          margin-top: ${space[2]};
        }
      }
    }
  }
  &.selected {
    label {
      &.emphasized {
        padding: ${space[7]} ${space[8]};
      }
    }
  }
`

const selectionStyles = {
  standard: `standard`,
  emphasized: `emphasized`,
}

const options = [
  {
    value: 1,
    label: `First Option`,
  },
  {
    value: 2,
    label: `Second Option`,
  },
  {
    value: 3,
    label: `Third Option`,
  },
]

storiesOf(`Radio`, module)
  .add(
    `RadioSkeleton`,
    () =>
      React.createElement(() => {
        const [fieldValue, setFieldValue] = useState(1)

        return options.map(option => (
          <RadioSkeleton
            key={`field${option.value}`}
            fieldName="field"
            id={`field${option.value}`}
            label={option.label}
            value={option.value}
            optionValue={fieldValue}
            onChange={() => setFieldValue(option.value)}
          />
        ))
      }),
    {
      info: {
        text: `
          It's a functional unstyled building block, on which Radio components is built on. 
        `,
      },
    }
  )
  .add(`Radio`, () =>
    React.createElement(() => {
      const [fieldValue, setFieldValue] = useState(1)

      return (
        <Form>
          {options.map(option => (
            <Radio
              key={`field${option.value}`}
              fieldName="field"
              id={`field${option.value}`}
              label={option.label}
              value={option.value}
              optionValue={fieldValue}
              onChange={() => setFieldValue(option.value)}
              selectionStyle={radios(
                `selectionStyle`,
                selectionStyles,
                `standard`
              )}
            />
          ))}
        </Form>
      )
    })
  )

storiesOf(`Radio/in use`, module)
  .add(`Radio with HTML content label`, () =>
    React.createElement(() => {
      const [fieldValue, setFieldValue] = useState(1)

      return (
        <Form>
          {options.map(option => (
            <CustomRadio1
              key={`field${option.value}`}
              fieldName="field"
              id={`field${option.value}`}
              label={`<span><strong>${option.label}</strong><span>This is label with HTML content</span></span>`}
              value={option.value}
              optionValue={fieldValue}
              onChange={() => setFieldValue(option.value)}
              selectionStyle="emphasized"
            />
          ))}
        </Form>
      )
    })
  )
  .add(`Radio without input symbol`, () =>
    React.createElement(() => {
      const [fieldValue, setFieldValue] = useState(1)

      return (
        <Form>
          {options.map(option => (
            <CustomRadio2
              key={`field${option.value}`}
              fieldName="field"
              id={`field${option.value}`}
              label={`<span><strong>${option.label}</strong><span>This is label with HTML content</span></span>`}
              value={option.value}
              optionValue={fieldValue}
              onChange={() => setFieldValue(option.value)}
              selectionStyle="emphasized"
            />
          ))}
        </Form>
      )
    })
  )
