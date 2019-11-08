/** @jsx jsx */
import { jsx } from "@emotion/core"

import { storiesOf } from "@storybook/react"

import { BaseAnchor } from "./BaseAnchor"
import Readme from "./README.md"
import { StoryUtils } from "../../../utils/storybook"

storiesOf(`skeletons/BaseAnchor`, module)
  .addParameters({
    options: {
      showPanel: true,
    },
    readme: {
      sidebar: Readme,
    },
  })
  .add(`default`, () => (
    <StoryUtils.Container>
      <StoryUtils.Stack>
        <BaseAnchor href="https://gatsbyjs.com" target="_blank">
          Anchor
        </BaseAnchor>
      </StoryUtils.Stack>
    </StoryUtils.Container>
  ))
