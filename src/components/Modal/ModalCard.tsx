import styled from "@emotion/styled"
import { keyframes } from "@emotion/core"
import breakpoints from "../../theme/breakpoints"
import space from "../../theme/space"
import colors from "../../theme/colors"
import radii from "../../theme/radii"

const cardIncoming = keyframes`
  100% {
     transform: translate(0, calc(50vh - 50%)) scale(1) perspective(1000px) rotateX(0);
  }
`

export const ModalCard = styled.div`
  background: ${colors.white};
  border-radius: ${radii[3]};
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  max-width: calc(100% - (${space[5]} * 2));
  outline: none;
  animation: ${cardIncoming} 0.5s 0.25s ease forwards;
  transform: translate(0, 90vh) scale(0.9) perspective(1000px) rotateX(-90deg);
  transform-origin: top center;
  margin: 0 auto;
  padding: ${space[5]};

  @media (min-width: ${breakpoints.mobile}px) {
    max-width: calc(100% - (${space[7]} * 2));
  }

  @media (min-width: ${breakpoints.phablet}px) {
    width: 620px;
  }
`
