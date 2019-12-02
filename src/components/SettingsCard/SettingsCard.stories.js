import React from "react"
import { storiesOf } from "@storybook/react"
import { MdAdd, MdDelete } from "react-icons/md"
import { SettingsCard } from "./"
import { StoryUtils } from "../../utils/storybook"

storiesOf(`SettingsCard`, module)
  .add(`default usage`, () => (
    <StoryUtils.Container secondaryBg={true}>
      <StoryUtils.Stack width={`35em`}>
        <SettingsCard>
          <SettingsCard.Title>Card's title</SettingsCard.Title>
          <SettingsCard.EditButton hiddenIf="OPEN" />

          <SettingsCard.Content>
            <SettingsCard.Description>
              Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi
              welsh onion daikon amaranth tatsoi tomatillo melon azuki bean
              garlic.
            </SettingsCard.Description>
          </SettingsCard.Content>
          <SettingsCard.Content variant="SECONDARY">
            <SettingsCard.Description>
              Celery quandong swiss chard chicory earthnut pea potato. Salsify
              taro catsear garlic gram celery bitterleaf wattle seed collard
              greens nori. Grape wattle seed kombu beetroot horseradish carrot
              squash brussels sprout chard.
            </SettingsCard.Description>
            <StoryUtils.Content hint="This is a Secondary Content" />
            <SettingsCard.Actions>
              <SettingsCard.CancelButton />
              <SettingsCard.SubmitButton />
            </SettingsCard.Actions>
          </SettingsCard.Content>
        </SettingsCard>
      </StoryUtils.Stack>
    </StoryUtils.Container>
  ))
  .add(`no secondary conent`, () => (
    <StoryUtils.Container secondaryBg={true}>
      <StoryUtils.Stack width={`35em`}>
        <SettingsCard>
          <SettingsCard.Title>Card's title</SettingsCard.Title>
          <SettingsCard.EditButton
            onClick={() =>
              alert(
                `onClick on SettingsCard.EdituButton override the defaul toggle behaviour`
              )
            }
          />
          <SettingsCard.Content>
            <SettingsCard.Description>
              Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi
              welsh onion daikon amaranth tatsoi tomatillo melon azuki bean
              garlic.
            </SettingsCard.Description>
          </SettingsCard.Content>
        </SettingsCard>
        <SettingsCard>
          <SettingsCard.Title>Card's title</SettingsCard.Title>
          <SettingsCard.EditButton
            onClick={() =>
              alert(
                `onClick on SettingsCard.EdituButton override the defaul toggle behaviour`
              )
            }
          />
          <SettingsCard.Content>
            <SettingsCard.Description>
              Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi
              welsh onion daikon amaranth tatsoi tomatillo melon azuki bean
              garlic.
            </SettingsCard.Description>
            <SettingsCard.Description>
              Amaranth tatsoi tomatillo melon azuki bean garlic.
            </SettingsCard.Description>
            <StoryUtils.Content hint="PRIMARY CONTENT" />
          </SettingsCard.Content>
        </SettingsCard>
      </StoryUtils.Stack>
      {` `}
    </StoryUtils.Container>
  ))
  .add(`custom EditButton`, () => (
    <StoryUtils.Container secondaryBg={true}>
      <StoryUtils.Stack width={`35em`}>
        <SettingsCard>
          <SettingsCard.Title>Card's title</SettingsCard.Title>
          <SettingsCard.EditButton
            label="Change"
            onClick={() =>
              alert(
                `onClick on SettingsCard.EdituButton override the defaul toggle behaviour`
              )
            }
          />
          <SettingsCard.Content>
            <SettingsCard.Description>
              Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi
              welsh onion daikon amaranth tatsoi tomatillo melon azuki bean
              garlic.
            </SettingsCard.Description>
          </SettingsCard.Content>
        </SettingsCard>
        <SettingsCard>
          <SettingsCard.Title>Card's title</SettingsCard.Title>
          <SettingsCard.EditButton
            onClick={() =>
              alert(
                `onClick on SettingsCard.EdituButton override the defaul toggle behaviour`
              )
            }
          >
            Add <MdAdd />
          </SettingsCard.EditButton>
          <SettingsCard.Content>
            <SettingsCard.Description>
              Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi
              welsh onion daikon amaranth tatsoi tomatillo melon azuki bean
              garlic.
            </SettingsCard.Description>
          </SettingsCard.Content>
        </SettingsCard>
      </StoryUtils.Stack>
      {` `}
    </StoryUtils.Container>
  ))
  .add(`with custom tone`, () => (
    <StoryUtils.Container secondaryBg={true}>
      <StoryUtils.Stack width={`35em`}>
        <SettingsCard tone={`DANGER`}>
          <SettingsCard.Title>Delete ite</SettingsCard.Title>
          <SettingsCard.EditButton
            onClick={() =>
              alert(
                `onClick on SettingsCard.EdituButton override the defaul toggle behaviour`
              )
            }
          >
            Delete site <MdDelete />
          </SettingsCard.EditButton>
          <SettingsCard.Content>
            <SettingsCard.Description>
              Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi
              welsh onion daikon amaranth tatsoi tomatillo melon azuki bean
              garlic.
            </SettingsCard.Description>
          </SettingsCard.Content>
        </SettingsCard>
      </StoryUtils.Stack>
    </StoryUtils.Container>
  ))
