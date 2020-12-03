import { makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import MassageContext from "../../Components/Context/MassageContext";
import MassageService from "../../Components/Services/MassageService";
import { Massage } from "../../Models/Massage";
import { HomeDesktop } from "./Desktop/HomeDesktop";
import { HomeMobile } from "./Mobile/HomeMobile";

const useStyles = makeStyles({
  root: {
    marginTop: "100px",
  },
});

export const Home = () => {
  const themeQueries = useTheme();
  const smScreen = useMediaQuery(themeQueries.breakpoints.down("sm"));
  const classes = useStyles();
  const context = useContext(MassageContext);

  useEffect(() => {
    MassageService.getMassages().then((massages: Massage[]) => {
      context.setMassages(massages);
    });
  }, []);

  return (
    <div className={classes.root}>
      {smScreen ? <HomeMobile /> : <HomeDesktop />}
    </div>
  );
};
