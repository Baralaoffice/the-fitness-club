import { Box, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import CountUp from 'react-countup';

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
    "& >span":{
        color:'#9c9c9c'
    }
  },
});

const data = [
  {
    count:  <CountUp end={140} start={90}/>,
    name: "EXPERT COACHES",
  },
  {
    count:  <CountUp end={978} start={600}/>,
    name: "MEMBERS JOINED",
  },
  {
    count: <CountUp end={50} start={20}/>,
    name: "FITNESS PROGRAMS",
  },
];

const Figures = () => {
  const classes = useStyles();
  return (
    <Box className={classes.row}>
      {data.map((item, i) => (
        <Box key={i} className={classes.col}>
          <Typography>+{item.count}</Typography>
          <span>{item.name}</span>
        </Box>
      ))}
    </Box>
  );
};

export default Figures;
