import { Grid, makeStyles } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
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
  adjectif: {
    color: "rgb(209, 157, 142)",
  },
  sousTitre: {
    display: "flex",
    justifyContent: "space-between",
  },
  zone: {
    marginTop: "-17px",
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (!massage) return null;
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <img src={photoMassage} alt="photoMassage" className={classes.img} />
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={5}>
          <h1>{massage?.nom}</h1>
          <div className={classes.sousTitre}>
            <h3 className={classes.adjectif}>{massage.adjectif}</h3>
            <h3>
              {massage?.duree} min - {massage?.prix} €
            </h3>
          </div>
          <div className={classes.zone}>{massage.zone}</div>
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
            {massage.actions.filter((result) => result.type === "générale")
              .length > 0 && (
              <ul>
                <b>Générales :</b>
              </ul>
            )}
            {massage.actions
              .filter((result) => result.type === "générale")
              .map((action: Type, index: number) => (
                <li key={index}>{action.texte}</li>
              ))}
          </div>
          <div>
            {massage.actions.filter((result) => result.type === "drainante")
              .length > 0 && (
              <ul>
                <b>Drainantes :</b>
              </ul>
            )}
            {massage.actions
              .filter((result) => result.type === "drainante")
              .map((action: Type, index: number) => (
                <li key={index}>{action.texte}</li>
              ))}
          </div>
          <div>
            {massage.actions.filter((result) => result.type === "immunitaire")
              .length > 0 && (
              <ul>
                <b>Immunitaire :</b>
              </ul>
            )}
            {massage.actions
              .filter((result) => result.type === "immunitaire")
              .map((action: Type, index: number) => (
                <li key={index}>{action.texte}</li>
              ))}
          </div>
          <div>
            {massage.actions.filter((result) => result.type === "musculaire")
              .length > 0 && (
              <ul>
                <b>Musculaire :</b>
              </ul>
            )}
            {massage.actions
              .filter((result) => result.type === "musculaire")
              .map((action: Type, index: number) => (
                <li key={index}>{action.texte}</li>
              ))}
          </div>
          <div>
            {massage.actions.filter(
              (result) => result.type === "sur le système nerveux"
            ).length && (
              <ul>
                <b>Sur le système nerveux :</b>
              </ul>
            )}
            {massage.actions
              .filter((result) => result.type === "sur le système nerveux")
              .map((action: Type, index: number) => (
                <li key={index}>{action.texte}</li>
              ))}
          </div>
          <div>
            <h2>Les contre-indications</h2>
            <div>
              {massage.contreIndications.filter(
                (result) => result.type === "générale"
              ).length > 0 && (
                <ul>
                  <b>Générales :</b>
                </ul>
              )}
              {massage.contreIndications
                .filter((result) => result.type === "générale")
                .map((contreIndic: Type, index: number) => (
                  <li key={index}>{contreIndic.texte}</li>
                ))}
            </div>
            <div>
              {massage.contreIndications.filter(
                (result) => result.type === "relative"
              ).length > 0 && (
                <ul>
                  <b>Relatives :</b>
                </ul>
              )}
              {massage.contreIndications
                .filter((result) => result.type === "relative")
                .map((contreIndic: Type, index: number) => (
                  <li key={index}>{contreIndic.texte}</li>
                ))}
            </div>
            <div>
              {massage.contreIndications.filter(
                (result) => result.type === "absolue"
              ).length > 0 && (
                <ul>
                  <b>Absolues :</b>
                </ul>
              )}
              {massage.contreIndications
                .filter((result) => result.type === "absolue")
                .map((contreIndic: Type, index: number) => (
                  <li key={index}>{contreIndic.texte}</li>
                ))}
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
