import React from "react"
import styled from "react-emotion"

import RadioSkeleton, {
  SkeletonLabelStyledComponent,
  SkeletonRadioInputStyledComponent,
  SkeletonRadioStyledComponent,
  radioPropTypes,
} from "./Radio.Skeleton"
import { spaces, fontSizes } from "../../utils/presets"

export const StyledBaseRadio = styled(SkeletonRadioStyledComponent)`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin: ${spaces.m} ${spaces[`2xs`]};
  position: relative;

  ${SkeletonLabelStyledComponent} {
    padding-left: ${spaces.xl};

    :before {
      left: 0;
    }

    :after {
      left: 7px;
    }
  }
`

export const StyledBaseRadioInput = styled(SkeletonRadioInputStyledComponent)`
  position: absolute;
  left: 0;
  width: 20px;
  height: 20px;
  opacity: 0;
  cursor: pointer;
  z-index: 2;
`

export const StyledBaseLabel = styled(SkeletonLabelStyledComponent)`
  align-items: center;
  line-height: 1;
  display: flex;
  cursor: pointer;
  position: relative;

  :after,
  :before {
    border-radius: 50%;
    content: "";
    display: flex;
    left: 0;
    position: absolute;
    transition: 0.15s ease-in-out;
    top: 0;
  }

  :before {
    height: 22px;
    width: 22px;
  }

  :after {
    height: 8px;
    left: 7px;
    opacity: 0;
    top: 7px;
    width: 8px;
  }

  small {
    font-size: ${fontSizes.xs};
    line-height: 1.1;
  }
`

const BaseRadio = props => (
  <RadioSkeleton
    StyledRadioComponent={StyledBaseRadio}
    StyledRadioInputComponent={StyledBaseRadioInput}
    StyledLabelComponent={StyledBaseLabel}
    {...props}
  />
)

BaseRadio.propTypes = radioPropTypes

export default BaseRadio
