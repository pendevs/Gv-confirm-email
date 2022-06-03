import React from "react";
import { Link, Outlet } from "react-router-dom";
import { DrawerGeneric, NavBar } from "..";
import { Avatar, Badge, Box, Button, Stack } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import PetsIcon from "@mui/icons-material/Pets";
import MedicationLiquidIcon from "@mui/icons-material/MedicationLiquid";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { PAGES_PATH } from "../../navigation/params";
// import { useUserStatus } from "../../services/user/user.service";
import { BoxContent } from "./LayoutApp.style";

export const MENU_ITEMS = [
  {
    label: "My Dashboard",
    icon: <HomeIcon />,
    to: PAGES_PATH.DASHBOARD,
  },
  {
    label: "My Appointments",
    icon: <EventAvailableIcon />,
    to: PAGES_PATH.MY_APPOINTMENTS,
  },
  {
    label: "My Pets",
    icon: <PetsIcon />,
    to: PAGES_PATH.MY_PETS,
  },
  {
    label: "My Hospital",
    icon: <AddLocationIcon />,
    to: PAGES_PATH.MY_HOSPITALS,
  },
  {
    label: "My Prescriptions",
    icon: <MedicationLiquidIcon />,
    to: PAGES_PATH.MY_PRESCRIPTIONS,
  },
];

const ButtonBookNow = () => {
  return (
    <Button
      id="signUpNewPetNextButton"
      color="success"
      size="small"
    >
      BOOK NOW
    </Button>
  );
};

const LayoutApp = () => {
  // const { user } = useUserStatus();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <NavBar>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <ButtonBookNow />
          <Badge badgeContent={4} color="info">
            <NotificationsIcon color="action" />
          </Badge>

          <div>
            {/* {user && (
              <Link to={PAGES_PATH.SETTINGS}>
                <Avatar
                  src={user.image}
                  alt="Profile"
                  sx={{ width: 32, height: 32 }}
                />
              </Link>
            )} */}
          </div>
        </Stack>
      </NavBar>

      <BoxContent>
        <DrawerGeneric
          open={open}
          items={MENU_ITEMS}
          handleDrawerOpen={handleDrawerOpen}
        />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Box sx={{ display: "grid" }}>
            <Outlet />
          </Box>
        </Box>
      </BoxContent>
    </div>
  );
};

export default LayoutApp;
