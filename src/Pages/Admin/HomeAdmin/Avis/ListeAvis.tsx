import { makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { TableauAvis } from "../../../../Components/Table/TableauAvis";

const useStyles = makeStyles({
  modal: {
    float: "right",
  },
  root: {
    width: "90%",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: "100px",
  },
});

export const ListeAvis = () => {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className={classes.root}>
      <h2>Les avis</h2>

      <TableauAvis />
    </div>
  );
};
