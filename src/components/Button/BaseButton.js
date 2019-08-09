import React from "react"
import styled from "@emotion/styled"
import { keyframes } from "@emotion/core"

import { fontFamilies, radius, palette } from "../../utils/presets"

import ButtonSkeleton, {
  buttonPropTypes,
  buttonDefaultPropTypes,
  SkeletonStyledComponent,
} from "./Button.Skeleton"

const loading = keyframes`
  0% {
    transform: translateX(0.2em) rotate(0);
  }
  100% {
    transform: translateX(0.2em) rotate(360deg);
  }
`

const pulse = keyframes`
  33% {
    transform: translateX(0.2em) scale(1.05);
    }
  66% {
    transform: translateX(0.2em) scale(0.85);
  }

`

const sizes = {
  S: {
    fontSize: 0.875,
    height: 1.5,
    horizontalPadding: 0.5,
    verticalPadding: 0.3,
  },
  M: {
    fontSize: 1,
    height: 2,
    horizontalPadding: 0.75,
    verticalPadding: 0.45,
  },
  L: {
    fontSize: 1.125,
    height: 2.25,
    horizontalPadding: 1,
    verticalPadding: 0.55,
  },
  XL: {
    fontSize: 1.5,
    height: 3.25,
    horizontalPadding: 1.25,
    verticalPadding: 0.65,
  },
}

export const StyledBaseButton = styled(SkeletonStyledComponent)`
  align-items: center;
  border: ${palette.grey[600]};
  border-radius: ${radius.default};
  box-sizing: border-box;
  cursor: pointer;
  display: inline-flex;
  font-family: ${fontFamilies.headerFontFamily};
  font-size: ${props => sizes[props.size].fontSize}rem;
  justify-content: center;
  line-height: 1;
  min-height: ${props => sizes[props.size].height}rem;
  padding: ${props => sizes[props.size].verticalPadding}rem
    ${props => sizes[props.size].horizontalPadding}rem;
  text-decoration: none;
  transition: 0.5s;

  &[disabled],
  &[disabled]:hover {
    cursor: not-allowed;
    opacity: 0.5;
  }

  svg {
    animation-name: ${props => (props.showLoading ? loading : ``)};
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    flex-shrink: 0;
    transform: translateX(0.2em) scale(1);
  }

  &:hover:not([disabled]) {
    svg {
      animation: ${pulse} 1s linear infinite;
    }
  }
`

const BaseButton = props => (
  <ButtonSkeleton StyledComponent={StyledBaseButton} {...props} />
)

BaseButton.propTypes = buttonPropTypes
BaseButton.defaultProps = buttonDefaultPropTypes

export default BaseButton
