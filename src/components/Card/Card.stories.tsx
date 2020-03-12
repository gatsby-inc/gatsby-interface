/** @jsx jsx */
import { jsx } from "@emotion/core"
import { DecoratorFn } from "@storybook/react"
import { boolean, select } from "@storybook/addon-knobs"

import { StoryUtils } from "../../utils/storybook"
import { Card, CardHeader, CardTitle, CardContent } from "."

export default {
  title: `Card`,
  decorators: [
    story => (
      <StoryUtils.Container>
        <StoryUtils.Stack>{story()}</StoryUtils.Stack>
      </StoryUtils.Container>
    ),
  ] as DecoratorFn[],
}

export const Basic = () => (
  <Card>
    <CardHeader>
      <CardTitle>Card title</CardTitle>
    </CardHeader>
    <CardContent>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </CardContent>
  </Card>
)

export const Sandbox = () => (
  <Card
    standalone={boolean("standalone", true)}
    as={select("card element", ["div", "section", "article"], `article`)}
  >
    <CardHeader as={select("header element", ["div", "header"], `header`)}>
      <CardTitle
        as={select("title element", ["h1", "h2", "h3", "h4", "h5", "h6"], `h2`)}
      >
        Card title
      </CardTitle>
    </CardHeader>
    <CardContent as={select("content element", ["div", "p"], `div`)}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </CardContent>
  </Card>
)

export const Barebone = () => (
  <Card>
    This card is not using <strong>CardHeader</strong>,{" "}
    <strong>CardTitle</strong> or <strong>CardContent</strong>
  </Card>
)
