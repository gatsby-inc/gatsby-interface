/** @jsx jsx */
import { jsx } from "@emotion/core"
import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

import fonts from "../../theme/fonts"
import colors from "../../theme/colors"
import tones from "../../theme/tones"
import hiddenStyles from "../../theme/styles/hidden"
import { spaces } from "../../utils/presets"
import { showCustomCssDeprecationMessage } from "../../utils/maintenance/deprecationMessages"

const IN_ON_POSITIONS = [`LEFT`, `RIGHT`]

const ToggleContext = React.createContext()

function getLeftValue({ checked, active, inOnPosition }) {
  const onRight = inOnPosition === `RIGHT`

  if ((checked && onRight) || (!checked && !onRight)) {
    return active ? `18px` : `24px`
  }

  return 0
}

function Toggle({
  children,
  fieldName,
  fieldValue,
  label,
  onChange,
  inOnPosition = `RIGHT`,
  tone = `BRAND`,
  customCss,
  ...rest
}) {
  showCustomCssDeprecationMessage(customCss)
  const [state, setState] = useState({
    fieldName,
    fieldValue,
    label,
    onChange,
    inOnPosition,
    checked: fieldValue === true,
    tone,
  })

  useEffect(() => {
    setState({ ...state, fieldValue, checked: fieldValue === true })
  }, [fieldValue])

  return (
    <ToggleContext.Provider value={state}>
      {children ? (
        children
      ) : (
        <Toggle.Wrapper customCss={customCss} {...rest}>
          <Toggle.Input />
          <Toggle.Mark />
        </Toggle.Wrapper>
      )}
    </ToggleContext.Provider>
  )
}

Toggle.propTypes = {
  fieldName: PropTypes.string.isRequired,
  inOnPosition: PropTypes.oneOf(IN_ON_POSITIONS),
}

Toggle.Wrapper = ({ children, customCss, ...rest }) => {
  showCustomCssDeprecationMessage(customCss)
  const { fieldName, label, inOnPosition } = Toggle.useToggleContext()

  return (
    <label
      css={[
        {
          alignItems: `center`,
          display: `flex`,
          color: colors.grey[90],
          cursor: `pointer`,
          fontFamily: fonts.system.join(`,`),

          "span:last-child": {
            order: inOnPosition === `RIGHT` ? 2 : 0,
          },
        },
        customCss,
      ]}
      htmlFor={fieldName}
      {...rest}
    >
      {children}
      {label && <Toggle.Label>{label}</Toggle.Label>}
    </label>
  )
}

Toggle.Input = ({ customCss, ...rest }) => {
  showCustomCssDeprecationMessage(customCss)
  const { fieldName, checked, onChange } = Toggle.useToggleContext()

  return (
    <input
      type="checkbox"
      name={fieldName}
      id={fieldName}
      value={true}
      checked={checked}
      onChange={onChange}
      css={{
        ...hiddenStyles,
      }}
      {...rest}
    />
  )
}

Toggle.Mark = ({ customCss, ...rest }) => {
  showCustomCssDeprecationMessage(customCss)
  const {
    checked,

    inOnPosition,
    tone,
  } = Toggle.useToggleContext()

  return (
    <span
      aria-hidden
      css={[
        {
          background: checked ? tones[tone].medium : colors.grey[30],
          borderRadius: `999px`,
          cursor: `pointer`,
          display: `inline-block`,
          height: `24px`,
          order: 1,
          padding: `3px`,
          transition: `all .3s ease, background .5s`,
          userSelect: `none`,
          width: `48px`,
          marginLeft: inOnPosition === `RIGHT` ? 0 : spaces.xs,
          marginRight: inOnPosition === `LEFT` ? 0 : spaces.xs,

          "label:focus-within > &": {
            boxShadow: `0 0 0 3px ${colors.purple[20]}`,
            outline: `0`,
          },

          ":after": {
            background: colors.white,
            left: getLeftValue({
              checked,
              active: false,
              inOnPosition,
            }),
            position: `relative`,
            display: `block`,
            content: `""`,
            width: `18px`,
            height: `18px`,
            borderRadius: `999px`,
            transition: `all 0.1s ease`,
          },

          ":active": {
            ":after": {
              left: getLeftValue({
                checked,
                active: true,
                inOnPosition,
              }),
              width: `24px`,
            },
          },
        },
        customCss,
      ]}
      {...rest}
    />
  )
}

Toggle.Label = ({ children, customCss, ...rest }) => {
  showCustomCssDeprecationMessage(customCss)
  const { label } = Toggle.useToggleContext()

  return (
    <span css={customCss} {...rest}>
      {children ? children : label}
    </span>
  )
}

Toggle.useToggleContext = () => {
  const context = React.useContext(ToggleContext)
  if (!context) {
    throw new Error(
      `Toggle compound components cannot be rendered outside the main component`
    )
  }
  return context
}

export default Toggle
