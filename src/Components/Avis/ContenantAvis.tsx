import { makeStyles } from "@material-ui/core";
import React from "react";

//Model
import { Avis } from "../../Models/Avis";

//Images
import doubleQuote from "../../Images/homePage/doubleQuote.png";

const useStyles = makeStyles({
  conteneur: {
    width: "400px",
    minHeight: "200px",
    maxHeight: "300px",
    border: "4px dashed #D19D8E",
    borderTopLeftRadius: "50px 25%",
    borderBottomRightRadius: "50px 25%",
  },
  texte: {
    overflow: "auto",
    maxHeight: "180px",
    wordWrap: "break-word",
    padding: "5px",
  },
  quote: {
    width: "130px",
    marginLeft: "-42px",
    marginTop: "-38px",
  },
  contenu: {
    marginTop: "-70px",
  },
});

interface ContenantAvisProps {
  avis: Avis;
}

export const ContenantAvis = (props: ContenantAvisProps) => {
  const classes = useStyles();

  const { avis } = props;
  return (
    <div className={classes.conteneur}>
      <img src={doubleQuote} alt="doubleQuote" className={classes.quote} />
      <div className={classes.contenu}>
        <h2>{avis.titre}</h2>
        <div>
          <p className={classes.texte}>{avis.texte}</p>
        </div>
        <p style={{ float: "right", marginRight: "40px" }}>{avis.auteur}</p>
      </div>
    </div>
  );
};
