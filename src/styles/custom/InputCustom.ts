import { TextField, styled } from "@mui/material";

const InputCustom = styled(TextField)(({ theme }) => ({
  "label + &": {
    marginTop: "24px",
    marginBottom: 0,
  },
  "& .MuiInputBase-root .MuiInputBase-input": {
    backgroundColor: theme.palette.whiteWarm.main,
    position: "relative",
    fontSize: "12px",
    padding: "11px 12px",
  },
  "& .MuiInputBase-root .MuiOutlinedInput-notchedOutline": {
    borderRadius: "0px",
    borderWidth: "0px",
    borderBottomWidth: "1px",
    borderBottomStyle: "solid",
    borderBottomColor: theme.palette.taupe.main,
  },
  "& .MuiInputBase-root:hover .MuiOutlinedInput-notchedOutline": {
    borderBottomColor: theme.palette.primary.main,
  },
  "& .MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderWidth: "0px",
    borderBottomWidth: "1px",
    borderBottomStyle: "solid",
    borderBottomColor: theme.palette.primary.main,
  },
  "& .MuiInputBase-root.Mui-error .MuiInputBase-input": {
    backgroundColor: theme.palette.error.light,
    borderBottomColor: theme.palette.error.main,
  },
}));

export default InputCustom;
