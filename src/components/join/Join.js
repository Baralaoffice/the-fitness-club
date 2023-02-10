import { Box, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React,{ useRef } from "react";
import emailjs from '@emailjs/browser';

const usestyles = makeStyles({
  join: {
    width: "100%",
    float: "left",
    clear: "both",
  },
  row: {
    width: "100%",
    float: "left",
    clear: "both",
    display: "flex",
    gap: "10rem",
    padding: "5rem 2rem",
    position: "relative",
    alignItems:'center',
    "& >span": {
      border: " 2px solid #f48915",
      borderRadius: "20%",
      margin: "-10px 0",
      position: "absolute",
      width: "17.5rem",
      top:'67px'
    },
  },
  col: {
    width: "50%",
    "& h2": {
      color: "#fff",
      fontSize: "3rem",
      fontWeight: "700",
      position: "relative",
      textTransform: "uppercase",
      fontFamily: "Inter,sans-serif",
    },
  },
  form: {
    background: "gray",
    display: "flex",
    gap: "3rem",
    padding: "9px 26px",
    width: "75%",
    margin: "auto",
    justifyContent: "center",
    alignItems: "center",
    "& input": {
      color: "#d9d9d9",
      fontSize: "0.8rem",
      width: "12rem",
      padding:' 8px 5px'
    },
    "& Button": {
      background: "#f48915",
      color: "#fff",
      border: "4px solid transparent",
      fontWeight: "700",
      padding: "0.5rem",
      transition: "all .3s",
      fontSize: "0.8rem",
      textTransform: "capitalize",
    },
  },
});

const Join = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_54esh5q', 'template_065ujbn', form.current, 'aqbqRXpOJtZzGdYcq')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  const classes = usestyles();
  return (
    <Box className={classes.join}>
      <Box className={classes.row}>
        <span></span>
        <Box className={classes.col}>
          <Typography variant="h2">
            READY TO LEVEL UP YOUR BODY WITH US?
          </Typography>
        </Box>
        <Box className={classes.col}>
          <form ref={form} onSubmit={sendEmail} className={classes.form}>
            <input type="email" name="user_email"
              placeholder="Enter your Email Address here..."
              variant="outlined"
            />
           <Button type="submit" value="Join now" >Join now</Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Join;
