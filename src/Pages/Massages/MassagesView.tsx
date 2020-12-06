import { Button, makeStyles } from "@material-ui/core";
import React, { useContext } from "react";
import MassageContext from "../../Components/Context/MassageContext";
import { Massage } from "../../Models/Massage";
import MassageCard from "../../Components/Card/MassageCard";

const theme = { fontFamily: "BillySignature" };
const useStyles = makeStyles({
  root: {
    fontFamily: theme.fontFamily,
  },
  title: {
    textAlign: "center",
    marginTop: "100px",
    color: "rgb(209, 157, 142)",
  },
  card: {
    listStyleType: "none",
  },
  liste: {
    display: "inline-flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginLeft: "-10px",
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

  const urlCarteMassages =
    "https://firebasestorage.googleapis.com/v0/b/marieauneau-94c13.appspot.com/o/carteMassages.pdf?alt=media&token=7b11e86e-fe8d-4c59-ac28-e0ef73cec69f";

  return (
    <div className={classes.root}>
      <h1 className={classes.title}>Les différents massages</h1>
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
        {massages.map((massage: Massage) => (
          <li className={classes.card}>
            <MassageCard massage={massage} />
          </li>
        ))}
        <MassageCard />
      </ul>
    </div>
  );
};
