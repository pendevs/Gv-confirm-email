import React, { FC } from "react";
import { Box, Modal, IconButton } from "@mui/material";
import { boxStyle, iconButtonStyle } from "./ModalCustom.style";
import CloseIcon from "@mui/icons-material/Close";

interface ModalCustomProps {
  open: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

const ModalCustom: FC<ModalCustomProps> = ({ children, open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
    >
      <Box sx={boxStyle}>
        {children}
        <IconButton
          aria-label="close modal"
          component="span"
          sx={iconButtonStyle}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      </Box>
    </Modal>
  );
};

export default ModalCustom;
