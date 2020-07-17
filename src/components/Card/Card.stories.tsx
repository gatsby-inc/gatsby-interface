/** @jsx jsx */
import { jsx } from "@emotion/core"
import { getGroupFieldStoryOptions, LONG_TEXT } from "../../utils/storybook"
import { Card, CardSection, CardHeader, CardFooter, CardDivider } from "."
import { Button } from "../Button"
import { Notification } from "../Notification"
import { StyledInput } from "../form/components/styled-primitives/StyledInput"
import { Badge } from "../Badge"
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "../Tabs"
import { CheckboxGroupFieldBlock } from "../form"

export default {
  title: `Card`,
  component: Card,
  subcomponents: {
    CardSection,
    CardHeader,
    CardFooter,
    CardDivider,
  },
}

export const Basic = () => (
  <Card>
    <CardHeader title="Card Title">
      <Badge textVariant="CAPS" tone="SUCCESS">
        New feature
      </Badge>
    </CardHeader>
    <Notification content={LONG_TEXT} variant="SECONDARY" tone="WARNING" />
    <Tabs>
      <TabList>
        <Tab>Tab One</Tab>
        <Tab>Tab Two</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <CardSection>{LONG_TEXT}</CardSection>
          <CardSection applyPaddingTop={false}>
            <StyledInput
              name="test"
              placeholder="Type something..."
              aria-label="Exampel field"
            />
          </CardSection>
        </TabPanel>
        <TabPanel>
          <CardSection>
            <CheckboxGroupFieldBlock
              id="exampleCheckbox"
              name="exampleCheckbox"
              label="Example checkbox"
              options={getGroupFieldStoryOptions("mid")}
            />
          </CardSection>
          <CardSection applyPaddingTop={false}>{LONG_TEXT}</CardSection>
        </TabPanel>
      </TabPanels>
    </Tabs>
    <CardDivider />
    <CardSection>{LONG_TEXT}</CardSection>
    <CardFooter>
      <Button variant="SECONDARY">Secondary</Button>
      <Button variant="PRIMARY">Primary</Button>
    </CardFooter>
  </Card>
)
