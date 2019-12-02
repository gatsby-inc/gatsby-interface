/** @jsx jsx */
import { jsx } from "@emotion/core"
import { storiesOf } from "@storybook/react"
import { BaseLink } from "./"
import Readme from "./README.md"
import { StoryUtils } from "../../utils/storybook"

storiesOf(`BaseLink`, module)
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
        <BaseLink to="/">Link</BaseLink>
      </StoryUtils.Stack>
    </StoryUtils.Container>
  ))
