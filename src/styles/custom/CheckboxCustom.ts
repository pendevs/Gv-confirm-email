import { Checkbox, styled } from "@mui/material";

const CheckboxCustom = styled(Checkbox)(({ theme }) => ({
  "& .MuiSvgIcon-root": {
    fontSize: 28,
    fill: theme.palette.taupe.main,
  },
  "&.MuiCheckbox-root.Mui-checked .MuiSvgIcon-root": {
    fill: theme.palette.primary.main,
  },
}));

export default CheckboxCustom;
