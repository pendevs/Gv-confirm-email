import React, { FC } from "react";
import { Divider, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Drawer, DrawerHeader } from "./DrawerGeneric.style";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { NavLink } from "react-router-dom";
import { defaultTheme } from "../../styles/muiTheme";

interface IItem {
  label: string;
  icon: JSX.Element;
  to: string;
}

interface IDrawerGenericProps {
  open: boolean;
  items: IItem[];
  handleDrawerOpen: () => void;
}

const MenuItem = (
  { item, isActive, open }: { item: IItem, isActive: boolean, open: boolean },
) => {
  const color = isActive ? defaultTheme.palette.primary.main : defaultTheme.palette.granite.main;

  return (
    <ListItemButton
      sx={{
        minHeight: 48,
        justifyContent: open ? "initial" : "center",
        px: 2.5,
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: open ? 3 : "auto",
          justifyContent: "center",
          color,
        }}
      >
        {item.icon}
      </ListItemIcon>
      <ListItemText
        primary={item.label}
        sx={{
          opacity: open ? 1 : 0,
          fontWeight: 600,
          color,
        }}
      />
    </ListItemButton>
  );
};

const DrawerGeneric: FC<IDrawerGenericProps> = ({
  open,
  items,
  handleDrawerOpen,
}) => {
  return (
    <Drawer variant="permanent" open={open}>
      <List>
        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            // eslint-disable-next-line react/no-children-prop
            children={({ isActive }) => <MenuItem isActive={isActive} item={item} open={open} />}
          />
        ))}
      </List>
      <Divider />
      <DrawerHeader>
        <IconButton onClick={handleDrawerOpen}>
          {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </DrawerHeader>
    </Drawer>
  );
};

export default DrawerGeneric;
