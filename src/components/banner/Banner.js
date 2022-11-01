import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import Figures from "./Figures";

const useStyles = makeStyles({
  Banner: {
    width: "100%",
    float: "left",
    // background: "#3c3f45",
    display: "flex",
    background: "linear-gradient(90deg, rgb(253 120 43/ 77%) -16%, #4a4c51 43%)",
    marginTop: '-85px',
  },
  Left: {
    flex: "3 1",
    gap: "2rem",
    padding: "1.5rem 2rem 2rem",
  },
  right: {
    backgroundColor: "#f48916",
    flex: "1 1",
    position: "relative",
  },
  best_ad: {
    alignItems: "center",
    backgroundColor: "#393d42",
    borderRadius: "4rem",
    color: "#fff",
    display: "flex",
    justifyContent: "flex-start",
    marginTop: "11rem",
    padding: "20px 13px",
    position: "relative",
    width: "fit-content",
    "& p": {
      zIndex: "2",
    },
  },
  best_eff: {
    background: "#f48916",
    borderRadius: "3rem",
    height: "80%",
    left: "8px",
    position: "absolute",
    width: "5.4rem",
    zIndex: " 1",
    color: "#fff",
  },
  content: {
    textAlign: "justify",
    marginTop: "30px",
    "& p": {
      fontSize: "1rem",
      fontWeight: "200 ",
      letterSpacing: "1px",
      fontFamily: "Inter,sans-serif",
      color: "#fff",
    },
  },
  stork: {
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    fontSize: "4.5rem !important",
    fontWeight: "700 !important",
    textTransform: "uppercase",
  },
  btn: {
    float: "left",
    width: "100%",
    textAlign: "left",
    display: "flex",
    gap: "30px",
    marginTop: "30px",
    "&>:nth-of-type(1)": {
      backgroundColor: "#f48915",
      color: "#fff",
      width: "8rem",
      border: "3px solid transparent",
      fontWeight: "700",
      padding: "0.5rem",
      transition: "all .3s",
    },
    "&>:nth-of-type(2)": {
      backgroundColor: "initial",
      color: "#fff",
      width: "8rem",
      border: "2px solid #f48915",
      padding: "0.5rem",
      transition: "all .3s",
    },
  },
  heartrate: {
    gap: "1rem",
    padding: "1rem",
    position: "absolute",
    right: "4rem",
    top: " 7rem",
    alignItems: "start",
    background: " #464d53",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    "& img": {
      width: "2rem",
    },
    "& p": {
      color: "#9c9c9c",
    },
    "& span": {
      color: "#fff",
      fontSize: "1.5rem",
    },
  },
  righmen: {
    position: "absolute",
    right: "8rem",
    top: "10rem",
    width: "23rem",
    zIndex: "2",
  },
  righs: {
    position: "absolute",
    right: "20rem",
    top: "4rem",
    width: "15rem",
    zIndex: "1",
  },
  calorie: {
    gap: "1rem",
    padding: "1rem",
    position: "absolute",
    right: "28rem",
    top: " 34rem",
    alignItems: "start",
    background: " #464d53",
    borderRadius: "5px",
    display: "flex",
    "&>div": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      "& p": {
        color: "#9c9c9c",
      },
      "& span": {
        color: "#fff",
        fontSize: "1.5rem",
      },
    },
  },
});

const Banner = () => {
  const classes = useStyles();
  return (
    <Box className={classes.Banner}>
      <Box className={classes.Left}>
        <Box className={classes.best_ad}>
          <Box className={classes.best_eff}></Box>
          <Typography>THE BEST FITNESS CLUB IN THE TOWN</Typography>
        </Box>
        <Box className={classes.content}>
          <Typography className={classes.stork}>
            <Box>
              <span>SHAPE</span> YOUR
            </Box>
            <span>IDEAL BODY</span>
          </Typography>
          <Typography>
            In here we will help you to shape and build your ideal body and live
            up your life to fullest
          </Typography>
        </Box>
        <Figures />
        <Box className={classes.btn}>
          <Button variant="primary">Primary</Button>{" "}
          <Button variant="secondary">Secondary</Button>{" "}
        </Box>
      </Box>
      <Box className={classes.right}>
        <Box className={classes.heartrate}>
          <img src="/img/download (1).png" alt="heart"></img>
          <Typography>Heart Rate</Typography>
          <span>116 bpm</span>
        </Box>
        <img className={classes.righmen} src="./img/hero_imag.png" alt="hg" />
        <img
          className={classes.righs}
          src="./img/hero_image_back.png"
          alt="hg"
        />
        <Box className={classes.calorie}>
          <img src="./img/download (2).png" alt="hg" />
          <Box>
            <Typography>Calories burned</Typography>
            <span>220 kcal</span>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
