/** @jsx jsx */
import { jsx } from "@emotion/core"
import { storiesOf } from "@storybook/react"
import { radios, number, text } from "@storybook/addon-knobs"

import README from "./README.md"
import { StoryUtils } from "../../utils/storybook"
import { getStackStyles, StackAlign, StackGap } from "./stack"
import { enumToOptions } from "../../utils/helpers"
import { Theme } from "../../theme"
import {
  borderUtilCss,
  Container,
  Item,
} from "../../utils/storybook/layoutHelpers"

const STACK_ALIGNS: StackAlign[] = [`justify`, `center`, `left`, `right`]
const STACK_ALIGN_OPTIONS = STACK_ALIGNS.reduce(enumToOptions, {})

storiesOf(`layout helpers/stack`, module)
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

    const { stackCss, stackItemCss } = getStackStyles({
      gap: numberAsStackGap(0),
      responsiveGap: {
        phablet: numberAsStackGap(5),
        tablet: numberAsStackGap(9),
      },
      align: align,
    })

    return (
      <StoryUtils.Container>
        <Container
          description={`Gap value = ${gap} (based on the 'space' design-token)`}
        >
          <div css={(t: Theme) => [stackCss, borderUtilCss(t)]}>
            <Item css={stackItemCss}>What is Lorem Ipsum?</Item>
            <Item css={stackItemCss}>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </Item>
            <Item css={stackItemCss}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Item>
          </div>
        </Container>
      </StoryUtils.Container>
    )
  })
  .add(`gap as string value`, () => {
    const align: StackAlign = radios(`align`, STACK_ALIGN_OPTIONS, `justify`)

    const gap = text(`string gap (need units e.g. '3px')`, `1rem`)

    const { stackCss, stackItemCss } = getStackStyles({
      gap: gap,
      align: align,
    })

    return (
      <StoryUtils.Container>
        <Container description={`Gap value = ${gap} (set as string value)`}>
          <div css={(t: Theme) => [stackCss, borderUtilCss(t)]}>
            <Item css={stackItemCss}>What is Lorem Ipsum?</Item>
            <Item css={stackItemCss}>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </Item>
            <Item css={stackItemCss}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Item>
          </div>
        </Container>
      </StoryUtils.Container>
    )
  })
