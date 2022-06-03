import React, { FC } from "react";
import { Box, Container } from "@mui/material";
import { defaultTheme } from "../../styles/muiTheme";

const BoxOnboarding: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "512px",
      }}>
      <Box
        sx={{
          backgroundColor: "white.main",
          borderRadius: defaultTheme.spacing(2),
          boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.15)",
          p: defaultTheme.spacing(4),
          my: defaultTheme.spacing(4),
        }}
      >
        {children}
      </Box>
    </Container>
  );
};

export default BoxOnboarding;
