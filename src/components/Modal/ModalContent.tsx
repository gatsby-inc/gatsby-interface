import { DialogContent, DialogContentProps } from "@reach/dialog"
import styled from "@emotion/styled"

export type ModalContentProps = DialogContentProps

export const ModalContent = styled(DialogContent)({
  outline: "none",
  margin: 0,
  padding: 0,
  background: `transparent`,
  width: `auto`,
})
