import { AppBar, CssBaseline, makeStyles, Toolbar } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  appBar: {
    bottom: 0,
    backgroundColor: "white",
    width: "100%",
    webkitBoxShadow: "0px -3px 12px 0px rgba(0,0,0,0.33)",
    mozBoxShadow: "0px -3px 12px 0px rgba(0,0,0,0.33)",
    boxShadow: "0px -1px 12px 0px rgba(0,0,0,0.33)",
    height: "60px",
  },
  liens: {
    textDecoration: "none",
    color: "#D19D8E",
    fontSize: "22px",
  },
});

export const AppbarMobile = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="sticky" color="primary" className={classes.appBar}>
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
            minHeight: "60px",
          }}
        >
          <Link to="/Massages" className={classes.liens}>
            Massages
          </Link>
          <Link to="/APropos" className={classes.liens}>
            A propos{" "}
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
