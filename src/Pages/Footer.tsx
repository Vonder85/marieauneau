import { Grid, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  footer: {
    height: "150px",
    backgroundColor: "rgb(209, 157, 142)",
    color: "white",
    fontWeight: "bold",
    fontSize: "1em",
    marginTop: "-5px",
    paddingTop: "20px",
  },
  liens: {
    textDecoration: "none",
    color: "white",
  },
});

export const Footer = () => {
  const classes = useStyles();
  const themeQueries = useTheme();
  const smScreen = useMediaQuery(themeQueries.breakpoints.down("sm"));

  return (
    <Grid
      container
      className={classes.footer}
      style={{ marginBottom: `${smScreen && "15px"}` }}
    >
      <>
        <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
          <div>
            Chez June
            <br />
            06 29 38 24 55
            <br />7 rue des Cardeniers
          </div>
        </Grid>
        <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
          <div>
            Une question, une remarque ?
            <br />
            Retrouvez notre{" "}
            <Link to="/FAQ" className={classes.liens}>
              FAQ
            </Link>
            <br />
            <Link to="/Contact" className={classes.liens}>
              Ou contactez moi
              <br />
              hello@marieauneau.fr
            </Link>
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
    </Grid>
  );
};
