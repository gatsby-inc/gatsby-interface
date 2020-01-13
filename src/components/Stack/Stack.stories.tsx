/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import { storiesOf } from "@storybook/react"
import { radios, number, text } from "@storybook/addon-knobs"

import README from "./README.md"
import { StoryUtils } from "../../utils/storybook"
import { Stack } from "./Stack"
import { StackAlign, StackGap } from "./Stack.helpers"
import { enumToOptions } from "../../utils/helpers"
const STACK_ALIGNS: StackAlign[] = [`justify`, `center`, `left`, `right`]
const STACK_ALIGN_OPTIONS = STACK_ALIGNS.reduce(enumToOptions, {})

const Item: React.FC<{}> = ({ children }) => (
  <div
    css={{
      background: `#eee`,
      padding: `0.5rem 1rem`,
    }}
  >
    {children}
  </div>
)

const Items: React.ReactNode[] = [
  <Item>What is Lorem Ipsum?</Item>,
  <Item>
    It has survived not only five centuries, but also the leap into electronic
    typesetting, remaining essentially unchanged.
  </Item>,
  <Item>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  </Item>,
]

storiesOf(`layout primitives/Stack`, module)
  .addParameters({
    options: {
      showPanel: true,
    },
    readme: {
      sidebar: README,
    },
  })
  .add(`gap as space token`, () => {
    const gap = number(`gap (based on 'space' token)`, 5, {
      range: true,
      min: 0,
      max: 15,
      step: 1,
    })

    const align: StackAlign = radios(`align`, STACK_ALIGN_OPTIONS, `justify`)

    function numberAsStackGap(gap: number): StackGap {
      return gap as StackGap
    }

    return (
      <StoryUtils.Container>
        <Stack gap={5} align="center">
          <p>
            Gap value = <strong>{gap}</strong> (based on the 'space'
            design-token)
          </p>
          <Stack gap={numberAsStackGap(gap)} align={align}>
            {Items}
          </Stack>
        </Stack>
      </StoryUtils.Container>
    )
  })
  .add(`gap as string value`, () => {
    const align: StackAlign = radios(`align`, STACK_ALIGN_OPTIONS, `justify`)

    const gap = text(`string gap (need units e.g. '3px')`, `1rem`)

    return (
      <StoryUtils.Container>
        <Stack gap={5} align="center">
          <p>
            Gap value = <strong>{gap}</strong> (set as string value)
          </p>
          <Stack gap={gap} align={align}>
            {Items}
          </Stack>
        </Stack>
      </StoryUtils.Container>
    )
  })
