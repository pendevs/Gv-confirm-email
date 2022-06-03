import { NativeSelect, styled } from "@mui/material";

const SelectCustom = styled(NativeSelect)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "&.MuiInput-root:before": {
    borderBottomWidth: "1px",
    borderBottomStyle: "solid",
    borderBottomColor: theme.palette.taupe.main,
  },
  "&.MuiInput-root:hover:not(.Mui-disabled):before": {
    borderBottomWidth: "1px",
    borderBottomColor: theme.palette.taupe.main,
  },
  "& .MuiNativeSelect-select": {
    backgroundColor: theme.palette.whiteWarm.main,
    fontSize: "12px",
    padding: "11px 12px",
  },
  "&.MuiInput-root.Mui-error .MuiNativeSelect-select": {
    backgroundColor: theme.palette.error.light,
  },
}));

export default SelectCustom;
