/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Breadcrumb } from "./"

export default {
  title: `Breadcrumb`,
  component: Breadcrumb,
  componentSubtitle:
    "Breadcrumbs inform the user about the path to their current location, and help them to navigate back to the parent page(s).",
}

export const Basic = () => (
  <Breadcrumb>
    <Breadcrumb.Item to="/">Breadcrumb 1</Breadcrumb.Item>
    <Breadcrumb.Item active={true}>Breadcrumb 2</Breadcrumb.Item>
  </Breadcrumb>
)
