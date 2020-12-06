import { AppBar, CssBaseline, makeStyles, Toolbar } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  appBar: {
    bottom: 0,
    backgroundColor: "#D19D8E",
    height: "50px",
    width: "100%",
  },
  liens: {
    textDecoration: "none",
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: "20px",
  },
});

export const AppbarMobile = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="sticky" color="primary" className={classes.appBar}>
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Link to="/Massages" className={classes.liens}>
            Massages
          </Link>
          <Link to="/APropos" className={classes.liens}>
            A propos{" "}
          </Link>
          <Link to="/Offrir" className={classes.liens}>
            Offrir{" "}
          </Link>

          <Link to="/FAQ" className={classes.liens}>
            FAQ{" "}
          </Link>
          <Link to="/Contact" className={classes.liens}>
            Contact{" "}
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
};
