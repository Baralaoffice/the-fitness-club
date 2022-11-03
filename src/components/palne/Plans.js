import { Box, Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from "@mui/styles";
import Cardplan from './Cardplan';

const usestyles = makeStyles({
    plans:{
        width:'100%',
        float:'left',
        clear:'both',
        marginTop:'3rem',
        background: 'linear-gradient(90deg, rgb(253 120 43/ 77%) -130%, #4a4c51 85%, rgb(253 120 43/ 50%) 101%)',
        padding: '43px 0',
    },
    content: {
        color: "#fff",
        display: "flex",
        gap: "2rem",
        justifyContent: "center",
        textTransform: "uppercase",
        "& p": {
            fontSize: "3rem",
            fontWeight: "700",
            fontStyle: "italic",
        },
    },

})

const Plans = () => {
    const classes = usestyles()
  return (
    <Box className={classes.plans}>
         <Box className={classes.content}>
                <Typography>READY TO START</Typography>
                <Typography>YOUR JOURNEY</Typography>
                <Typography>NOW WITHUS</Typography>
            </Box>
        <Box>
            <Cardplan/>
        </Box>
    </Box>
  )
}

export default Plans