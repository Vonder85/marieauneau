import { makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { ContactForm } from "../Components/Forms/ContactForm/ContactForm";

const theme = { fontFamily: "BillySignature" };
const useStyles = makeStyles({
  title: {
    color: "rgb(209, 157, 142)",
    fontFamily: theme.fontFamily,
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

  return (
    <div className={classes.root}>
      <h1 className={classes.title}>Formulaire de contact</h1>
      <br />
      <ContactForm />
    </div>
  );
};
