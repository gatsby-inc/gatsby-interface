import React from "react"

import styled from "@emotion/styled"

import colors from "../../theme/colors"

import fonts from "../../theme/fonts"
import radii from "../../theme/radii"
import fontSizes from "../../theme/fontSizes"
import space from "../../theme/space"

import RadioSkeleton, {
  radioPropTypes,
  radioDefaultPropTypes,
} from "./Radio.Skeleton"

const INPUT_BORDER_WIDTH = `2px`
const INPUT_INNER_DIA = `22px`
const INPUT_OUTER_DIA = `calc(${INPUT_INNER_DIA} + (2 * ${INPUT_BORDER_WIDTH}))`

const Label = styled(`label`)`
  align-items: center;
  color: ${colors.grey[80]};
  cursor: pointer;
  display: flex;
  font-family: ${fonts.system};
  font-size: ${fontSizes[2]};
  line-height: 1;
  padding-left: calc(${INPUT_OUTER_DIA} + ${space[4]});
  position: relative;
  min-height: ${INPUT_OUTER_DIA};

  :after,
  :before {
    border-radius: 50%;
    content: "";
    flex-grow: 0;
    flex-shrink: 0;
    left: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: 0.15s ease-in-out;
  }

  :before {
    background: ${colors.primaryBackground};
    border: ${INPUT_BORDER_WIDTH} solid ${colors.grey[30]};
    height: ${INPUT_INNER_DIA};
    width: ${INPUT_INNER_DIA};
  }

  :after {
    background: ${colors.purple[60]};
    height: 8px;
    left: 7px;
    opacity: 0;
    width: 8px;
  }

  small {
    color: ${colors.grey[50]};
    font-size: ${fontSizes[1]};
    line-height: 1.1;
  }

  &.emphasized {
    padding: ${space[4]} ${space[5]} ${space[4]}
      calc(${INPUT_OUTER_DIA} + ${space[4]} + ${space[5]});

    :before {
      left: ${space[5]};
    }
    :after {
      left: calc(${space[5]} + 7px);
    }
  }
`

const RadioInput = styled(`input`)`
  cursor: pointer;
  margin: 0;
  padding: 0;
  left: 0;
  height: 100%;
  opacity: 0;
  position: absolute;
  width: ${INPUT_INNER_DIA};

  &:checked + label::before {
    border-color: ${colors.purple[60]};
  }

  &:checked + label::after {
    opacity: 1;
  }

  &:hover + label::before {
    border-color: ${colors.purple[40]};
  }

  &:focus + label::before {
    border-color: ${colors.purple[60]};
    box-shadow: 0 0 0 3px ${colors.purple[20]};
  }
`

const StandardContainer = styled(`div`)`
  margin-bottom: ${space[5]};
  position: relative;
`

const ColourfulContainer = styled(StandardContainer)`
  margin: ${space[2]} 0;
  position: relative;

  :before,
  :after {
    content: "";
    position: absolute;
    z-index: -1;
    background: #eee;
  }
  :before {
    border-radius: ${radii[3]};
    bottom: 0;
    left: 0;
    opacity: 0;
    right: 0;
    top: 0;
  }
  :after {
    background: ${colors.white};
    border-radius: 6px;
    bottom: 2px;
    left: 2px;
    right: 2px;
    top: 2px;
  }

  :hover:not(.selected) {
    :before,
    :after {
      background: ${colors.purple[5]};
      opacity: 1;
    }
  }

  &.selected {
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
`

const Radio = React.forwardRef((props, ref) => {
  const { selectionStyle } = props

  return (
    <RadioSkeleton
      ref={ref}
      StyledContainer={
        selectionStyle === `emphasized` ? ColourfulContainer : StandardContainer
      }
      StyledInput={RadioInput}
      StyledLabel={Label}
      {...props}
    />
  )
})

Radio.propTypes = radioPropTypes
Radio.defaultProps = radioDefaultPropTypes

export default Radio
