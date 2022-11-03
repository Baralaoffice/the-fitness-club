import React from "react";
import Banner from "../components/banner/Banner";
import Program from "../components/programs/Program";
import { makeStyles } from '@mui/styles';
import Reasons from "../components/reasons/Reasons";
import Plans from "../components/palne/Plans";

const usestyles = makeStyles({
  Home: {
        width: "100%",
        float: 'left',
        clear: 'both',
        background:"#4a4c51",
    },

})

const Home = () => {
  const classes = usestyles();
  return (
    <div className={classes.Home}>
      <Banner />
      <Program/>
      <Reasons/>
      <Plans/>
    </div>
  );
};

export default Home;
