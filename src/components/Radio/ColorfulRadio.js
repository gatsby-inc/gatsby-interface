import React from "react"
import styled from "react-emotion"

import RadioSkeleton, { radioPropTypes } from "./Radio.Skeleton"
import {
  StyledBaseRadio,
  StyledBaseLabel,
  StyledBaseRadioInput,
} from "./BaseRadio"
import { colors, palette, radius, spaces } from "../../utils/presets"

const StyledColorfulRadio = styled(StyledBaseRadio)`
  margin: 0;

  :before,
  :after {
    content: "";
    position: absolute;
    z-index: -1;
    background: #eee;
  }
  :before {
    border-radius: ${radius.large};
    bottom: 0;
    left: 0;
    opacity: 0;
    right: 0;
    top: 0;
  }
  :after {
    top: 2px;
    left: 2px;
    bottom: 2px;
    right: 2px;
    background: ${palette.white};
    border-radius: 6px;
  }

  :hover:not(.selected) {
    :before,
    :after {
      opacity: 1;
      background: ${palette.purple[50]};
    }
  }

  &.selected {
    margin: ${spaces[`2xs`]} 0;
    padding: ${spaces[`3xs`]} 0;

    :before {
      opacity: 1;
      background-image: linear-gradient(
        110deg,
        #8954a8 0,
        #663399 25%,
        #bc027f 50%,
        #ffdf37 75%,
        #05f7f4 100%
      );
    }
  }

  ${StyledBaseLabel} {
    padding: ${spaces.m};
    padding-left: ${spaces[`3xl`]};
    width: 100%;

    :before {
      left: ${spaces.m};
      top: 50%;
      transform: translateY(-50%);
    }

    :after {
      left: calc(${spaces.m} + 7px);
      top: 50%;
      transform: translateY(-50%);
    }
  }
`

const StyledColorfulLabel = styled(StyledBaseLabel)`
  :before {
    background: ${colors.primaryBackground};
    border: 2px solid ${palette.grey[300]};
  }

  :after {
    background: ${palette.purple[600]};
  }

  small {
    color: ${palette.grey[500]};
  }
`

const StyledColorfulRadioInput = styled(StyledBaseRadioInput)`
  &:checked + label::before {
    border-color: ${palette.purple[600]};
  }

  &:checked + label::after {
    opacity: 1;
  }

  &:hover + label::before {
    border-color: ${palette.purple[400]};
  }

  &:focus + label::before {
    border-color: ${palette.purple[600]};
    box-shadow: 0 0 0 3px ${palette.purple[200]};
  }
`

const ColorfulRadio = props => (
  <RadioSkeleton
    StyledRadioComponent={StyledColorfulRadio}
    StyledRadioInputComponent={StyledColorfulRadioInput}
    StyledLabelComponent={StyledColorfulLabel}
    {...props}
  />
)

ColorfulRadio.propTypes = radioPropTypes

export default ColorfulRadio
