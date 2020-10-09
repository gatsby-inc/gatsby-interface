/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Placeholder, PlaceholderBox } from "./"
import { fadeAnimationCss } from "./Fade"
import { disableAnimationsDecorator } from "../../utils/storybook/disableAnimationsDecorator"
import { DecoratorFn } from "@storybook/react"

export default {
  title: `Placeholder`,
  component: Placeholder,
  subcomponents: {
    Placeholder,
    PlaceholderBox,
  },
  decorators: [disableAnimationsDecorator] as DecoratorFn[],
}

export const PlaceholderDefault = () => {
  return (
    <div css={{ width: "400px" }}>
      <Placeholder
        animation={fadeAnimationCss}
        css={{
          gridTemplateColumns: "auto 1fr auto",
          gridTemplateRows: "1fr 1fr 1fr",
          gridTemplateAreas: `
          "left top right"
          "left middle right"
          "left bottom right"`,
        }}
      >
        <PlaceholderBox width="40px" height="40px" css={{ gridArea: "left" }} />

        <PlaceholderBox width="70%" css={{ gridArea: "top" }} />
        <PlaceholderBox css={{ gridArea: "middle" }} />
        <PlaceholderBox width="30%" css={{ gridArea: "bottom" }} />

        <PlaceholderBox
          width="40px"
          height="40px"
          css={{ gridArea: "right" }}
        />
      </Placeholder>
    </div>
  )
}
