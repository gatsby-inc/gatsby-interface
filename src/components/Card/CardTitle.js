import styled from "@emotion/styled"

import colors from "../../theme/colors"

import { spaces, breakpoints, fontFamilies, fontSizes } from "../../theme"

export const CardTitle = styled(`h2`)`
  align-items: center;
  color: ${colors.grey[90]};
  display: flex;
  font-family: ${fontFamilies.headerFontFamily};
  font-size: ${fontSizes.l};
  margin: ${spaces.xs} 0 ${spaces.s};

  @media (min-width: ${breakpoints.desktop}px) {
    margin: 0;
  }
`
