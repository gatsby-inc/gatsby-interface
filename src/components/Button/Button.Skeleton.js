import React, { Fragment } from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { MdRefresh } from "react-icons/md"
import { Link } from "gatsby"

export const SkeletonStyledComponent = styled(`button`)``

export const buttonPropTypes = {
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  loadingLabel: PropTypes.string,
  href: PropTypes.string,
  size: PropTypes.string,
  to: PropTypes.string,
}

const buttonSkeletonPropTypes = {
  ...buttonPropTypes,
  StyledComponent: PropTypes.any,
}

export const buttonDefaultPropTypes = {
  disabled: false,
  loading: false,
  loadingLabel: `Loading`,
  size: `L`,
}

export const buttonSkeletonDefaultPropTypes = {
  ...buttonDefaultPropTypes,
  StyledComponent: SkeletonStyledComponent,
}

const ButtonSkeleton = ({
  StyledComponent,
  children,
  disabled,
  href,
  loading,
  loadingLabel,
  to,
  ...rest
}) => {
  if (href) {
    const ComponentAsExternalLink = StyledComponent.withComponent(`a`)
    return (
      <ComponentAsExternalLink href={href} {...rest}>
        {children}
      </ComponentAsExternalLink>
    )
  }

  if (to) {
    const ComponentAsInternalLink = StyledComponent.withComponent(Link)
    return (
      <ComponentAsInternalLink to={to} {...rest}>
        {children}
      </ComponentAsInternalLink>
    )
  }

  return (
    <StyledComponent disabled={disabled} showLoading={loading} {...rest}>
      {loading ? (
        <Fragment>
          {loadingLabel} <MdRefresh />
        </Fragment>
      ) : (
        children
      )}
    </StyledComponent>
  )
}

ButtonSkeleton.propTypes = buttonSkeletonPropTypes
ButtonSkeleton.defaultProps = buttonSkeletonDefaultPropTypes

export default ButtonSkeleton
