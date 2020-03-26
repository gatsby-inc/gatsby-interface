/** @jsx jsx */
import { jsx } from "@emotion/core"
import { storiesOf } from "@storybook/react"
// import { StoryUtils } from "../../utils/storybook"
import { ConcealedValue } from "./"

storiesOf(`ConcealedValue`, module)
  .addParameters({
    options: {
      showPanel: true,
    },
  })

  .add(`base concealed value component`, () => {
    return (
      <div css={{ width: `300px` }}>
        <ConcealedValue value="xZCY2beK)ymCFGhdU8yLcpjWcMsYFyEVHqVvryrm2g9VPQqLMyTbo/XWmbEmtmpi" />
      </div>
    )
  })
