import { makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import React, { useContext, useEffect } from "react";

//Context
import MassageContext from "../Components/Context/MassageContext";

//Component
import { AffichageQuestion } from "../Components/Question/AffichageQuestion";

const useStyles = makeStyles({
  root: {
    width: "60%",
    fontSize: "1em",
    borderRadius: "10px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "100px",
    marginBottom: "30px",
  },
  title: { textAlign: "left" },
  question: {
    color: "rgb(209, 157, 142)",
  },
  liens: {
    textDecoration: "none",
    fontWeight: "bold",
    color: "black",
  },
});

export const FAQ = () => {
  const classes = useStyles();

  const context = useContext(MassageContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //Détecte la taille de l'écran mobile
  const themeQueries = useTheme();
  const smScreen = useMediaQuery(themeQueries.breakpoints.down("sm"));

  return (
    <div
      className={`${classes.root}`}
      style={{ width: `${smScreen && "80%"}` }}
    >
      <h2 className={classes.title}>Prendre rendez-vous</h2>
      {context.questions
        .filter((result) => result.categorie === "rdv")
        .map((question) => (
          <AffichageQuestion question={question} key={question.id} />
        ))}

      <h2 className={classes.title}>Les prestations Marie Auneau Facialiste</h2>
      {context.questions
        .filter((result) => result.categorie === "prestations")
        .map((question) => (
          <AffichageQuestion question={question} key={question.id} />
        ))}
      <h2 className={classes.title}>Contre-indications et cas spécifiques</h2>
      {context.questions
        .filter((result) => result.categorie === "contreIndic")
        .map((question) => (
          <AffichageQuestion question={question} key={question.id} />
        ))}
      <h2 className={classes.title}> Offres et bons cadeaux</h2>
      {context.questions
        .filter((result) => result.categorie === "offres")
        .map((question) => (
          <AffichageQuestion question={question} key={question.id} />
        ))}
    </div>
  );
};
