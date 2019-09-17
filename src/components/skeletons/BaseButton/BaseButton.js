import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { secureTargetBlankLink } from "../../../utils/helpers"

function textIntoSpan(text) {
  return <span>{text}</span>
}

function Content({ children, label, DefaultIcon }) {
  if (label) {
    return (
      <Fragment>
        <span>{label}</span> {DefaultIcon && <DefaultIcon />}
      </Fragment>
    )
  }

  if (children && children.type && children.type === React.Fragment) {
    return (
      <Fragment>
        {React.Children.map(children.props.children, child =>
          typeof child === `string` ? textIntoSpan(child) : child
        )}
      </Fragment>
    )
  }

  if (children && children.length > 1) {
    return React.Children.map(children, child =>
      typeof child === `string` ? textIntoSpan(child) : child
    )
  }

  return children
}

function BaseButton(props) {
  const {
    children,
    disabled = false,
    href,
    label,
    DefaultIcon,
    loading = false,
    loadingLabel = `Loading`,
    LoadingIcon,
    rel,
    role = `button`,
    target = `_blank`,
    to,
    type = `button`,
    ...rest
  } = props

  if (href) {
    return (
      <a
        href={href}
        target={target}
        role={role}
        rel={secureTargetBlankLink({ rel, target })}
        {...rest}
      >
        <Content label={label} DefaultIcon={DefaultIcon} >{children}</Content>
      </a>
    )
  }

  if (to) {
    return (
      <Link to={to} role={role} {...rest}>
        <Content label={label} DefaultIcon={DefaultIcon}>{children}</Content>
      </Link>
    )
  }

  return (
    <button disabled={loading ? true : disabled} type={type} {...rest}>
      {loading ? (
        <Fragment>
          {loadingLabel && <span>{loadingLabel}</span>}
          {` `}
          {LoadingIcon && <LoadingIcon />}
        </Fragment>
      ) : (
        <Content label={label} DefaultIcon={DefaultIcon}>{children}</Content>
      )}
    </button>
  )
}

BaseButton.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  loading: PropTypes.bool,
  loadingLabel: PropTypes.string,
  onClick: PropTypes.func,
  rel: PropTypes.string,
  target: PropTypes.string,
  to: PropTypes.string,
  type: PropTypes.oneOf([`button`, `reset`, `submit`]),
}

export default BaseButton
