import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import TestimonialsData from "../../data/TestimonialsData";

const usestyles = makeStyles({
  Testimonial: {
    width: "100%",
    float: "left",
    clear: "both",
  },
  row: {
    width: "100%",
    float: "left",
    clear: "both",
    display: "flex",
    gap: "1rem",
    padding: "5rem 2rem",
  },
  col_l: {
    color: "#fff",
    display: "flex",
    flex: "1.1 1",
    flexDirection: "column",
    gap: "2rem",
    textTransform: "uppercase",
    textAlign: "initial",
    "& > :nth-child(1)": {
      color: "#f48915",
      fontWeight: 700,
    },
    "& > :nth-child(2)": {
      color: "#fff",
      fontWeight: 700,
      fontSize: "3rem",
      lineHeight: "1.5",
    },
    "& > :nth-child(3)": {
      letterSpacing: "2px",
      lineHeight: "40px",
      textAlign: "justify",
      textTransform: "none",
      fontFamily: "Inter,sans-serif",
    },
    "& > :nth-child(4)": {
      color: "#f48915",
      fontSize: "1rem",
      "& span": {
        color: "#fff",
      },
    },
  },
  col_r: {
    flex: " 1 1",
    position: "relative",
    "& > :nth-child(1)": {
      background: "initial",
      border: " 2px solid orange",
      right: "9rem",
      top: "0.9rem",
      height: "20rem",
      position: "absolute",
      width: "17rem",
    },
    "& > :nth-child(2)": {
      background: "linear-gradient(210.41deg,#fa5042 1.14%,#ffa739 100.75%)",
      height: "19rem",
      position: "absolute",
      right: "7rem",
      top: "4rem",
      width: "17rem",
    },
    "& >img": {
      height: "20rem",
      position: "absolute",
      width: "17rem",
      objectFit: " cover",
      right: "8rem",
      top: "2rem",
    },
  },
  arrow: {
    bottom: "1rem",
    display: "flex",
    gap: "1rem",
    left: "3rem",
    position: "absolute",
    "& img ": {
      width: "1.5rem",
      display: "block",
    },
  },
});

const Testimonial = () => {
  const [selector, setselector] = useState(0);
  const Tleanth = TestimonialsData.length;

  const classes = usestyles();
  return (
    <Box className={classes.Testimonial}>
      <Box className={classes.row}>
        <Box className={classes.col_l}>
          <span>TESTIMONIALS</span>
          <Typography variant="h3">
            WHAT THEY <br />
            SAY ABOUT US
          </Typography>
          <Typography>{TestimonialsData[selector].review}</Typography>
          <Typography variant="h6">
            {TestimonialsData[selector].name}{" "}
            <span>- {TestimonialsData[selector].status}</span>
          </Typography>
        </Box>
        <Box className={classes.col_r}>
          <div></div>
          <div></div>
          <img src={TestimonialsData[selector].image} alt="sd" />
          <Box className={classes.arrow}>
            <img
              src="./img/download (7).png"
              alt=""
              onClick={() => {
                selector === 0 ? setselector(Tleanth - 1) : setselector((prev) => prev - 1);
              }}
            />
            <img
              onClick={() => {
                selector === Tleanth - 1
                  ? setselector(0)
                  : setselector((prev) => prev + 1);
              }}
              src="./img/download (8).png"
              alt=""
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonial;
