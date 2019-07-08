import React from "react"
import styled from "react-emotion"

import RadioSkeleton, {
  radioPropTypes,
} from "./Radio.Skeleton"
import {
  StyledBaseRadio,
  StyledBaseLabel,
  StyledBaseRadioInput,
} from "./BaseRadio"
import { colors, palette } from "../../utils/presets"

const StyledStandardRadio = styled(StyledBaseRadio)``

const StyledStandardLabel = styled(StyledBaseLabel)`
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

const StyledStandardRadioInput = styled(StyledBaseRadioInput)`
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

const Radio = props => (
  <RadioSkeleton
    StyledRadioComponent={StyledStandardRadio}
    StyledRadioInputComponent={StyledStandardRadioInput}
    StyledLabelComponent={StyledStandardLabel}
    {...props}
  />
)

Radio.propTypes = radioPropTypes

export default Radio
