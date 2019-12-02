/** @jsx jsx */
import { jsx } from "@emotion/core"
import { storiesOf } from "@storybook/react"
import { StoryUtils } from "../../utils/storybook"
import { ToggleTip } from "./"

storiesOf(`ToggleTip`, module)
  .addParameters({
    options: {
      showPanel: true,
    },
  })
  .add(`shortcut usage`, () => (
    <StoryUtils.Container>
      <StoryUtils.Stack>
        <p>
          This is a text with ToggleTip{` `}
          <ToggleTip
            tip="Toggletips are like tooltips in the sense that they can provide
            supplementary or clarifying information."
          />
        </p>
      </StoryUtils.Stack>
    </StoryUtils.Container>
  ))
