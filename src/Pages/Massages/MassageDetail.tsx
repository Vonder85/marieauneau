import { Grid, makeStyles } from "@material-ui/core";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";

//Images
import photoMassage from "../../Images/Massages/massage.jpg";

//Models
import { Type } from "../../Models/Type";

//Context
import MassageContext from "../../Components/Context/MassageContext";

const theme = { fontFamily: "BillySignature" };
const useStyles = makeStyles({
  presentation: {
    width: "70%",
    color: "rgb(209, 157, 142)",
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
    textAlign: "center",
    fontFamily: theme.fontFamily,
    overflowX: "hidden",
  },
  liste: {
    listStyleType: "none",
  },
  img: {
    height: "350px",
    width: "450px",
  },
});

export const MassageDetail = () => {
  const classes = useStyles();

  //Récupération du nom du massage dans l'url
  const nomMassage: any = useParams();

  const context = useContext(MassageContext);

  //Récupération du massage
  const massage = context.massages.find(
    (massage) => massage.nom === nomMassage.nom
  );

  if (!massage) return null;
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <img src={photoMassage} alt="photoMassage" className={classes.img} />
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={5}>
          <h1>
            {massage?.nom}
            <br />
            {massage?.duree} min - {massage?.prix} €
          </h1>
          <div>
            <h2>En quoi consiste ce soin</h2>
            <p style={{ whiteSpace: "pre-wrap" }}>{massage?.description}</p>
          </div>
          <div>
            <h2>Les bienfaits</h2>
            <ul className={classes.liste}>
              {massage?.bienFaits?.map((bienfait: string, index: number) => (
                <li key={index}>{bienfait}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 style={{ fontFamily: theme.fontFamily }}>Les actions</h2>
            <ul className={classes.liste}>
              {massage?.actions?.map((action: Type, index: number) => (
                <li key={index}>{action.texte}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Les contre-indications</h2>
            <ul className={classes.liste}>
              {massage.contreIndications?.map(
                (contreIndication: Type, index: number) => (
                  <li key={index}>{contreIndication.texte}</li>
                )
              )}
            </ul>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
