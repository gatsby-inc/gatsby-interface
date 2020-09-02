/** @jsx jsx */
import { jsx } from "@emotion/core"

import { storiesOf } from "@storybook/react"
import { StoryUtils } from "../../utils/storybook"
import VisuallyHidden from "./VisuallyHidden"
import { BlogIcon } from "../icons"

storiesOf(`VisuallyHidden`, module)
  .addParameters({
    options: {
      showPanel: true,
    },
  })
  .add(`with children`, () => (
    <StoryUtils.Container>
      <StoryUtils.Stack>
        (The text is hidden from view but exists in the DOM).
        <VisuallyHidden>
          I will be announced by screen readers but hidden from view.
        </VisuallyHidden>
      </StoryUtils.Stack>
    </StoryUtils.Container>
  ))
  .add(`wrapped in other elements`, () => (
    <StoryUtils.Container>
      <StoryUtils.Stack>
        (Text for an implicit heading).
        <h1>
          <VisuallyHidden>A text name for an implicit heading</VisuallyHidden>
        </h1>
        (A text name for an icon link).
        <a href="https://www.gatsbyjs.com/blog/">
          <BlogIcon />
          <VisuallyHidden>A text name for an icon link</VisuallyHidden>
        </a>
      </StoryUtils.Stack>
    </StoryUtils.Container>
  ))
