import {
  AppBar,
  CssBaseline,
  makeStyles,
  Tab,
  Toolbar,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  appBar: {
    bottom: 0,
    backgroundColor: "#D19D8E",
    height: "50px",
  },
  liens: {
    textDecoration: "none",
    color: "rgba(255, 255, 255, 0.8)",
  },
});

export const AppbarMobile = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="sticky" color="primary" className={classes.appBar}>
        <Toolbar style={{ justifyContent: "center" }}>
          <Link to="/Massages" className={classes.liens}>
            <Tab
              label="Massages"
              aria-controls="customized-menu"
              aria-haspopup="true"
            />
          </Link>
          <Link to="/APropos" className={classes.liens}>
            <Tab label="A propos" />
          </Link>
          <Link to="/Offrir" className={classes.liens}>
            <Tab label="Offrir" />
          </Link>

          <Link to="/FAQ" className={classes.liens}>
            <Tab label="FAQ" />
          </Link>
          <Link to="/Contact" className={classes.liens}>
            <Tab label="Contact" />
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
};
