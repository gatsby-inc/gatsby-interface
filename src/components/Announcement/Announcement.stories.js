/** @jsx jsx */
import { jsx } from "@emotion/core"

import { storiesOf } from "@storybook/react"

import { StoryUtils } from "../../utils/storybook"
import { Announcement } from "./"

storiesOf(`Announcement`, module)
  .addParameters({
    options: {
      showPanel: true,
    },
  })
  .add(`default usage`, () => (
    <StoryUtils.Container>
      <StoryUtils.Stack>
        <Announcement>
          We are working on adding more integrations all the time—watch your
          inbox!
        </Announcement>
      </StoryUtils.Stack>
    </StoryUtils.Container>
  ))
