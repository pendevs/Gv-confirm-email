import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { boxContenStyle, boxContenLeftStyle, boxContenRightStyle } from "./LayoutOnboarding.style";

const LayoutOnboarding = () => {
  return (
    <Box sx={boxContenStyle}>
      <Box sx={boxContenLeftStyle}>
        <Box sx={{ mb: 8 }}>
          <img src="/assets/logo_color.svg" alt="GoogVets" />
        </Box>

        <Outlet />
      </Box>
      <Box sx={boxContenRightStyle} />
    </Box>
  );
};

export default LayoutOnboarding;

