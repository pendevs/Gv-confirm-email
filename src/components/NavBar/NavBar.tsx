import React, { FC } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { GoodVetsIcon } from "../Icons";
import { APP_NAME, NAVBAR_HEIGHT } from "../../config/params";

interface INavBarProps {
  children?: React.ReactNode;
};

const NavBar: FC<INavBarProps> = ({ children }) => {
  return (
    <Box
      sx={{
        px: 2,
        height: `${NAVBAR_HEIGHT}px`,
        backgroundColor: "primary.main",
        position: "fixed",
        top: 0,
        width: "calc(100% - 31px)",
        zIndex: 9,
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          height: "100%",
        }}
      >
        <Grid item>
          <Stack direction="row" spacing={1}>
            <GoodVetsIcon color="black" width={32} height={32} />
            <Typography variant="h3" sx={{
              display: "grid",
              alignItems: "center",
            }}>
              { APP_NAME }
            </Typography>
          </Stack>
        </Grid>
        <Grid item>
          {children}
        </Grid>
      </Grid>
    </Box>
  );
};

export default NavBar;
