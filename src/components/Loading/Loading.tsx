import React, { FC } from "react";
import { Box, CircularProgress } from "@mui/material";

interface ILoadingProps {
  size?: number;
  sx?: object;
}

const Loading: FC<ILoadingProps> = ({ size = 150, sx }) => {
  return (
    <Box
      sx={{
        textAlign: "center",
        ...sx,
      }}
    >
      <CircularProgress size={size} />
    </Box>
  );
};

export default Loading;
