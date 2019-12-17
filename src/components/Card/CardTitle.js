import styled from "@emotion/styled"

import colors from "../../theme/colors"
import space from "../../theme/space"

import { breakpoints, fontFamilies } from "../../utils/presets"
import fontSizes from "../../theme/fontSizes"

export const CardTitle = styled(`h2`)`
  align-items: center;
  color: ${colors.grey[90]};
  display: flex;
  font-family: ${fontFamilies.headerFontFamily};
  font-size: ${fontSizes[4]};
  margin: ${space[3]} 0 ${space[4]};

  @media (min-width: ${breakpoints.desktop}px) {
    margin: 0;
  }
`
