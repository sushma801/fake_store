import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React from "react";

interface IDialogProps {
  open: boolean;
  title: string;
  content: string;
  onCloseModal: () => void;
  onOpenModal?: () => void;
}

const AlertModal = ({
  open,
  title,
  content,
  onCloseModal,
  onOpenModal,
}: IDialogProps) => {
  return (
    <Dialog open={open}>
      <DialogTitle> {title}</DialogTitle>
      <DialogContent>{content}</DialogContent>
      <DialogActions>
        <Button onClick={() => !!onOpenModal && onOpenModal()}>
          {onOpenModal ? "Agree" : "Ok"}
        </Button>
        {onOpenModal && (
          <Button onClick={() => onCloseModal()}>Disagree</Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default AlertModal;
