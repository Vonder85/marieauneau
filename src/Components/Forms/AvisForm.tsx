import { Button, makeStyles, TextField } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

//Service
import { Avis } from "../../Models/Avis";
import MassageContext from "../Context/MassageContext";
import AvisService from "../Services/AvisService";
import { DatePicker } from "./Components/DatePicker";

const useStyles = makeStyles({
  button: {
    marginLeft: "5px",
    backgroundColor: "#D19D8E",
    color: "white",
    marginTop: "10px",
    "&:hover": {
      backgroundColor: "rgba(209, 157, 142, 0.6)",
    },
  },
  bienfaits: {
    display: "inline-flex",
  },
  root: {
    width: "70%",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: "100px",
  },
  form: {
    "& label.Mui-focused": {
      color: "#D19D8E",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#D19D8E",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#D19D8E",
      },
    },
  },
});

export const AvisForm = () => {
  const classes = useStyles();

  //Récupération du context
  const context = useContext(MassageContext);

  //Récupération du nom du massage dans l'url
  const titreAvis: any = useParams();

  /**
   * Permet de faire la redirection
   */
  const history = useHistory();

  /**
   * Etat d'un massage
   */
  const [avis, setAvis] = useState<Avis>({
    id: "",
    texte: "",
    auteur: "",
    titre: "",
    date: "",
  });
  useEffect(() => {
    if (titreAvis.titre !== undefined && titreAvis.titre !== null) {
      AvisService.getAvisByTitre(titreAvis.titre).then((result: Avis[]) => {
        setAvis(result[0]);
      });
    }
    window.scrollTo(0, 0);
  }, [titreAvis]);

  /**
   * Soumission / Ajout d'un avis
   */
  const handleSubmit = () => {
    if (titreAvis.titre !== undefined && titreAvis.titre !== null) {
      AvisService.updateAvis(avis).then((result) => {
        AvisService.getAvis().then((_avis: Avis[]) => {
          context.setAvis(_avis);
          history.push("/Admin/Dashboard");
        });
      });
    } else {
      AvisService.createAvis(avis).then((result) => {
        AvisService.getAvis().then((_avis: Avis[]) => {
          context.setAvis(_avis);
          history.push("/Admin/Dashboard");
        });
      });
    }
  };

  /**
   * Permet de revenir à la page précédente
   */
  function handleBack() {
    history.push("/Admin/Dashboard");
  }

  return (
    <>
      <div className={classes.root}>
        <Button className={classes.button} onClick={handleBack}>
          Retour
        </Button>
        <h2>
          {titreAvis.titre !== undefined && titreAvis.titre !== null
            ? "Modification"
            : "Nouvel avis"}{" "}
          :
        </h2>
        <form
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleSubmit();
          }}
          className={classes.form}
        >
          <TextField
            id="titre"
            label="Titre"
            value={avis.titre}
            onChange={(e) => setAvis({ ...avis, titre: e.target.value })}
            fullWidth
            size="medium"
          />
          <TextField
            multiline
            rows={6}
            id="texte"
            label="Texte"
            value={avis.texte}
            onChange={(e) => setAvis({ ...avis, texte: e.target.value })}
            fullWidth
            size="medium"
          />
          <TextField
            id="auteur"
            label="Auteur"
            value={avis.auteur}
            onChange={(e) => setAvis({ ...avis, auteur: e.target.value })}
            fullWidth
            size="medium"
          />

          <DatePicker
            label="Date"
            defaultValue={avis.date}
            handleChange={(date) => setAvis({ ...avis, date: date })}
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
            fullWidth
            className={classes.button}
          >
            Sauvegarder
          </Button>
        </form>
      </div>
    </>
  );
};
