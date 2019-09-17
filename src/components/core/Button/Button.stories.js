/** @jsx jsx */
import { jsx } from "@emotion/core"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { MdArrowForward } from "react-icons/md"
import { radios } from "@storybook/addon-knobs"
import {
  BUTTON_SIZES,
  BUTTON_TONES,
  BUTTON_VARIANTS,
} from "../../../utils/options"
import Button from "./Button"
import {
  PrimaryButton,
  SecondaryButton,
  CancelButton,
  SuccessButton,
  TextButton,
  PrimaryDeleteButton,
  SecondaryDeleteButton,
} from "./Buttons"
import README_MAIN from "./README_MAIN.md"
import README_ICONS from "./README_ICONS.md"
import customStyling from "./README_customStyling.md"
import README_MANUAL_STYLING from "./README_MANUAL_STYLING.md"
import README_LEGACY from "./README_LEGACY.md"
import colors from "../../../theme/colors"
import styles from "../../../theme/styles/button"
import { StoryUtils } from "../../../utils/storybook"

storiesOf(`core/Button`, module)
  .addParameters({
    options: {
      showPanel: true,
    },
    readme: {
      sidebar: README_MAIN,
      includePropTables: [Button],
    },
  })
  .add(`variants`, () => (
    <StoryUtils.Container>
      <StoryUtils.Stack>
        <Button
          onClick={action(`Button was clicked`)}
          size={radios(`size`, BUTTON_SIZES, `L`)}
          tone={radios(`tone`, BUTTON_TONES, `BRAND`)}
        >
          {`Button variant 'PRIMARY'`}
        </Button>
        <Button
          onClick={action(`Button was clicked`)}
          variant={`SECONDARY`}
          size={radios(`size`, BUTTON_SIZES, `L`)}
          tone={radios(`tone`, BUTTON_TONES, `BRAND`)}
        >
          {`Button variant 'SECONDARY'`}
        </Button>
        <Button
          onClick={action(`Button was clicked`)}
          variant={`GHOST`}
          size={radios(`size`, BUTTON_SIZES, `L`)}
          tone={radios(`tone`, BUTTON_TONES, `BRAND`)}
        >
          {`Button variant 'GHOST'`}
        </Button>
      </StoryUtils.Stack>
    </StoryUtils.Container>
  ))
  .add(`sizes`, () => (
    <StoryUtils.Container>
      <StoryUtils.Stack>
        <Button
          onClick={action(`Button was clicked`)}
          size={`XL`}
          variant={radios(`variant`, BUTTON_VARIANTS, `PRIMARY`)}
          tone={radios(`tone`, BUTTON_TONES, `BRAND`)}
        >
          {`Button size 'XL'`}
        </Button>
        <Button
          onClick={action(`Button was clicked`)}
          variant={radios(`variant`, BUTTON_VARIANTS, `PRIMARY`)}
          tone={radios(`tone`, BUTTON_TONES, `BRAND`)}
        >
          {`Button size 'L'`}
        </Button>
        <Button
          onClick={action(`Button was clicked`)}
          size={`M`}
          variant={radios(`variant`, BUTTON_VARIANTS, `PRIMARY`)}
          tone={radios(`tone`, BUTTON_TONES, `BRAND`)}
        >
          {`Button size 'M'`}
        </Button>
        <Button
          onClick={action(`Button was clicked`)}
          size={`S`}
          variant={radios(`variant`, BUTTON_VARIANTS, `PRIMARY`)}
          tone={radios(`tone`, BUTTON_TONES, `BRAND`)}
        >
          {`Button size 'S'`}
        </Button>
      </StoryUtils.Stack>
    </StoryUtils.Container>
  ))
  .add(`tones`, () => (
    <StoryUtils.Container>
      <StoryUtils.Stack>
        <Button
          onClick={action(`Button was clicked`)}
          tone={`BRAND`}
          variant={radios(`variant`, BUTTON_VARIANTS, `PRIMARY`)}
          size={radios(`size`, BUTTON_SIZES, `L`)}
        >
          {`Button tone 'BRAND'`}
        </Button>
        <Button
          onClick={action(`Button was clicked`)}
          tone={`SUCCESS`}
          variant={radios(`variant`, BUTTON_VARIANTS, `PRIMARY`)}
          size={radios(`size`, BUTTON_SIZES, `L`)}
        >
          {`Button tone 'SUCCESS'`}
        </Button>
        <Button
          onClick={action(`Button was clicked`)}
          tone={`DANGER`}
          variant={radios(`variant`, BUTTON_VARIANTS, `PRIMARY`)}
          size={radios(`size`, BUTTON_SIZES, `L`)}
        >
          {`Button tone 'DANGER'`}
        </Button>
        <Button
          onClick={action(`Button was clicked`)}
          tone={`NEUTRAL`}
          variant={radios(`variant`, BUTTON_VARIANTS, `PRIMARY`)}
          size={radios(`size`, BUTTON_SIZES, `L`)}
        >
          {`Button tone 'NEUTRAL'`}
        </Button>
      </StoryUtils.Stack>
    </StoryUtils.Container>
  ))
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
    `with icons`,
    () => (
      <StoryUtils.Container>
        <StoryUtils.Stack>
          <Button onClick={action(`Button was clicked`)}>
            On the right
            <MdArrowForward />
          </Button>
          <Button onClick={action(`Button was clicked`)}>
            <MdArrowForward /> On the left
          </Button>

          <Button
            onClick={action(`Button was clicked`)}
            label="With default icon"
          />
        </StoryUtils.Stack>
      </StoryUtils.Container>
    ),
    {
      readme: {
        sidebar: README_ICONS,
      },
    }
  )
  .add(
    `override/extend styles`,
    () => (
      <StoryUtils.Container>
        <StoryUtils.Stack>
          <Button
            onClick={action(`Button was clicked`)}
            label={`Button with custom style`}
            css={{
              color: colors.purple[60],
              background: colors.yellow[60],
              borderColor: colors.yellow[60],

              "&:hover:not([disabled])": {
                color: colors.white,
              },
            }}
          />
        </StoryUtils.Stack>
      </StoryUtils.Container>
    ),
    {
      readme: {
        sidebar: customStyling,
      },
    }
  )
  .add(
    `manually applied styles`,
    () => (
      <StoryUtils.Container>
        <StoryUtils.Stack>
          <button
            css={{
              ...styles.base(),
              ...styles.sizes[`L`],
              ...styles.variants[`PRIMARY`]({ tone: `BRAND` }),
            }}
          >
            {`I'm a <button> but I look like the <Button>`}
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
  .add(
    `legacy Buttons`,
    () => (
      <StoryUtils.Container>
        <StoryUtils.Stack>
          <PrimaryButton>PrimaryButton</PrimaryButton>
          <SecondaryButton>SecondaryButton</SecondaryButton>
          <CancelButton>CancelButton</CancelButton>
          <SuccessButton>SuccessButton</SuccessButton>
          <TextButton>TextButton</TextButton>
          <PrimaryDeleteButton>PrimaryDeleteButton</PrimaryDeleteButton>
          <SecondaryDeleteButton>SecondaryDeleteButton</SecondaryDeleteButton>
        </StoryUtils.Stack>
      </StoryUtils.Container>
    ),
    {
      readme: {
        sidebar: README_LEGACY,
      },
    }
  )
