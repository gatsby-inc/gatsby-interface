/** @jsx jsx */
import { jsx } from "@emotion/core"
import { StoryFn } from "@storybook/addons"
import { StoryFnReactReturnType } from "@storybook/react/dist/client/preview/types"
import { Theme } from "../../theme"

export function withVariationsContainer(
  story: StoryFn<StoryFnReactReturnType>
) {
  return (
    <div
      css={(theme: Theme) => ({
        display: `grid`,
        gridGap: theme.space[8],
        justifyItems: `baseline`,
      })}
    >
      {story()}
    </div>
  )
}
