import React, { FC } from "react";
import MuiAlert from "@mui/material/Alert";
import { Snackbar } from "@mui/material";

interface SnackbarGenericProps {
  message: string;
  open: boolean;
  onClose: () => void;
}

const SnackbarGeneric: FC<SnackbarGenericProps> = ({ message, open, onClose }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      onClose={onClose}
    >
      <MuiAlert
        elevation={6}
        onClose={onClose}
        variant="filled"
        severity="error"
        sx={{ width: "95%" }}>
        { message }
      </MuiAlert>
    </Snackbar>
  );
};

export default SnackbarGeneric;
