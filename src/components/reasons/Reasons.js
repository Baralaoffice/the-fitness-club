import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Gellary from "./Gellay";

const usestyles = makeStyles({
  reasons: {
    width: "100%",
    float: "left",
    marginTop: "6rem",
  },
  row: {
    display: "flex",
    padding: "0 2rem",
    width: "100%",
    gap: "2rem",
  },
  col: {
    width: "100%",
    textAlign: "initial",
  },
  col_con: {
    fontWeight: 400,
    color: "#fff",
    "& span": {
      color: " #f48915",
      fontWeight: "700",
    },
    "& > h3": {
      fontSize: "3rem",
      lineHeight: "1.167",
      letterSpacing: "0em",
      fontWeight: 700,
      marginTop: "1rem",
    },
  },
  list: {
    "&  p": {
      fontSize: "1rem",
      lineHeight: "1.167",
      letterSpacing: "0em",
      fontWeight: 700,
      color: "#fff",
    },
    "& ul li":{
      paddingLeft:'0'
    },
    "& img": {
      height: "2rem",
      width: "2rem",
    },
  },
  imglist:{
    display: 'flex',
    padding: '1.5rem 0',
    gap: '1rem',
  }
});
const Reasons = () => {
  const classes = usestyles();
  return (
    <Box className={classes.reasons}>
      <Box className={classes.row}>
        <Box className={classes.col}>
          <Gellary />
        </Box>
        <Box className={classes.col}>
          <Box className={classes.col_con}>
            <span>SOME REASONS</span>
            <Typography variant="h3">WHY CHOOSE US?</Typography>
            <Box className={classes.list}>
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="./img/download3.png" />
                  </ListItemAvatar>
                  <ListItemText secondary="OVER 140+ EXPERT COACHS" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="./img/download3.png" />
                  </ListItemAvatar>
                  <ListItemText secondary="TRAIN SMARTER AND FASTER THAN BEFORE" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="./img/download3.png" />
                  </ListItemAvatar>
                  <ListItemText secondary="1 FREE PROGRAM FOR NEW MEMBER" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="./img/download3.png" />
                  </ListItemAvatar>
                  <ListItemText secondary="RELIABLE PARTNERS" />
                </ListItem>
              </List>
            </Box>
            <Typography style={{color: '#9c9c9c',fontWeight: 'normal',}}>OUR PARTNERS</Typography>
            <Box className={classes.imglist}>
              <img src="./img/download (3).png" alt="aa" />
              <img src="./img/download (4).png" alt="aa" />
              <img src="./img/download (5).png" alt="aa" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Reasons;
