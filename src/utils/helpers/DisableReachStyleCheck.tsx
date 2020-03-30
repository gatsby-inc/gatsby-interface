import React from "react"

/**
 * To mark our components built on top of ReachUI as safe for tree-shaking, we have to apply global styles
 * from @reach/<component>/styles.css locally via Emotion instead of importing them
 *
 * However, @reach/<component>> will display a warning if we do so,
 * and this is what this hack component is for.
 *
 * It MUST be a component, so that it can be rendered before/at the same time as the ReachUI component
 */
export function DisableReachStyleCheck({
  reachComponent,
}: {
  reachComponent: `dialog` | `tooltip` | `alert` | `combobox`
}) {
  React.useEffect(() => {
    const reachCheckProperty = `--reach-${reachComponent}`
    const reachCheckValue = parseInt(
      window
        .getComputedStyle(document.body)
        .getPropertyValue(reachCheckProperty),
      10
    )

    if (reachCheckValue !== 1) {
      document.body.style.setProperty(reachCheckProperty, "1")
    }
  }, [])

  return null
}
