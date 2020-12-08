import { makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { TableauMessages } from "../../../../Components/Table/TableauMessages";

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

export const ListeMessages = () => {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className={classes.root}>
      <h2>Les messages</h2>

      <TableauMessages />
    </div>
  );
};
