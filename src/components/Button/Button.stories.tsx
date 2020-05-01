/** @jsx jsx */
import { jsx } from "@emotion/core"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import { Button } from "./Button"

import README_MAIN from "./README_MAIN.md"
import README_ICONS from "./README_ICONS.md"
import customStyling from "./README_customStyling.md"
import README_MANUAL_STYLING from "./README_MANUAL_STYLING.md"
import { getButtonCss } from "../../theme/styles/button"
import { StoryUtils } from "../../utils/storybook"
import {
  showcaseVariants,
  showcaseSizes,
  showcaseTones,
  showcaseCustomStyles,
  showcaseIcons,
} from "./utils/storybook-styles"
import { MdCloud } from "react-icons/md"

storiesOf(`buttons/Button`, module)
  .addParameters({
    componentSubtitle:
      "Buttons allow users to take actions and make choices. They are common in dialogs, forms, panels, and pages: An example of their usage is confirming the deletion of a user in a dialog.",
    options: {
      showPanel: true,
    },
    readme: {
      sidebar: README_MAIN,
      includePropTables: [Button],
    },
  })
  .add(...showcaseVariants(Button, {}))
  .add(...showcaseSizes(Button, {}))
  .add(...showcaseTones(Button, {}))
  .add(...showcaseCustomStyles(Button, {}, customStyling))
  .add(...showcaseIcons(Button, {}, README_ICONS))
  .add(`in 'loading' state`, () => (
    <StoryUtils.Container>
      <StoryUtils.Stack>
        <Button onClick={action(`Button was clicked`)} loading={true}>
          Button in loading state
        </Button>
        <Button
          onClick={action(`Button was clicked`)}
          loading={true}
          loadingLabel={`Custom loading label`}
        >
          Button in loading state
        </Button>
      </StoryUtils.Stack>
    </StoryUtils.Container>
  ))
  .add(
    `custom button component`,
    () => {
      function CustomButton(props: JSX.IntrinsicElements["button"]) {
        return <button {...props} onClick={action("click custom component")} />
      }

      return (
        <StoryUtils.Container>
          <StoryUtils.Stack>
            <Button ButtonComponent={CustomButton} rightIcon={<MdCloud />}>
              Custom component
            </Button>
          </StoryUtils.Stack>
        </StoryUtils.Container>
      )
    },
    {
      readme: {
        sidebar: README_MANUAL_STYLING,
      },
    }
  )
  .add(
    `manually applied styles`,
    () => (
      <StoryUtils.Container>
        <StoryUtils.Stack>
          <button css={getButtonCss({ size: `L`, tone: `BRAND` })}>
            I'm a &lt;button&gt; but I look like the &lt;Button&gt;
          </button>
        </StoryUtils.Stack>
      </StoryUtils.Container>
    ),
    {
      readme: {
        sidebar: README_MANUAL_STYLING,
      },
    }
  )
