import { makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import React from "react";

//Components
import { Footer } from "../Footer";
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

  return (
    <div className={classes.root}>
      {smScreen ? <HomeMobile /> : <HomeDesktop />}
      <Footer />
    </div>
  );
};
