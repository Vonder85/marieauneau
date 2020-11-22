import { makeStyles } from "@material-ui/core";
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
    justifyContent: "space-around",
  },
});
export const MassagesView = () => {
  const classes = useStyles();
  const context = useContext(MassageContext);
  const { massages } = context;
  return (
    <div className={classes.root}>
      <h1 className={classes.title}>Les différents massages</h1>
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
