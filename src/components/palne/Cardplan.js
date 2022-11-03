import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Plandata from "../../data/Plandata";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const usestyles = makeStyles({
  Cardplan: {
    display: "flex",
    justifyContent: "center",
    gap: "3rem",
    marginTop: "3rem",
    paddingBottom: "48px",
    fontFamily: "Inter,sans-serif",
    "& >div": {
      background: "#656565",
      color: "#fff",
      textAlign: "initial",
      fontFamily: "Inter,sans-serif",
      padding: "1.5rem",
      "& >div": {
        padding: "0",
        "& Button": {
          background: "#fff",
          border: "4px solid transparent",
          fontWeight: "700",
          padding: "0.5rem",
          transition: "all .3s",
          width: "100%",
          color:'#000',
          textTransform: 'capitalize',
        },
        "& Button:hover":{
          background:'#c9bfbf'
        },
      },
      "& svg": {
        color: "#f48915",
        fill: "#f48915",
        height: "2rem",
        width: "2rem",
      },
      "& h5": {
        fontSize: "1rem",
        fontWeight: "700",
        padding: "20px 0",
      },
      "& h4": {
        fontSize: "3rem",
        fontWeight: "700",
      },
      "& span": {
        display: "flex",
        justifyContent: "initial",
        gap: "0.5rem",
        fontFamily: "Inter,sans-serif",
        fontSize: "0.8rem",
        alignItems: "center",
        padding: "20px 0",
        "& svg": {
          fill: "#fff",
          color: "#ffffff",
          width: "1rem",
          height: "1rem",
        },
        
      },
      "&:nth-child(2)": {
        transform: "scale(1.1)",
        background: 'linear-gradient(210.41deg,#fa5042 1.14%,#ffa739 100.75%)',
        "& Button:hover":{
          background:'#c9bfbf'
        },
        "& Button":{
          color:'orange'
        },
        "& svg": {
          fill: "#fff",
        },
      },
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
    "& ul li": {
      padding: "0",
      "& >div": {
        minWidth: "auto",
        "& >div": {
          justifyContent: "flex-start",
        },
      },
    },
    "& img": {
      height: "1rem",
      width: "1rem",
    },
  },
});

const Cardplan = () => {
  const classes = usestyles();
  return (
    <Box sx={{ minWidth: 275 }} className={classes.Cardplan}>
      {Plandata.map((item, i) => (
        <Card key={i}>
          <CardContent>
            <Typography gutterBottom>{item.icon}</Typography>
            <Typography variant="h5">{item.name}</Typography>
            <Typography variant="h4">{item.charge}</Typography>
            <Box className={classes.list}>
              <List>
                {item.list.map((listitem, i) => (
                  <ListItem key={i}>
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp" src={listitem.img} />
                    </ListItemAvatar>
                    <ListItemText secondary={listitem.pra} />
                  </ListItem>
                ))}
              </List>
            </Box>
            <span>
              See more benefits <ArrowForwardIcon />
            </span>
          </CardContent>
          <CardActions>
            <Button size="small">Join now</Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default Cardplan;
