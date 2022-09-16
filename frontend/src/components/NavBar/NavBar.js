// import { AppBar, Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Grid,
} from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
// import { grey } from "@material-ui/core/colors";
import "./Navbar.css";

const pages = {
  HOME: "/",
  LEAGUES: "/leagues",
  STATS: "/stats",
  ABOUT: "/about",
};

const NavBar = () => {
  const path = useLocation();

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      sx={{ flexGrow: 1 }}
    >
      <AppBar position="sticky">
        <Toolbar
          display="flex"
          className="NavBar__Toolbar"
          style={{ "justify-content": "space-evenly" }}
        >
          {path.pathname === pages.HOME ? (
            <Button color="secondary" to="/" component={Link}>
              HOME
            </Button>
          ) : (
            <Button to="/" component={Link}>
              HOME
            </Button>
          )}

          {path.pathname === pages.LEAGUES ? (
            <Button color="secondary" to="/leagues" component={Link}>
              LEAGUES
            </Button>
          ) : (
            <Button to="/leagues" component={Link}>
              LEAGUES
            </Button>
          )}
          {path.pathname === pages.STATS ? (
            <Button color="secondary" to="/stats" component={Link}>
              STATS
            </Button>
          ) : (
            <Button to="/stats" component={Link}>
              STATS
            </Button>
          )}
          {path.pathname === pages.ABOUT ? (
            <Button color="secondary" to="/about" component={Link}>
              ABOUT
            </Button>
          ) : (
            <Button to="/about" component={Link}>
              ABOUT
            </Button>
          )}
          <div />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
