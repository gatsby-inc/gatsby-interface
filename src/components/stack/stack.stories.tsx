/** @jsx jsx */
import { jsx } from "@emotion/core"
import { storiesOf } from "@storybook/react"
import { radios, number, text } from "@storybook/addon-knobs"

import README from "./README.md"
import { StoryUtils } from "../../utils/storybook"
import { getStackStyles, StackAlign, StackGap } from "./stack"
import { enumToOptions } from "../../utils/helpers"
import { Theme } from "../../theme"
import { useTheme, ThemeProvider } from "../ThemeProvider"
import {
  borderUtilCss,
  Container,
  Item,
} from "../../utils/storybook/layoutHelpers"

const STACK_ALIGNS: StackAlign[] = [`stretch`, `center`, `left`, `right`]
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
    function TestComponent() {
      const gap = number(`gap (based on 'space' token)`, 5, {
        range: true,
        min: 0,
        max: 15,
        step: 1,
      })

      const align: StackAlign = radios(`align`, STACK_ALIGN_OPTIONS, `stretch`)

      function numberAsStackGap(gap: number): StackGap {
        return gap as StackGap
      }

      const { stackCss, stackItemCss } = getStackStyles({
        gap: numberAsStackGap(gap),
        align: align,
        theme: useTheme(),
      })

      return (
        <StoryUtils.Container>
          <Container
            description={`Gap value = ${gap} (based on the 'space' design-token)`}
          >
            <div css={(t: Theme) => [stackCss, borderUtilCss(t)]}>
              <Item css={stackItemCss}>What is Lorem Ipsum?</Item>
              <Item css={stackItemCss}>
                It has survived not only five centuries
              </Item>
              <Item css={stackItemCss}>Lorem Ipsum is simply dummy</Item>
            </div>
          </Container>
        </StoryUtils.Container>
      )
    }

    return (
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )
  })
  .add(`gap as string value`, () => {
    function TestComponent() {
      const align: StackAlign = radios(`align`, STACK_ALIGN_OPTIONS, `stretch`)

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
                It has survived not only five centuries
              </Item>
              <Item css={stackItemCss}>
                Lorem Ipsum is simply dummy industry.
              </Item>
            </div>
          </Container>
        </StoryUtils.Container>
      )
    }

    return (
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )
  })
  .add(`with responsiveGap`, () => {
    function TestComponent() {
      const { stackCss, stackItemCss } = getStackStyles({
        gap: 0,
        responsiveGap: {
          phablet: 3,
          tablet: 7,
          desktop: 10,
        },
        theme: useTheme(),
      })

      return (
        <StoryUtils.Container>
          <Container
            description={`gap = 0, responsiveGap = { phablet: 3, tablet: 7, desktop: 10 }`}
          >
            <div css={(t: Theme) => [stackCss, borderUtilCss(t)]}>
              <Item css={stackItemCss}>What is Lorem Ipsum?</Item>
              <Item css={stackItemCss}>
                It has survived not only five centuries
              </Item>
              <Item css={stackItemCss}>
                Lorem Ipsum is simply dummy industry.
              </Item>
            </div>
          </Container>
        </StoryUtils.Container>
      )
    }

    return (
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )
  })
  .add(`directions`, () => {
    function TestComponent() {
      const { stackCss, stackItemCss } = getStackStyles({
        gap: 6,
        theme: useTheme(),
      })

      const {
        stackCss: horizontalStackCss,
        stackItemCss: horizontalStackItemCss,
      } = getStackStyles({
        gap: 6,
        direction: `row`,
        theme: useTheme(),
      })

      return (
        <StoryUtils.Container>
          <Container
            description={`direction = 'column' (default value) and direction = 'row'`}
          >
            <div css={(t: Theme) => [stackCss, borderUtilCss(t)]}>
              <Item css={stackItemCss}>One</Item>
              <Item css={stackItemCss}>Two</Item>
              <Item css={stackItemCss}>Three</Item>
              <Item css={stackItemCss}>Four</Item>
            </div>

            <div
              tabIndex={0}
              css={(t: Theme) => [horizontalStackCss, borderUtilCss(t)]}
            >
              <Item css={[horizontalStackItemCss, { width: `200px` }]}>
                One
              </Item>
              <Item css={[horizontalStackItemCss, { width: `200px` }]}>
                Two
              </Item>
              <Item css={[horizontalStackItemCss, { width: `200px` }]}>
                Three
              </Item>
              <Item css={[horizontalStackItemCss, { width: `200px` }]}>
                Four
              </Item>
            </div>
          </Container>
        </StoryUtils.Container>
      )
    }

    return (
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )
  })
