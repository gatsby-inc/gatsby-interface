/** @jsx jsx */
import { jsx } from "@emotion/core"
import React, { useState } from "react"

import { storiesOf } from "@storybook/react"

import { StoryUtils } from "../../../utils/storybook"
import ToggleTip from "./ToggleTip"

import { spaces } from "../../../theme"
import fontSizes from "../../../theme/fontSizes"
import colors from "../../../theme/colors"

storiesOf(`core/ToggleTip`, module)
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
