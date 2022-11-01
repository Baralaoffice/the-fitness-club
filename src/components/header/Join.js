import { Box, Button } from '@mui/material'
import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    join: {
        width: '100%',
        "& Button": {
            color: '#000',
            background: "#fff !important",
            textTransform: 'capitalize',
            fontFamily: "Inter, sans-serif ",
        }
    }
})

const Join = () => {
    const classes = useStyles();
    return (
        <Box className={classes.join}>
            <Button>Join Now</Button>
        </Box>
    )
}

export default Join