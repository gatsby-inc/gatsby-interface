import React from "react"
import PropTypes from "prop-types"
import styled from "react-emotion"

export const SkeletonRadioStyledComponent = styled(`div`)``

export const SkeletonRadioInputStyledComponent = styled(`input`)``

export const SkeletonLabelStyledComponent = styled(`label`)``

export const radioPropTypes = {
  label: PropTypes.string,
  htmlLabel: PropTypes.any,
  fieldName: PropTypes.string,
  id: PropTypes.string,
  optionValue: PropTypes.string,
  value: PropTypes.string,
  field: PropTypes.object,
  className: PropTypes.string,
}

const radioSkeletonPropTypes = {
  ...radioPropTypes,
  StyledRadioComponent: PropTypes.any,
  StyledRadioInputComponent: PropTypes.any,
  StyledLabelComponent: PropTypes.any,
}

export const radioSkeletonDefaultPropTypes = {
  StyledRadioComponent: SkeletonRadioStyledComponent,
  StyledRadioInputComponent: SkeletonRadioInputStyledComponent,
  StyledLabelComponent: SkeletonLabelStyledComponent,
}

const RadioSkeleton = ({
  StyledRadioComponent,
  StyledRadioInputComponent,
  StyledLabelComponent,
  label,
  htmlLabel,
  fieldName,
  id,
  optionValue,
  value,
  field,
  className,
  children,
  ...rest
}) => (
  <StyledRadioComponent
    className={`${optionValue === value ? `selected` : ``} ${className}`}
  >
    <StyledRadioInputComponent
      type="radio"
      name={fieldName}
      id={id}
      value={optionValue}
      checked={optionValue === value}
      {...rest}
    />
    {label && <StyledLabelComponent htmlFor={id}>{label}</StyledLabelComponent>}
    {htmlLabel && (
      <StyledLabelComponent
        htmlFor={id}
        dangerouslySetInnerHTML={{ __html: htmlLabel }}
      />
    )}
    {children}
  </StyledRadioComponent>
)

RadioSkeleton.propTypes = radioSkeletonPropTypes
RadioSkeleton.defaultProps = radioSkeletonDefaultPropTypes

export default RadioSkeleton
