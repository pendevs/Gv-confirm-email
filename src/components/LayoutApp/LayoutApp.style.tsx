import { styled } from "@mui/material";
import { NAVBAR_HEIGHT } from "../../config/params";

export const BoxContent = styled("div")({
  display: "flex",
  background: "#fff",
  height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
  marginTop: `${NAVBAR_HEIGHT}px`,
  overflow: "auto",
});
