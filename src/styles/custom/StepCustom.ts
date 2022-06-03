import { Step, styled } from "@mui/material";

const StepCustom = styled(Step)(({ theme }) => ({
  "& .MuiStepConnector-root": {
    top: 28,
    zIndex: -1,
  },
  "& .MuiStepConnector-root .MuiStepConnector-line": {
    borderColor: theme.palette.taupe.main,
    borderTopWidth: 2,
    borderTopStyle: "dashed",
  },
  "& .MuiStepConnector-root.Mui-active .MuiStepConnector-line": {
    borderColor: theme.palette.primary.main,
    borderTopStyle: "solid",
  },
  "& .MuiStepConnector-root.Mui-completed .MuiStepConnector-line": {
    borderColor: theme.palette.primary.main,
    borderTopStyle: "solid",
  },
  "& .MuiStepLabel-iconContainer": {
    backgroundColor: theme.palette.primary.main,
    borderRadius: "50%",
  },
  "& .MuiStepLabel-iconContainer .MuiSvgIcon-root": {
    color: theme.palette.secondary.main,
    borderColor: theme.palette.taupe.main,
    borderWidth: 2,
    borderStyle: "solid",
    fontSize: "3.4rem",
    borderRadius: "50%",
  },
  "& .MuiStepLabel-iconContainer .MuiSvgIcon-root.Mui-active": {
    borderColor: theme.palette.primary.main,
  },
  "& .MuiStepLabel-iconContainer .Mui-completed": {
    borderColor: theme.palette.primary.main,
  },
}));

export default StepCustom;
