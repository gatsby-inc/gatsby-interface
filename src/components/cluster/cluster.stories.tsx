/** @jsx jsx */
import { jsx } from "@emotion/core"
import { storiesOf } from "@storybook/react"
import { radios, number, text } from "@storybook/addon-knobs"

import README from "./README.md"
import { StoryUtils } from "../../utils/storybook"
import { getClusterStyles, ClusterAlign, ClusterGap } from "./cluster"
import { enumToOptions } from "../../utils/helpers"
import { useTheme, ThemeProvider } from "../ThemeProvider"
import {
  borderUtilCss,
  Container,
  Item,
} from "../../utils/storybook/layoutHelpers"

const CLUSTER_ALIGNS: ClusterAlign[] = [`center`, `left`, `right`]
const CLUSTER_ALIGN_OPTIONS = CLUSTER_ALIGNS.reduce(enumToOptions, {})

storiesOf(`layout helpers/cluster`, module)
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

      const verticalGap = number(`verticalGap (based on 'space' token)`, 5, {
        range: true,
        min: 0,
        max: 15,
        step: 1,
      })

      const align: ClusterAlign = radios(`align`, CLUSTER_ALIGN_OPTIONS, `left`)

      function numberAsStackGap(gap: number): ClusterGap {
        return gap as ClusterGap
      }

      const { clusterCss, clusterItemCss } = getClusterStyles({
        gap: numberAsStackGap(gap),
        verticalGap: numberAsStackGap(verticalGap),
        align: align,
        theme: useTheme(),
      })

      return (
        <StoryUtils.Container>
          <Container
            description={`Gap value = ${gap} (based on the 'space' design-token)`}
          >
            <div css={borderUtilCss}>
              <div css={clusterCss}>
                <Item css={clusterItemCss}>One</Item>
                <Item css={clusterItemCss}>Two</Item>
                <Item css={clusterItemCss}>Three</Item>
              </div>
            </div>

            <div css={borderUtilCss}>
              <div css={clusterCss}>
                <Item css={clusterItemCss}>One</Item>
                <Item css={clusterItemCss}>Two</Item>
                <Item css={clusterItemCss}>Three</Item>
                <Item css={clusterItemCss}>Four</Item>
                <Item css={clusterItemCss}>Five</Item>
                <Item css={clusterItemCss}>Six</Item>
                <Item css={clusterItemCss}>Seven</Item>
                <Item css={clusterItemCss}>Eight</Item>
                <Item css={clusterItemCss}>Nine</Item>
                <Item css={clusterItemCss}>Ten</Item>
              </div>
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
      const align: ClusterAlign = radios(`align`, CLUSTER_ALIGN_OPTIONS, `left`)

      const gap = text(`gap (e.g. 3px, 1rem')`, `1rem`)
      const verticalGap = text(`verticalGap (e.g. 3px, 1rem)`, `1rem`)

      const { clusterCss, clusterItemCss } = getClusterStyles({
        gap: gap,
        verticalGap: verticalGap,
        align: align,
        theme: useTheme(),
      })

      return (
        <StoryUtils.Container>
          <Container
            description={`Gap value = ${gap} (based on the 'space' design-token)`}
          >
            <div css={borderUtilCss}>
              <div css={clusterCss}>
                <Item css={clusterItemCss}>One</Item>
                <Item css={clusterItemCss}>Two</Item>
                <Item css={clusterItemCss}>Three</Item>
              </div>
            </div>

            <div css={borderUtilCss}>
              <div css={clusterCss}>
                <Item css={clusterItemCss}>One</Item>
                <Item css={clusterItemCss}>Two</Item>
                <Item css={clusterItemCss}>Three</Item>
                <Item css={clusterItemCss}>Four</Item>
                <Item css={clusterItemCss}>Five</Item>
                <Item css={clusterItemCss}>Six</Item>
                <Item css={clusterItemCss}>Seven</Item>
                <Item css={clusterItemCss}>Eight</Item>
                <Item css={clusterItemCss}>Nine</Item>
                <Item css={clusterItemCss}>Ten</Item>
              </div>
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
  .add(`with responsiveGaps`, () => {
    function TestComponent() {
      const { clusterCss, clusterItemCss } = getClusterStyles({
        gap: 0,
        verticalGap: 0,
        responsiveGaps: {
          phablet: { gap: 4, verticalGap: 2 },
          desktop: { gap: 8, verticalGap: 4 },
        },
        theme: useTheme(),
      })

      return (
        <StoryUtils.Container>
          <Container
            description={`Gap value =  (based on the 'space' design-token)`}
          >
            <div css={borderUtilCss}>
              <div css={clusterCss}>
                <Item css={clusterItemCss}>One</Item>
                <Item css={clusterItemCss}>Two</Item>
                <Item css={clusterItemCss}>Three</Item>
              </div>
            </div>

            <div css={borderUtilCss}>
              <div css={clusterCss}>
                <Item css={clusterItemCss}>One</Item>
                <Item css={clusterItemCss}>Two</Item>
                <Item css={clusterItemCss}>Three</Item>
                <Item css={clusterItemCss}>Four</Item>
                <Item css={clusterItemCss}>Five</Item>
                <Item css={clusterItemCss}>Six</Item>
                <Item css={clusterItemCss}>Seven</Item>
                <Item css={clusterItemCss}>Eight</Item>
                <Item css={clusterItemCss}>Nine</Item>
                <Item css={clusterItemCss}>Ten</Item>
              </div>
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
