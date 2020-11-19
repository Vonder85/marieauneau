import { makeStyles } from "@material-ui/core";
import React from "react";
import { Tableau } from "../../../../../Components/Table/Tableau";

const useStyles = makeStyles({
  modal: {
    float: "right",
  },
  root: {
    width: "80%",
    marginRight: "auto",
    marginLeft: "auto",
  },
});

export const ListeSoins = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2>Les massages</h2>

      <Tableau />
    </div>
  );
};
