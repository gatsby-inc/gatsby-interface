/** @jsx jsx */
import { jsx } from "@emotion/core"
import { text, radios } from "@storybook/addon-knobs"
import { radioKnobOptions } from "../../utils/storybook"
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  TabsKeyboardActivation,
} from "."

export default {
  title: `Tabs`,
  component: Tabs,
  subcomponents: {
    TabList,
    Tab,
    TabPanels,
    TabPanel,
  },
}

export const Basic = () => (
  <Tabs>
    <TabList>
      <Tab>One</Tab>
      <Tab>Two</Tab>
      <Tab>Three</Tab>
    </TabList>
    <TabPanels>
      <TabPanel>
        <p>one!</p>
      </TabPanel>
      <TabPanel>
        <p>two!</p>
      </TabPanel>
      <TabPanel>
        <p>three!</p>
      </TabPanel>
    </TabPanels>
  </Tabs>
)

export const Sandbox = () => {
  return (
    <Tabs
      keyboardActivation={radios(
        "keyboardActivation",
        radioKnobOptions([
          TabsKeyboardActivation.Auto,
          TabsKeyboardActivation.Manual,
        ]),
        TabsKeyboardActivation.Auto
      )}
    >
      <TabList>
        <Tab>{text("First tab", "One")}</Tab>
        <Tab>{text("Second tab", "Two")}</Tab>
        <Tab>{text("Third tab", "Three")}</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

Sandbox.story = {
  parameters: {
    chromatic: { disable: true },
  },
}
