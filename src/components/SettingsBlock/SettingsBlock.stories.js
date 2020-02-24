import React from "react"
import { storiesOf } from "@storybook/react"
import { StoryUtils } from "../../utils/storybook"
import { SettingsBlock } from "./"
import { Announcement } from "../Announcement"

storiesOf(`SettingsBlock`, module)
  .add(`default usage`, () => (
    <StoryUtils.Container secondaryBg={true}>
      <StoryUtils.Stack width={`35em`}>
        <SettingsBlock>
          <SettingsBlock.Header>
            <SettingsBlock.Title>
              Automated Integrations
              <SettingsBlock.Doclink to="/some-where" />
            </SettingsBlock.Title>
          </SettingsBlock.Header>
          <SettingsBlock.Content>
            <StoryUtils.Content hint="This is the Block's content section" />
          </SettingsBlock.Content>
        </SettingsBlock>
        <SettingsBlock>
          <SettingsBlock.Header>
            <SettingsBlock.Title>
              Automated Integrations <SettingsBlock.Doclink to="/" />
            </SettingsBlock.Title>
            <SettingsBlock.Description>
              Gatsby Cloud can automatically deploy each site build to one or
              more CDN hosts of your choice—just connect and you are good to go!
            </SettingsBlock.Description>
          </SettingsBlock.Header>
          <SettingsBlock.Content>
            <StoryUtils.Content hint="This is the Block's content section" />
          </SettingsBlock.Content>
        </SettingsBlock>
        <SettingsBlock>
          <SettingsBlock.Header>
            <SettingsBlock.Title>
              Automated Integrations <SettingsBlock.Doclink to="/" />
            </SettingsBlock.Title>
            <SettingsBlock.Description>
              Gatsby Cloud can automatically deploy each site build to one or
              more CDN hosts of your choice—just connect and you are good to go!
            </SettingsBlock.Description>
            <SettingsBlock.Description>
              CDN hosts of your choice—just connect and you are good to go!
            </SettingsBlock.Description>
          </SettingsBlock.Header>
          <SettingsBlock.Content>
            <StoryUtils.Content hint="This is the Block's content section" />
          </SettingsBlock.Content>
        </SettingsBlock>
      </StoryUtils.Stack>
    </StoryUtils.Container>
  ))
  .add(`shortcut usage`, () => (
    <StoryUtils.Container secondaryBg={true}>
      <StoryUtils.Stack width={`35em`}>
        <SettingsBlock
          title="Automated Integrations"
          doclink="/"
          description=" Gatsby Cloud can automatically deploy each site build to one or more
              CDN hosts of your choice—just connect and you are good to go!"
        >
          <SettingsBlock.Content>
            <StoryUtils.Content hint="This is the Block's content section" />
          </SettingsBlock.Content>
        </SettingsBlock>
      </StoryUtils.Stack>
    </StoryUtils.Container>
  ))
  .add(`with Announcement`, () => (
    <StoryUtils.Container secondaryBg={true}>
      <StoryUtils.Stack width={`35em`}>
        <SettingsBlock
          title="Automated Integrations"
          doclink="/"
          description=" Gatsby Cloud can automatically deploy each site build to one or more
              CDN hosts of your choice—just connect and you are good to go!"
        >
          <SettingsBlock.Content>
            <Announcement>
              We are working on adding more integrations all the time—watch your
              inbox!
            </Announcement>
          </SettingsBlock.Content>
        </SettingsBlock>
      </StoryUtils.Stack>
    </StoryUtils.Container>
  ))
