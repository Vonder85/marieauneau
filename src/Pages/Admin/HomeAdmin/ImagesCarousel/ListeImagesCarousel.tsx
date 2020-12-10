import { makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";

//Component
import { TableauImages } from "../../HomeAdmin/../../../Components/Table/TableauImages";

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

export const ListeImagesCarousel = () => {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className={classes.root}>
      <h2>Les images du carousel</h2>

      <TableauImages />
    </div>
  );
};
