import React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  menu: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "2rem",
    "& a":{
      color:'#fff',
      textDecoration: "none",
      fontFamily: 'Inter,sans-serif',
    }
  },
});

const Menu = ({ page }) => {
  const classes = useStyles();
  return (
    <Box className={classes.menu}>
      {page.map((item, id) => (
        <Link href="#" key={id}>
          {item}
        </Link>
      ))}
    </Box>
  );
};

export default Menu;
