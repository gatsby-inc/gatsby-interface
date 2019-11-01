import styled from "@emotion/styled"
import { keyframes } from "@emotion/core"
import { palette, radius, spaces, breakpoints } from "../../utils/presets"

const cardIncoming = keyframes`
  100% {
     transform: translate(0, calc(50vh - 50%)) scale(1) perspective(1000px) rotateX(0);
  }
`

export const ModalCard = styled.div`
  background: ${palette.white};
  border-radius: ${radius.large};
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  max-width: calc(100% - (${spaces.m} * 2));
  outline: none;
  animation: ${cardIncoming} 0.5s 0.25s ease forwards;
  transform: translate(0, 90vh) scale(0.9) perspective(1000px) rotateX(-90deg);
  transform-origin: top center;
  margin: 0 auto;
  padding: ${spaces.m};

  @media (min-width: ${breakpoints.mobile}px) {
    max-width: calc(100% - (${spaces.l} * 2));
  }

  @media (min-width: ${breakpoints.phablet}px) {
    width: 620px;
  }
`
