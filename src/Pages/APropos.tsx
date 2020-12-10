import { Grid, makeStyles } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import MassageContext from "../Components/Context/MassageContext";

import { Massage } from "../Models/Massage";

import profil from "../Images/APropos/profil.jpg";

const useStyles = makeStyles({
  presentation: {
    width: "70%",
    color: "rgb(209, 157, 142)",
    fontSize: "1em",
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
    backgroundColor: "white",
    marginTop: "100px",
  },
  photo: {
    width: "400px",
    height: "520px",
    borderRadius: "20px",
  },
  divPhoto: {
    textAlign: "center",
  },
});
export const APropos = () => {
  const classes = useStyles();
  const context = useContext(MassageContext);

  const { massages } = context;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} md={6} sm={6} className={classes.divPhoto}>
          <img src={profil} alt="profil" className={classes.photo} />
        </Grid>
        <Grid item xs={12} md={6} sm={6}>
          <div className={classes.presentation}>
            Je suis Marie et je suis technicienne visage (facialiste en
            formation). Après 5 ans à évoluer dans le monde de l’événementiel
            j’ai décidé d’entamer une reconversion professionnelle. Attirée
            depuis quelques années par la beauté et le bien être, je me suis
            naturellement dirigée vers ce secteur.
            <br />
            <br />
            J’ai intégré la première école de France à former au métier de
            Facialiste : L’Académie des Facialistes. Fondée par des expertes du
            domaine, je me forme actuellement aux techniques les plus
            innovantes.
            <br />
            <br />
            Je prépare en parallèle de ce cursus mon CAP esthétique afin de
            valider le titre de facialiste. Je souhaite proposer à mes clientes
            les meilleures protocoles. Et allier la gestuelle pointue de la
            facialiste et les connaissances approfondies des différents
            cosmétiques utilisés. Mon objectif: vous apporter un moment de
            détente et d’apaisement pendant les massages. Mais également vous
            apprendre à prendre soin de vous chez vous. Un esprit détendue et un
            visage lumineux, tonique et repulpé.
            <br />
            <br />
            Je vous propose {massages.length} massages :
            <ul>
              {massages?.map((massage: Massage) => (
                <Link
                  to={`/Massages/${massage?.nom}`}
                  className={classes.liens}
                >
                  <li key={massage.id}>{massage.nom}</li>
                </Link>
              ))}
            </ul>
            <br />
            <br />
            Un massage crânien fera son arrivée courant 2021.
            <br />
            <br />
            Suivez moi sur les réseaux pour être au courant des offres et
            nouveautés. J’ai hâte de vous rencontrer.
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
