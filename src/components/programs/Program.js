import { Box, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
// import Programdata from "../../data/programdata";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const usestyles = makeStyles({
    program: {
        width: "100%",
        float: "left",
        clear: "both",
        marginTop: "5rem",
        padding: "0 2rem",
    },
    content: {
        color: "#fff",
        display: "flex",
        gap: "5rem",
        justifyContent: "center",
        textTransform: "uppercase",
        "& p": {
            fontSize: "3rem",
            fontWeight: "700",
            fontStyle: "italic",
        },
    },
    program_box: {
        display: 'flex',
        gap: '1rem',
        color: "#fff",
        marginTop: "2rem",
    },
    col: {
        display: 'flex',
        gap: '1rem',
        color: "#fff",
        flex: "1 1",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "2rem",
        background: "none 0% 0% / auto repeat scroll padding-box border-box rgb(128, 128, 128)",
        textAlign: 'initial',
        cursor: 'pointer',
        "&:hover":{
            background:"linear-gradient(210.41deg,#fa5042 1.14%,#ffa739 100.75%)"
        },
        "& p": {
            fontSize: '1rem',
            fontWeight: '700',
        },
        "& span": {
            fontSize: '.9rem',
            lineHeight: '25px',
        },
        "& Button": {
            color: " #fff",
            display: 'flex',
            gap: '15px',
            justifyContent: 'left',
            padding: '9px 0px',
            textTransform: 'capitalize',
        }
    },
    box_img: {
        height: '2rem',
        width: '2rem',
        "& img": {
            width: '100%',
            filter: 'invert(1)',
        }
    }
});

const Program = () => {
    const classes = usestyles();
    return (
        <Box className={classes.program}>
            <Box className={classes.content}>
                <Typography> EXPLORE OURTO</Typography>
                <Typography>PROGRAMS</Typography>
                <Typography>SHAPE YOU</Typography>
            </Box>
            {/* <Box className={classes.program_box}>
                {Programdata.map((item, id) => (
                    <Box key={id} className={classes.col}>
                        <Box className={classes.box_img}>
                            <img src={item.img} alt="dc" />
                        </Box>
                        <Typography>{item.heading}</Typography>
                        <span>{item.details}</span>
                        <Button>
                            Join Now <ArrowForwardIcon />
                        </Button>
                    </Box>
                ))}
            </Box> */}
        </Box>
    );
};

export default Program;
