import React, { useContext, useEffect } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

//Images
import profil from "../../../Images/APropos/profil.jpg";

//Component
import { CarouselImages } from "../../../Components/Carousel/CarouselImages";

//Context
import MassageContext from "../../../Components/Context/MassageContext";
import { AffichageAvis } from "../../../Components/Avis/AffichageAvis";

const useStyles = makeStyles({
  presentation: {
    width: "80%",
    color: "rgb(209, 157, 142)",
    fontSize: "1em",
    borderRadius: "10px",
    marginLeft: "auto",
    marginRight: "auto",
  },

  root: {
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: "400px",
  },
  imageProfil: {
    width: "100%",
    height: "550px",
  },

  liens: {
    textDecoration: "none",
    color: "rgb(209, 157, 142)",
  },
});

export const HomeMobile = () => {
  const classes = useStyles();
  const context = useContext(MassageContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Grid container>
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
          </div>
        </Grid>
        <Grid item sm={6} md={6} xl={6}>
          <img src={profil} alt="profil" className={classes.imageProfil} />
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
              <br />
              <br />
            </div>
          </Grid>
          <Grid item sm={6} md={6} xl={6}>
            <CarouselImages images={context.imagesCarousel} />
          </Grid>
        </Grid>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" delay={100}>
        <AffichageAvis />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" delay={100}>
        <div className="powr-instagram-feed" id="b4e6f43a_1607520520"></div>
      </ScrollAnimation>
    </div>
  );
};
