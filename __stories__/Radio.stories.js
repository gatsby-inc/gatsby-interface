import React, { Fragment } from "react"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { linkTo } from "@storybook/addon-links"
import { MdArrowForward } from "react-icons/md"
import { radios, boolean } from "@storybook/addon-knobs"

import {
  RadioSkeleton,
  BaseRadio,
  Radio,
  ColorfulRadio,
} from "../src/components/Radio"

const mockValues = [
  {
    name: `Option 1`,
    value: `option_1`,
    label: `Option 1`,
  },
  {
    name: `Option 2`,
    value: `option_2`,
    label: `Option 2`,
  },
]

storiesOf(`Radio`, module)
  .add(
    `RadioSkeleton`,
    () => (
      <RadioSkeleton
        label={`Option 1`}
        fieldName={`Option 1`}
        optionValue={`option_1`}
        checked
        onChange={action(`Button was clicked`)}
      />
    ),
    {
      info: {
        text: `
          It's a functional building block, on which all other Radio components are build on. 
          **Never used directly** in the codebase.
        `,
      },
    }
  )
  .add(`BaseRadio`, () => (
    <BaseRadio
      label={`Option 1`}
      fieldName={`Option 1`}
      optionValue={`option_1`}
      checked
      onChange={action(`Button was clicked`)}
    />
  ))
  .add(`Radio`, () => (
    <Radio
      label={`Option 1`}
      fieldName={`Option 1`}
      optionValue={`option_1`}
      checked
      onChange={action(`Button was clicked`)}
    />
  ))
  .add(`ColorfulRadio`, () => (
    <ColorfulRadio
      label={`Option 1`}
      fieldName={`Option 1`}
      optionValue={`option_1`}
      checked
      onChange={action(`Button was clicked`)}
    />
  ))
