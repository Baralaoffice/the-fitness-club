import React from "react";
import { AppBar, Toolbar, Box } from "@mui/material";
import Menu from "./Menu";
import Join from "./Join";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  header: {
    background: "none !important",
    zIndex: "999",
    padding: "19px 8px 0",
    boxShadow: "none !important",
    position: "relative !important",
    top: "0",
    left: "0",
  },
  row: {
    justifyContent: "space-between",
    // background: 'linear-gradient(45deg, rgb(253 120 43 / 69%) 30%, #4a4c51 50%, #f48916 90%)',
  },
  logo: {
    height: "3rem",
    width: "10rem",
    "& img": {
      width: "100%",
      height: "auto",
    },
  },
});

const pages = ["Home", " Programs", "Why us", "Plans", "Testimonials"];
const Header = () => {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className={classes.header}>
        <Toolbar className={classes.row}>
          <Box className={classes.logo}>
            <img src="./img/logo.png" alt="sf" />
          </Box>
          <Box>
            <Menu page={pages} />
          </Box>
          <Box>
            <Join />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
