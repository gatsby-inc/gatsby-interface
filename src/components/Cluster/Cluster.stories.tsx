/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import { storiesOf } from "@storybook/react"
import { radios, number, text } from "@storybook/addon-knobs"

import README from "./README.md"
import { StoryUtils } from "../../utils/storybook"
import { Cluster } from "./Cluster"
import { Stack } from "../Stack"
import { ClusterAlign, ClusterGap } from "./Cluster.helpers"
import { enumToOptions } from "../../utils/helpers"
const STACK_ALIGNS: ClusterAlign[] = [`center`, `left`, `right`]
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

const fewItems: React.ReactNode[] = [
  <Item>One</Item>,
  <Item>Two</Item>,
  <Item>Three</Item>,
]

const manyItems: React.ReactNode[] = [
  ...fewItems,
  <Item>Four</Item>,
  <Item>Five</Item>,
  <Item>Six</Item>,
  <Item>Seven</Item>,
  <Item>Eight</Item>,
  <Item>Nine</Item>,
  <Item>Ten</Item>,
  <Item>Eleven</Item>,
  <Item>Twelve</Item>,
  <Item>Thirteen</Item>,
]

const customStyles = {
  maxWidth: `30rem`,
  width: `100%`,
  border: `1px solid grey`,
}

storiesOf(`layout primitives/Cluster`, module)
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

    const verticalGap = number(`verticalGap (based on 'space' token)`, 5, {
      range: true,
      min: 0,
      max: 15,
      step: 1,
    })

    const align: ClusterAlign = radios(`align`, STACK_ALIGN_OPTIONS, `center`)

    function numberAsStackGap(gap: number): ClusterGap {
      return gap as ClusterGap
    }

    return (
      <StoryUtils.Container>
        <Stack gap={10} align="center">
          <p>
            gap = space[<strong>{gap}</strong>] <br /> verticalGap = space[
            <strong>{verticalGap}</strong>]
          </p>
          <Cluster
            gap={numberAsStackGap(gap)}
            verticalGap={numberAsStackGap(verticalGap)}
            align={align}
            css={customStyles}
          >
            {fewItems}
          </Cluster>
          <Cluster
            gap={numberAsStackGap(gap)}
            verticalGap={numberAsStackGap(verticalGap)}
            align={align}
            css={customStyles}
          >
            {manyItems}
          </Cluster>
        </Stack>
      </StoryUtils.Container>
    )
  })
  .add(`gap as string value`, () => {
    const align: ClusterAlign = radios(`align`, STACK_ALIGN_OPTIONS, `center`)

    const gap = text(`gap (e.g. 3px, 1rem')`, `1rem`)
    const verticalGap = text(`verticalGap (e.g. 3px, 1rem)`, `1rem`)

    return (
      <StoryUtils.Container>
        <Stack gap={10} align="center">
          <p>
            gap = <strong>{gap}</strong> <br /> verticalGap ={" "}
            <strong>{verticalGap}</strong>
          </p>
          <Cluster
            gap={gap}
            verticalGap={verticalGap}
            align={align}
            css={customStyles}
          >
            {fewItems}
          </Cluster>
          <Cluster
            gap={gap}
            verticalGap={verticalGap}
            align={align}
            css={customStyles}
          >
            {manyItems}
          </Cluster>
        </Stack>
      </StoryUtils.Container>
    )
  })
