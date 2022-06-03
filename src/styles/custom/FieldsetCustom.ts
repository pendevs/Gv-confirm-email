/* eslint-disable quote-props */
import { styled } from "@mui/material";

const FieldsetCustom = styled("fieldset")(({ theme }) => ({
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: theme.palette.taupe.main,
  borderRadius: theme.shape.borderRadius,
  padding: "1rem",
  paddingTop: ".4rem",
  "& legend": {
    fontSize: "12px",
    padding: "0.5rem",
    marginLeft: "0.5rem",
  },
}));

export default FieldsetCustom;
