/** @jsx jsx */
import { jsx } from "@emotion/core"
import { storiesOf } from "@storybook/react"
import { StoryUtils } from "../../utils/storybook"
import { Breadcrumb } from "./"

storiesOf(`Breadcrumb`, module).add(`default`, () => (
  <StoryUtils.Container>
    <Breadcrumb>
      <Breadcrumb.Item to="/">Breadcrumb 1</Breadcrumb.Item>
      <Breadcrumb.Item active={true}>Breadcrumb 2</Breadcrumb.Item>
    </Breadcrumb>
  </StoryUtils.Container>
))
