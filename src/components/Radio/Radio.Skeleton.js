import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

const SkeletonStyledContainer = styled(`div`)``
const SkeletonStyledInput = styled(`input`)``
const SkeletonStyledLabel = styled(`label`)``

export const radioPropTypes = {
  label: PropTypes.node,
  htmlLabel: PropTypes.any,
  fieldName: PropTypes.string.isRequired,
  id: PropTypes.string,
  optionValue: PropTypes.any,
  value: PropTypes.any.isRequired,
  selectionStyle: PropTypes.oneOf([`standard`, `emphasized`]),
}

const radioSkeletonPropTypes = {
  ...radioPropTypes,
  StyledContainer: PropTypes.any,
  StyledInput: PropTypes.any,
  StyledLabel: PropTypes.any,
}

export const radioDefaultPropTypes = {
  selectionStyle: `standard`,
}

const radioSkeletonDefaultPropTypes = {
  ...radioDefaultPropTypes,
  StyledContainer: SkeletonStyledContainer,
  StyledInput: SkeletonStyledInput,
  StyledLabel: SkeletonStyledLabel,
}

export function RadioSkeleton({
  StyledContainer,
  StyledInput,
  StyledLabel,
  label,
  InnerLabelComponent,
  fieldName,
  id,
  optionValue,
  value,
  className,
  children,
  onChange,
  type,
  selectionStyle,
  ...rest
}) {
  return (
    <StyledContainer
      className={`${optionValue === value ? `selected` : ``} ${className}`}
    >
      <StyledInput
        type="radio"
        name={fieldName}
        id={id}
        value={optionValue}
        checked={optionValue === value}
        onChange={onChange}
        {...rest}
      />
      <StyledLabel
        selectionStyle={selectionStyle}
        className={`${selectionStyle}`}
        htmlFor={id}
      >
        {label}
      </StyledLabel>
      {children}
    </StyledContainer>
  )
}

RadioSkeleton.propTypes = radioSkeletonPropTypes
RadioSkeleton.defaultProps = radioSkeletonDefaultPropTypes

export default RadioSkeleton
