import { IconButton } from "@chakra-ui/react"
import { CgClose } from "react-icons/cg"
import { useState } from "react"
import { ConfirmCloseAlert } from "../alert/ConfirmCloseAlert"

type ModalCloseButtonProps = {
  onClose: () => void
}

export const ModalCloseButton = ({ onClose }: ModalCloseButtonProps) => {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <ConfirmCloseAlert
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={() => {
          setShowModal(false)
          onClose()
        }}
      />
      <IconButton
        variant="unstyled"
        aria-label="Close modal"
        icon={<CgClose />}
        color="white"
        position="absolute"
        transform="translate(50%, -50%)"
        right="10px"
        top="40px"
        onClick={() => setShowModal(true)}
        zIndex="toast"
        dir="ltr"
      />
    </>
  )
}
