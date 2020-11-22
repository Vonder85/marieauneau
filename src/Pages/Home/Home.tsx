import { Button, Grid, makeStyles } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import { Link } from "react-router-dom";

import fond1 from "../../Images/homePage/fond1.png";
import materiel from "../../Images/homePage/materiel.jpg";
import cabinetJune from "../../Images/homePage/cabinetJune.png";
import chezJune from "../../Images/homePage/chezJune.jpg";
import MassageContext from "../../Components/Context/MassageContext";
import { Massage } from "../../Models/Massage";
import { useFetchMassages } from "../../Components/Hooks/Fetch/UseFetchMassage";
import MassageService from "../../Components/Services/MassageService";

const theme = { fontFamily: "BillySignature" };
const useStyles = makeStyles({
  presentation: {
    width: "60%",
    color: "rgb(209, 157, 142)",
    fontFamily: theme.fontFamily,
    //fontWeight: "bold",
    fontSize: "1em",
    borderRadius: "10px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  button: {
    backgroundColor: "#D19D8E",
    color: "white",
    marginTop: "10px",
    "&:hover": {
      backgroundColor: "rgba(209, 157, 142, 0.6)",
    },
    width: "200px",
    height: "70px",
    marginRight: "auto",
    marginLeft: "auto",
    borderRadius: "50px",
  },
  logo: {
    height: "300PX",
    marginRight: "auto",
    marginLeft: "auto",
  },
  divLogo: {
    width: "100%",
    display: "flex",
    marginTop: "40px",
  },
  title: { textAlign: "center", padding: "20%", color: "rgb(209, 157, 142)" },
  root: {
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: "400px",
  },
  footer: {
    height: "150px",
    backgroundColor: "rgb(209, 157, 142)",
    color: "white",
    fontFamily: theme.fontFamily,
    fontWeight: "bold",
    fontSize: "1em",
    textAlign: "center",
    marginTop: "-5px",
    paddingTop: "20px",
  },
  liens: {
    textDecoration: "none",
    color: "rgb(209, 157, 142)",
  },
});

export const Home = () => {
  const classes = useStyles();
  const context = useContext(MassageContext);

  useEffect(() => {
    MassageService.getMassages().then((massages: Massage[]) => {
      context.setMassages(massages);
    });
  });

  const { massages } = context;

  return (
    <div className={classes.root}>
      <Grid container>
        <div className={classes.divLogo}>
          <Grid item sm={4} md={4} xl={4}>
            <h1 className={classes.title}>Bien-être</h1>
          </Grid>
          <Grid item sm={4} md={4} xl={4} style={{ textAlign: "center" }}>
            <img src={fond1} alt="fond1" className={classes.logo} />
          </Grid>
          <Grid item sm={4} md={4} xl={4}>
            <h1 className={classes.title}>Sérennité</h1>
          </Grid>
        </div>
      </Grid>
      <Grid container>
        <Grid item sm={6} md={6} xl={6}>
          <img src={cabinetJune} alt="cabinetJune" className={classes.image} />
        </Grid>
        <Grid item sm={6} md={5} xl={6}>
          <div className={classes.presentation}>
            <h1>Bienvenue !</h1>
            <b>
              Je suis Marie, facialiste. Venez découvrir entre mes mains
              l’efficacité des massages anti âge et liftant.
            </b>
            <br />
            <br />
            Mon objectif: vous apporter un moment de détente et d’apaisement
            pendant les massages. Mais également vous apprendre à prendre soin
            de vous chez vous. Un esprit détendue et un visage lumineux, tonique
            et repulpé.
            <br />
            <br />
            Je vous propose {massages.length} massages :
            <ul>
              {massages?.map((massage: Massage) => (
                <Link to="/Massages" className={classes.liens}>
                  <li key={massage.id}>{massage.nom}</li>
                </Link>
              ))}
            </ul>
          </div>
        </Grid>
      </Grid>
      <ScrollAnimation animateIn="fadeIn" delay={200}>
        <Grid container>
          <Grid item sm={6} md={6} xl={6}>
            <div className={classes.presentation}>
              <h1>Chez June</h1>
              <b>
                J’ai le plaisir de vous accueillir dans l’appartement Chez June.
                Crée par Victoria Lauro en 2019, ce magnifique appartement est
                situé dans le quartier Graslin, en plein centre de nantes.
                Derrière la porte de Chez June, se trouvent 240m2 dédiés à votre
                bien être.
              </b>
              <br />
              <br />
              Le concept ? Un appartement Haussmannien pensé pour vous,
              transformé en un <b>lieu de vie unique, chaleureux, inspirant</b>.
              Chez June, la déco épurée des salles de pratique et l’ambiance
              intimiste du salon vont vous faire basculer dans l’univers idéal
              pour déconnecter, pratiquer Yoga / Pilates, profiter d’une cantine
              healthy et consulter des professionnels du bien-être.
              <br />
              <br />
              <b>Bienvenue chez June, bienvenue chez Vous.</b>
              <br />
              <br />
              <b>Chez June</b>, 7, rue des Cadeniers, à Nantes
            </div>
          </Grid>
          <Grid item sm={6} md={6} xl={6}>
            <img src={chezJune} alt="chezJune" className={classes.image} />
          </Grid>
        </Grid>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" delay={100}>
        <Grid container className={classes.footer}>
          <Grid item sm={6} md={4} xl={4}>
            <div>
              Marie Auneau
              <br />
              <br />
              06 29 38 24 55
              <br />
              <br />7 rue des Cardeniers
            </div>
          </Grid>
          <Grid item sm={6} md={4} xl={4}>
            <div>
              Une question, une remarque ?
              <br />
              <br />
              Retrouvez notre FAQ
              <br />
              <br />
              Ou contactez moi <br />
              hello@marieauneau.fr
            </div>
          </Grid>
          <Grid item sm={6} md={4} xl={4}>
            <Link
              to="/APropos"
              style={{ color: "white", textDecoration: "none" }}
            >
              A propos
            </Link>
          </Grid>
        </Grid>
      </ScrollAnimation>
    </div>
  );
};
