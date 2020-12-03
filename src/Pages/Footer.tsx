import { Grid, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const theme = { fontFamily: "BillySignature" };
const useStyles = makeStyles({
  footer: {
    height: "150px",
    backgroundColor: "rgb(209, 157, 142)",
    color: "white",
    fontFamily: theme.fontFamily,
    fontWeight: "bold",
    fontSize: "1em",
    textAlign: "center",
    marginTop: "-5px",
    paddingTop: "20px",
  },
  liens: {
    textDecoration: "none",
    color: "rgb(209, 157, 142)",
  },
});

export const Footer = () => {
  const classes = useStyles();
  const themeQueries = useTheme();
  const smScreen = useMediaQuery(themeQueries.breakpoints.down("sm"));

  return (
    <Grid container className={classes.footer}>
      {smScreen ? (
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <div>
            Marie Auneau
            <br />
            <br />
            06 29 38 24 55
            <br />
            <br />7 rue des Cardeniers
          </div>
        </Grid>
      ) : (
        <>
          <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
            <div>
              Marie Auneau
              <br />
              <br />
              06 29 38 24 55
              <br />
              <br />7 rue des Cardeniers
            </div>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
            <div>
              Une question, une remarque ?
              <br />
              <br />
              Retrouvez notre FAQ
              <br />
              <br />
              Ou contactez moi <br />
              hello@marieauneau.fr
            </div>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
            <Link
              to="/APropos"
              style={{ color: "white", textDecoration: "none" }}
            >
              A propos
            </Link>
          </Grid>
        </>
      )}
    </Grid>
  );
};
