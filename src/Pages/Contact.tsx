import { makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import React, { useEffect } from "react";
import { ContactForm } from "../Components/Forms/ContactForm/ContactForm";

const useStyles = makeStyles({
  title: {
    color: "rgb(209, 157, 142)",
    textAlign: "center",
  },
  root: {
    height: "100%",
    width: "60%",
    marginTop: "100px",
    marginRight: "auto",
    marginLeft: "auto",
  },
});
export const Contact = () => {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //Détecte la taille de l'écran mobile
  const themeQueries = useTheme();
  const smScreen = useMediaQuery(themeQueries.breakpoints.down("sm"));

  return (
    <div className={classes.root} style={{ width: `${smScreen && "80%"}` }}>
      <h1 className={classes.title}>Formulaire de contact</h1>
      <br />
      <ContactForm />
    </div>
  );
};
