/* eslint-disable quote-props */
import { SxProps } from "@mui/material";
import { defaultTheme } from "../../styles/muiTheme";

export const boxStyle: SxProps = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "640px",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "24px",
  p: 4,
  outline: "none",
};

export const iconButtonStyle: SxProps = {
  position: "absolute" as "absolute",
  top: "2px",
  right: "2px",
  color: defaultTheme.palette.taupe.main,
  "& svg": {
    fontSize: 32,
  },
};
