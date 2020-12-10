import { Grid, makeStyles } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Context
import MassageContext from "../../Components/Context/MassageContext";

//Service
import ImageService from "../../Components/Services/ImageService";

//Component
import { AffichageActions } from "../../Components/Massages/AffichageActions";
import { AffichageContreIndic } from "../../Components/Massages/AffichageContreIndic";

const useStyles = makeStyles({
  root: {
    height: "100%",
    marginTop: "100px",
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
  nom: {
    fontFamily: "Abril Fatface",
  },
  titre: {
    textAlign: "left",
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
    if (massage) {
      getUrl(massage.image);
    }
  }, [massage]);

  const [urlImage, setUrlImage] = useState<string>("");
  if (!massage) return null;
  function getUrl(nom: string) {
    ImageService.getDownloadUrlImage("Massages", nom).then((res) => {
      setUrlImage(res);
    });
  }

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
          <img src={urlImage} alt="photoMassage" className={classes.img} />
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={5}>
          <h1 className={classes.nom}>{massage?.nom}</h1>
          <div className={classes.sousTitre}>
            <h3 className={classes.adjectif}>{massage.adjectif}</h3>
            <h3>
              {massage?.duree} min - {massage?.prix} €{" "}
              {massage.nom === "Gua Sha" && "/ 30 min - 50€"}
            </h3>
          </div>
          <div className={classes.zone}>{massage.zone}</div>

          <h2 className={classes.titre}>En quoi consiste ce soin</h2>

          <div>
            <p>{massage?.description}</p>
          </div>
          <h2 className={classes.titre}>Les bienfaits</h2>
          <ul className={classes.liste}>
            {massage?.bienFaits?.map((bienfait: string, index: number) => (
              <li key={index}>{bienfait}</li>
            ))}
          </ul>

          <AffichageActions actions={massage.actions} />
          <AffichageContreIndic contreIndications={massage.contreIndications} />
        </Grid>
      </Grid>
    </div>
  );
};
