import { Theme } from "@mui/material";

export const boxContenStyle = (theme: Theme) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  width: "100%",
  height: "100%",
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
  },
});

export const boxContenLeftStyle = (theme: Theme) => ({
  padding: "3rem",
  [theme.breakpoints.down("sm")]: {
    padding: "1.5rem",
  },
});

export const boxContenRightStyle = (theme: Theme) => ({
  background: "#262626 url(/assets/bg_onboarding.jpg) no-repeat center center",
  backgroundSize: "cover",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
});
