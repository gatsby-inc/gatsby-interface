import React from "react"

import PropTypes from "prop-types"

const AS_OPTIONS = {
  h1: `h1`,
  h2: `h2`,
  h3: `h3`,
  h4: `h4`,
  h5: `h5`,
  h6: `h6`,
  span: `span`,
}

function BaseHeading(props) {
  const { children, as = `h1`, ...rest } = props
  const Component = AS_OPTIONS[as]

  return <Component {...rest}>{children}</Component>
}

BaseHeading.propTypes = {
  children: PropTypes.node,
  as: PropTypes.oneOf(Object.values(AS_OPTIONS)),
}

export default BaseHeading
