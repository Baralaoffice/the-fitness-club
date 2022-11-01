import React from "react";
import { AppBar, Toolbar, Box } from "@mui/material";
import Menu from "./Menu";
import Join from "./Join";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  row: {
    justifyContent: "space-between",
    background: 'linear-gradient(45deg, rgb(253 120 43 / 69%) 30%, #4a4c51 50%, #f48916 90%)',
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
