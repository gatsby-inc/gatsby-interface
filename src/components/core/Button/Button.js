/** @jsx jsx */
import { jsx } from "@emotion/core"
import PropTypes from "prop-types"
import { MdRefresh, MdArrowForward } from "react-icons/md"
import { BaseButton } from "../../skeletons/BaseButton"
import styles from "../../../theme/styles/button"

const Button = props => {
  const {
    children,
    loading,
    LoadingIcon = MdRefresh,
    size = `L`,
    tone = `BRAND`,
    variant = `PRIMARY`,
    ...rest
  } = props
  const DefaultIcon = variant === `PRIMARY` && MdArrowForward

  return (
    <BaseButton
      css={{
        ...styles.base({ loading }),
        ...styles.sizes[size],
        ...styles.variants[variant]({ tone }),
      }}
      DefaultIcon={DefaultIcon}
      loading={loading}
      LoadingIcon={LoadingIcon}
      {...rest}
    >
      {children}
    </BaseButton>
  )
}

Button.propTypes = {
  size: PropTypes.oneOf([`L`, `M`, `XL`, `S`]),
}

export default Button
