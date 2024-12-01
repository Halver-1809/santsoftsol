import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from '@chakra-ui/react';
import { useRef } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const ConfirmCloseAlert = ({ isOpen, onClose, onConfirm }: Props) => {
  const cancelRef = useRef<HTMLButtonElement | null>(null);

  /* Prueb */
  return (
    <AlertDialog
      isOpen={isOpen}
      onClose={onClose}
      leastDestructiveRef={cancelRef}
      isCentered
      id="rsi"
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader>Salir del flujo de edición</AlertDialogHeader>
          <AlertDialogBody>
            ¿Está seguro? Su información actual no se guardará.
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose} variant="secondary">
              Cancelar
            </Button>
            <Button colorScheme="red" onClick={onConfirm} ml={3}>
              Salir
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};
