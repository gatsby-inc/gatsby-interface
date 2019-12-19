/** @jsx jsx */
import { jsx } from "@emotion/core"

import PropTypes from "prop-types"

import fonts from "../../theme/fonts"
import hiddenStyles from "../../theme/styles/hidden"
import space from "../../theme/space"
import { Toggle } from "../Toggle"

function Switch({ fieldName, fieldValue, options = {}, onChange }) {
  const onToggleChange = e => {
    onChange({
      target: {
        name: fieldName,
        value: e.target.checked ? `YEARLY` : `MONTHLY`,
      },
    })
  }

  return (
    <Toggle
      fieldName={`${fieldName}_primary`}
      fieldValue={fieldValue === options.primary.value}
      onChange={onToggleChange}
      tone={`SUCCESS`}
    >
      <Toggle.Wrapper
        css={{
          fontFamily: fonts.header,
          letterSpacing: `0.03em`,
        }}
      >
        <span aria-hidden css={{ marginRight: space[3] }}>
          {options.secondary.label}
        </span>
        <Toggle.Input />
        <Toggle.Mark />
        <Toggle.Label
          css={{
            textTransform: `uppercase`,
          }}
        >
          <span aria-hidden>{options.primary.label}</span>
          {options.primary.ariaLabel && (
            <span css={{ ...hiddenStyles }}> {options.primary.ariaLabel}</span>
          )}
        </Toggle.Label>
      </Toggle.Wrapper>
    </Toggle>
  )
}

Switch.propTypes = {
  fieldName: PropTypes.string.isRequired,
  options: PropTypes.object.isRequired,
}

export default Switch
