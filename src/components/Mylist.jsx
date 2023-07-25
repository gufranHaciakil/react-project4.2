import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";

import {
  Face4,
  Groups2,
  Home,
  Layers,
  NightlightRound,
  People,
  Settings,
  Storefront,
  WbIncandescent,
} from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import { useState } from "react";

const Mylist = ({ setmyMOde, theme, showList }) => {
  const myListArr = [
    {
      title: "HomePage",
      icon: <Home />,
    },
    {
      title: "Pages",
      icon: <Layers />,
    },
    {
      title: "Groups",
      icon: <Groups2 />,
    },
    {
      title: "Marketplace",
      icon: <Storefront />,
    },
    {
      title: "Friends",
      icon: <People />,
    },
    {
      title: "Settings",
      icon: <Settings />,
    },
    {
      title: "Profile",
      icon: <Face4 />,
    },
  ];
  const theem = useTheme();
  return (
    <Box
      className="mylistt"
      sx={{
        flexGrow: 1,
        backgroundColor: theem.palette.mode === "dark" ? null : "#f3f3f3",
        display: { xs: showList, md: "block" },
        minWidth: "220px",
      }}
    >
      <List sx={{ height: "189vh", position: "fixed",minWidth:"220px" }}>
        {myListArr.map((item) => {
          return (
            <ListItem disablePadding sx={{ mb: "" }}>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          );
        })}
        <ListItem>
          <ListItemIcon>
            {theme.palette.mode === "dark" ? (
              <NightlightRound />
            ) : (
              <WbIncandescent />
            )}
          </ListItemIcon>
          <Switch
            edge="end"
            onChange={() => {
              localStorage.setItem(
                "currentMode",
                theme.palette.mode === "dark" ? "light" : "dark"
              );
              setmyMOde(theme.palette.mode === "light" ? "dark" : "light");
            }}
          />
        </ListItem>
      </List>
    </Box>
  );
};

export default Mylist;
