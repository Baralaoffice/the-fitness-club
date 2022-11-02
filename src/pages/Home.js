import React from "react";
import Banner from "../components/banner/Banner";
import Program from "../components/programs/Program";
import { makeStyles } from '@mui/styles';

const usestyles = makeStyles({
  Home: {
        width: "100%",
        float: 'left',
        clear: 'both',
        background:"#4a4c51"
    },

})

const Home = () => {
  const classes = usestyles();
  return (
    <div className={classes.Home}>
      <Banner />
      <Program/>
    </div>
  );
};

export default Home;
