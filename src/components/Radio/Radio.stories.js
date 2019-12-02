import React from "react"
import { storiesOf } from "@storybook/react"
import { radios } from "@storybook/addon-knobs"
import { Radio } from "./"
import { StoryUtils } from "../../utils/storybook"

function ControlledRadio({
  name = `radioExample`,
  options = [],
  ...delegated
}) {
  const [value, setValue] = React.useState(``)

  const selectionStyle = radios(
    `selectionStyle`,
    [`standard`, `emphasized`],
    `standard`
  )

  return (
    <div>
      {options.map(({ value: optionValue, label, id }) => (
        <Radio
          key={optionValue}
          id={id}
          label={label}
          selectionStyle={selectionStyle}
          fieldName={name}
          optionValue={optionValue}
          value={value}
          onChange={e => setValue(e.target.value)}
          {...delegated}
        />
      ))}
    </div>
  )
}

storiesOf(`Radio`, module)
  .add(`Default`, () => (
    <StoryUtils.Container>
      <div>
        <ControlledRadio
          options={[
            { value: `1`, label: `Option 1`, id: `option-1` },
            { value: `2`, label: `Option 2`, id: `option-2` },
            { value: `3`, label: `Option 3`, id: `option-3` },
          ]}
        />
      </div>
    </StoryUtils.Container>
  ))
  .add(`Emphasized`, () => (
    <StoryUtils.Container>
      <div>
        <ControlledRadio
          options={[
            { value: `1`, label: `Option 1`, id: `option-1` },
            { value: `2`, label: `Option 2`, id: `option-2` },
            { value: `3`, label: `Option 3`, id: `option-3` },
          ]}
          selectionStyle="emphasized"
        />
      </div>
    </StoryUtils.Container>
  ))
  .add(`ReactNode as label`, () => (
    <StoryUtils.Container>
      <div>
        <ControlledRadio
          options={[
            {
              value: `1`,
              id: `option-1`,
              label: (
                <div>
                  <strong>English</strong>
                  <p>Warszaw is the capital of Poland</p>
                </div>
              ),
            },
            {
              value: `2`,
              id: `option-2`,
              label: (
                <div>
                  <strong>Polish</strong>
                  <p>Warszawa to stolica Polski</p>
                </div>
              ),
            },
          ]}
        />
      </div>
    </StoryUtils.Container>
  ))
  .add(`dangerouslySetInnerHtml as label`, () => (
    <StoryUtils.Container>
      <div>
        <ControlledRadio
          options={[
            {
              value: `1`,
              id: `option-1`,
              label: (
                <div
                  dangerouslySetInnerHTML={{
                    __html: `<strong>English</strong><p>Warszaw is the capital of Poland</p>`,
                  }}
                />
              ),
            },
            {
              value: `2`,
              id: `option-2`,
              label: (
                <div
                  dangerouslySetInnerHTML={{
                    __html: `<strong>Polish</strong><p>Warszawa to stolica Polski</p>`,
                  }}
                />
              ),
            },
          ]}
        />
      </div>
    </StoryUtils.Container>
  ))
