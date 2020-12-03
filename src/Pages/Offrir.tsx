import { Grid, makeStyles } from "@material-ui/core";
import React from "react";

import bonCadeau from "../Images/Massages/bonCadeau.png";

const theme = { fontFamily: "BillySignature" };
const useStyles = makeStyles({
  presentation: {
    width: "70%",
    color: "rgb(209, 157, 142)",
    fontFamily: theme.fontFamily,
    fontSize: "20px",
    borderRadius: "10px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "20px",
  },
  liens: {
    textDecoration: "none",
    color: "rgb(209, 157, 142)",
  },
  root: {
    height: "100%",
    marginTop: "100px",
  },
  photo: {
    width: "300px",
    height: "300px",
    borderRadius: "20px",
  },
  divPhoto: {
    textAlign: "center",
  },
});
export const Offrir = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} md={6} sm={6} className={classes.divPhoto}>
          <img src={bonCadeau} alt="bonCadeau" className={classes.photo} />
        </Grid>
        <Grid item xs={12} md={6} sm={6}>
          <div className={classes.presentation}>
            Le bon cadeau, le cadeau qui plaît toujours !<br />
            <br />
            Contactez moi par mail ou téléphone, le règlement, se fait via un
            lien envoyé par sms ou mail. Je vous envoie ensuite la carte via la
            poste. Vous êtes pressés, ou plus digitale je vous envoie un version
            pdf par mail à imprimer vous même ou pas.
            <br />
            <br />
            Si vous passez chez June où je pratique vous pouvez également faire
            faire un bon cadeau chez eux. Le règlement se fait alors en espèce
            directement là bas.
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
