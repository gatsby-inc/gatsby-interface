/** @jsx jsx */
import { jsx } from "@emotion/core"

import { storiesOf } from "@storybook/react"

import { MdSync } from "react-icons/md"
import { BaseButton } from "./"
import Readme from "./README.md"
import { text, boolean } from "@storybook/addon-knobs"
import { StoryUtils } from "../../utils/storybook"

storiesOf(`buttons/BaseButton`, module)
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
        <BaseButton>Button</BaseButton>
      </StoryUtils.Stack>
    </StoryUtils.Container>
  ))
  .add(`with loading state`, () => (
    <StoryUtils.Container>
      <StoryUtils.Stack>
        <BaseButton
          loading={boolean(`loading`, true)}
          loadingLabel={text(`loadingLabel`, `Loading...`)}
          LoadingIcon={boolean(`show LoadingIcon`, true) ? MdSync : undefined}
        >
          Button
        </BaseButton>
      </StoryUtils.Stack>
    </StoryUtils.Container>
  ))
