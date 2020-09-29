import * as React from "react"
import { makeDecorator, useChannel } from "@storybook/addons"
import { EVENTS } from "@storybook/addon-a11y/dist/constants"

export const withA11yCheck = makeDecorator({
  name: "withA11yCheck",
  parameterName: "a11yCheck",
  wrapper: (storyFn, context) => {
    const [violations, setViolations] = React.useState([])

    useChannel({
      [EVENTS.RESULT]: ({ violations }) => {
        setViolations(violations)
        console.log(violations)
      },
    })

    if (violations.length > 0) {
      throw new Error(`
Accessibility violations found:
${violations.map(
  item => `
Rule: ${item.id}
Help: ${item.helpUrl}
Affected Nodes:
${item.nodes.map(
  node => `
  ${node.target.toString()}
    ${node.failureSummary.replace(/\n/, `\n    `)}
`
)}
`
)}        
`)
    }

    return storyFn(context)
  },
})
