/** @jsx jsx */
import { jsx } from "@emotion/core"

import { MdFlashOn } from "react-icons/md"
import { storiesOf } from "@storybook/react"

import { StoryUtils } from "../../utils/storybook"
import { Badge } from "."

storiesOf(`Badge`, module)
  .addParameters({
    options: {
      showPanel: true,
    },
  })
  .add(`variants`, () => (
    <StoryUtils.Container>
      <StoryUtils.Stack>
        <Badge variant={`PILL`}>New</Badge>
        <StoryUtils.StackItem>
          <Badge variant={`STATUS`}>
            Connected <MdFlashOn />
          </Badge>
          <StoryUtils.Default />
        </StoryUtils.StackItem>
      </StoryUtils.Stack>
    </StoryUtils.Container>
  ))
  .add(`shortcut usage`, () => (
    <StoryUtils.Container>
      <StoryUtils.Stack>
        <Badge variant={`PILL`} label="New" />
      </StoryUtils.Stack>
    </StoryUtils.Container>
  ))
