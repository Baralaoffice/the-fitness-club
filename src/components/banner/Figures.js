import { Box, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  row: {
    width: "100%",
    float: "left",
    clear: "both",
    display: "flex",
    gap: "2rem",
    marginTop:'30px'
  },
  col: {
    display: "flex",
    flexDirection: "column",
    "& p": {
      color: " #fff",
      fontSize: "2rem",
    },
    "& span":{
        color:'#9c9c9c'
    }
  },
});

const data = [
  {
    count: "+ 140",
    name: "EXPERT COACHES",
  },
  {
    count: "+ 978",
    name: "MEMBERS JOINED",
  },
  {
    count: "+ 50",
    name: "FITNESS PROGRAMS",
  },
];

const Figures = () => {
  const classes = useStyles();
  return (
    <Box className={classes.row}>
      {data.map((item, i) => (
        <Box key={i} className={classes.col}>
          <Typography>{item.count}</Typography>
          <span>{item.name}</span>
        </Box>
      ))}
    </Box>
  );
};

export default Figures;
