/** @jsx jsx */
import { jsx } from "@emotion/core"
import { storiesOf } from "@storybook/react"
import { ConcealedValue } from "./"

storiesOf(`ConcealedValue`, module)
  .addParameters({
    options: {
      showPanel: true,
    },
  })

  .add(`base concealed value component`, () => <ConcealedValue value="abc" />)
