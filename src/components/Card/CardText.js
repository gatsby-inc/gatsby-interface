import styled from "@emotion/styled"

import colors from "../../theme/colors"
import space from "../../theme/space"
import fonts from "../../theme/fonts"
import breakpoints from "../../theme/breakpoints"
import fontSizes from "../../theme/fontSizes"

export const CardText = styled(`p`)`
  color: ${colors.grey[50]};
  font-family: ${fonts.system};
  font-size: ${fontSizes[1]};
  line-height: 1.3125rem;
  letter-spacing: 0.015rem;
  margin: ${space[5]} ${space[5]} ${space[5]} 0;

  @media (min-width: ${breakpoints.desktop}px) {
    margin: ${space[7]} 15rem ${space[7]} 0;
  }
`
