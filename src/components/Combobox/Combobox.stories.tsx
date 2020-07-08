/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "./"
import { Theme } from "../../theme"
import { ComboboxOptionProps } from "./Combobox"
import { boolean, text } from "@storybook/addon-knobs"

export default {
  title: `Combobox`,
  component: Combobox,
  subcomponents: {
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
  },
}

const options: ComboboxOptionProps[] = [
  {
    value: `Apple`,
  },
  {
    value: `Banana`,
  },
  {
    value: `Orange`,
  },
  {
    value: `Pineapple`,
  },
  {
    value: `Kiwi`,
  },
  {
    value: `Melon`,
  },
  {
    value: `Pear`,
  },
  {
    value: `Apricot`,
  },
  {
    value: `Plum`,
  },
  {
    value: `Grapefruit`,
  },
]

export const Basic = () => {
  return (
    <div css={{ minHeight: `100vh` }}>
      <h4 id="demo">Basic, fixed List Combobox</h4>
      <Combobox>
        <ComboboxInput
          aria-labelledby="demo"
          ref={element => element && element.focus()}
        />
        <ComboboxPopover>
          <ComboboxList aria-labelledby="demo">
            {options.map(({ value }) => {
              return <ComboboxOption key={value} value={value} />
            })}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  )
}

export const Sandbox = () => {
  return (
    <div>
      <h4 id="demo">Sandbox</h4>
      <Combobox>
        <ComboboxInput
          aria-labelledby="demo"
          hasError={boolean(`hasError`, false)}
          showToggleButton={boolean(`showToggleButton`, false)}
          toggleButtonAriaLabel={text("toggleButtonAriaLabel", "Show options")}
        />
        <ComboboxPopover>
          <ComboboxList aria-labelledby="demo">
            {options.map(({ value }) => {
              return (
                <ComboboxOption
                  key={value}
                  value={value}
                  highlightMatches={boolean("Highlight matches", true)}
                />
              )
            })}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  )
}

Sandbox.story = {
  parameters: {
    chromatic: { disable: true },
  },
}

export const WithToggleButton = () => {
  return (
    <div css={{ minHeight: `100vh` }}>
      <h4 id="demo">Toggle Button</h4>
      <Combobox>
        <ComboboxInput
          aria-labelledby="demo"
          ref={element => element && element.focus()}
          showToggleButton
          toggleButtonAriaLabel="Show available options"
        />
        <ComboboxPopover>
          <ComboboxList aria-labelledby="demo">
            {options.map(({ value }) => {
              return <ComboboxOption key={value} value={value} />
            })}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  )
}

export const WithAccessibleNameForList = () => {
  return (
    <div>
      <h4 id="demo">Combobox with an explicit accessible label</h4>
      <Combobox>
        <ComboboxInput
          aria-labelledby="demo"
          ref={element => element && element.focus()}
        />
        <ComboboxPopover>
          <ComboboxList aria-label="Grocery list">
            {options.map(({ value }) => {
              return <ComboboxOption key={value} value={value} />
            })}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  )
}

export const WithSelect = () => {
  const [term, setTerm] = React.useState("")

  return (
    <div css={{ maxWidth: `400px` }}>
      <h4 id="demo">Fixed list Combobox with value selection</h4>
      <Combobox onSelect={value => setTerm(value)}>
        <ComboboxInput selectedOptionLabel={term} aria-labelledby="demo" />
        <ComboboxPopover>
          <ComboboxList aria-labelledby="demo">
            {options.map(({ value }) => {
              return (
                <ComboboxOption
                  key={value}
                  selected={value === term}
                  value={value}
                />
              )
            })}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
      <br />
      <div>
        Selected value:{" "}
        <span css={(theme: Theme) => ({ fontFamily: theme.fonts.monospace })}>
          {JSON.stringify(term)}
        </span>
      </div>
    </div>
  )
}

export const WithDynamicItems = () => {
  const [term, setTerm] = React.useState("")
  const [needle, setNeedle] = React.useState("")
  const dynamicOptions = options.filter(option =>
    option.value.toLowerCase().includes(needle.toLowerCase())
  )

  return (
    <div css={{ maxWidth: `400px` }}>
      <h4 id="demo">Dynamic list Combobox</h4>
      <Combobox
        onSelect={value => {
          setTerm(value)
          setNeedle(value)
        }}
      >
        <ComboboxInput
          aria-labelledby="demo"
          onChange={e => setNeedle(e.target.value)}
        />
        <ComboboxPopover>
          <ComboboxList aria-labelledby="demo">
            {dynamicOptions.map(({ value }) => {
              return (
                <ComboboxOption
                  key={value}
                  selected={value === term}
                  value={value}
                />
              )
            })}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
      <br />
      <div>
        Selected value:{" "}
        <span css={(theme: Theme) => ({ fontFamily: theme.fonts.monospace })}>
          {JSON.stringify(term)}
        </span>
      </div>
    </div>
  )
}

export const WithControlledInput = () => {
  const [inputValue, setInputValue] = React.useState("")
  const [term, setTerm] = React.useState("")

  return (
    <div css={{ maxWidth: `400px` }}>
      <h4 id="demo">Fixed list Combobox with value selection</h4>
      <Combobox
        onSelect={value => {
          setTerm(value)
          setInputValue(value)
        }}
      >
        <ComboboxInput
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          selectedOptionLabel={term}
          aria-labelledby="demo"
        />
        <ComboboxPopover>
          <ComboboxList aria-labelledby="demo">
            {options.map(({ value }) => {
              return (
                <ComboboxOption
                  key={value}
                  selected={value === term}
                  value={value}
                />
              )
            })}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
      <br />
      <div>
        Selected value:{" "}
        <span css={(theme: Theme) => ({ fontFamily: theme.fonts.monospace })}>
          {JSON.stringify(term)}
        </span>
      </div>
    </div>
  )
}
