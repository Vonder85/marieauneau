import { Button, Grid, makeStyles, Paper } from "@material-ui/core";
import React from "react";
import { useFetchMassages } from "../../Components/Hooks/Fetch/UseFetchMassage";
import fond1 from "../../Images/homePage/fond1.png";
import massageVisage from "../../Images/homePage/massageVisage.jpg";

const theme = { fontFamily: "BillySignature" };
const useStyles = makeStyles({
  presentation: {
    width: "60%",
    color: "rgb(209, 157, 142)",
    fontFamily: theme.fontFamily,
    fontWeight: "bold",
    fontSize: "1em",
    borderRadius: "10px",
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
});

export const Home = () => {
  const classes = useStyles();
  useFetchMassages();

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
        <Grid item sm={6} md={7} xl={6}>
          <img src={massageVisage} alt="massageVisage" />
        </Grid>
        <Grid item sm={6} md={5} xl={6}>
          <div className={classes.presentation}>
            <h1>Un massage du visage personnalisé</h1>
            Un massage du visage personnalisé C’est en fonction de votre peau,
            de votre ressenti et de vos envies, que je vous proposerai un
            massage du visage adapté. Vous pourrez retrouver le célèbre massage
            du Kobi-Do, mais aussi de la Detox Facial, du stretching, des
            méthodes intra-buccal, ainsi que l’utilisation de Gua Sha, le tout
            associé à un soin cosmétique ; Venez découvrir et réserver le
            massage du visage qui vous conviendra le mieux.
          </div>
          <Button className={classes.button}>Découvrir les massages</Button>
        </Grid>
      </Grid>
    </div>
  );
};
