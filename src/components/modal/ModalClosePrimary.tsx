import { Button } from "@chakra-ui/react";
import { ConfirmCloseAlert } from "../alert/ConfirmCloseAlert";
import { useState } from "react";

type ModalCloseButtonProps = {
  onClosePrimary: () => void;
};

export const ModalClosePrimary = ({
  onClosePrimary,
}: ModalCloseButtonProps) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <ConfirmCloseAlert
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={() => {
          setShowModal(false);
          onClosePrimary();
        }}
      />
      <Button
        onClick={() => setShowModal(true)}
        sx={{ flex: "1 1 auto", margin: "10px 2px", width: "15" }}
      >
        Cancelar
      </Button>
    </>
  );
};
