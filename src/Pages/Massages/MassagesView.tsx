import {
  Button,
  Grid,
  makeStyles,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React, { useContext, useEffect } from "react";

//Context
import MassageContext from "../../Components/Context/MassageContext";

//Model
import { Massage } from "../../Models/Massage";

//Component
import MassageCard from "../../Components/Card/MassageCard";

const useStyles = makeStyles({
  title: {
    textAlign: "center",
    marginTop: "100px",
    color: "rgb(209, 157, 142)",
  },
  card: {
    listStyleType: "none",
    marginRight: "auto",
    marginLeft: "auto",
    textAlignLast: "start",
    textIndent: 0,
  },
  liste: {
    display: "inline-flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    listStyleType: "none",
  },
  liens: {
    textDecoration: "none",
    color: "rgb(209, 157, 142)",
  },

  button: {
    marginLeft: "5px",
    backgroundColor: "#D19D8E",
    color: "white",
    marginTop: "10px",
    "&:hover": {
      backgroundColor: "rgba(209, 157, 142, 0.6)",
    },
  },
  buttonMassages: {
    textAlign: "center",
  },
});
export const MassagesView = () => {
  const classes = useStyles();
  const context = useContext(MassageContext);
  const { massages } = context;

  const themeQueries = useTheme();
  const smScreen = useMediaQuery(themeQueries.breakpoints.down("sm"));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const urlCarteMassages =
    "https://firebasestorage.googleapis.com/v0/b/marieauneau-94c13.appspot.com/o/carteMassages.pdf?alt=media&token=7b11e86e-fe8d-4c59-ac28-e0ef73cec69f";

  return (
    <div style={{ marginLeft: `${smScreen && "-35px"}` }}>
      <h1
        className={classes.title}
        style={{ marginLeft: `${smScreen && "30px"}` }}
      >
        Les massages
      </h1>
      <div className={classes.buttonMassages}>
        <a
          href={urlCarteMassages}
          target="_blank"
          rel="noopener noreferrer"
          className={classes.liens}
        >
          <Button
            variant="contained"
            color="default"
            size="small"
            className={classes.button}
          >
            Carte des massages
          </Button>
        </a>
      </div>
      <br />
      <ul className={classes.liste}>
        <Grid container>
          {massages.map((massage: Massage) => (
            <li className={classes.card}>
              <MassageCard massage={massage} />
            </li>
          ))}
          <li className={classes.card}>
            <MassageCard />
          </li>
        </Grid>
      </ul>
    </div>
  );
};
