import {
  Button,
  createStyles,
  makeStyles,
  TextField,
  Theme,
} from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";

import { Massage } from "../../../../../Models/Massage";
import MassageContext from "../../../../../Components/Context/MassageContext";

import MassageService from "../../../../../Components/Services/MassageService";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      marginLeft: "5px",
      backgroundColor: "#D19D8E",
      color: "white",
      marginTop: "10px",
      "&:hover": {
        backgroundColor: "rgba(209, 157, 142, 0.6)",
      },
    },
  })
);

interface MassageFormProps {
  massage: Massage;
  handleClose: () => void;
}
export const MassageForm = (props: MassageFormProps) => {
  const classes = useStyles();
  const context = useContext(MassageContext);

  const [massage, setMassage] = useState<Massage>({
    id: "",
    nom: "",
    description: "",
    resume: "",
    duree: 0,
    prix: 0,
  });

  useEffect(() => {
    if (props.massage) {
      setMassage(props.massage);
    }
  }, [props.massage]);

  const handleSubmit = () => {
    if (props.massage !== undefined) {
      MassageService.updateMassage(massage);
      MassageService.getMassages().then((massages: Massage[]) => {
        context.setMassages(massages);
      });
    } else {
      MassageService.createMassage(massage);
      MassageService.getMassages().then((massages: Massage[]) => {
        context.setMassages(massages);
      });
    }
    props.handleClose();
  };

  return (
    <>
      <h2>{props.massage ? "Modification" : "Nouveau soin"} :</h2>
      <form
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleSubmit();
        }}
      >
        <TextField
          id="name"
          label="Nom"
          value={massage.nom}
          onChange={(e) => setMassage({ ...massage, nom: e.target.value })}
          fullWidth
          size="medium"
        />
        <TextField
          id="description"
          label="Description"
          value={massage.description}
          onChange={(e) =>
            setMassage({ ...massage, description: e.target.value })
          }
          fullWidth
          size="medium"
        />
        <TextField
          id="resume"
          label="Résumé"
          value={massage.resume}
          onChange={(e) => setMassage({ ...massage, resume: e.target.value })}
          fullWidth
          size="medium"
        />
        <TextField
          id="duree"
          label="Durée"
          type="number"
          value={massage.duree}
          onChange={(e) =>
            setMassage({
              ...massage,
              duree: (e.target.value as unknown) as number,
            })
          }
          fullWidth
          size="medium"
        />
        <TextField
          id="prix"
          label="Prix"
          type="number"
          value={massage.prix}
          onChange={(e) =>
            setMassage({
              ...massage,
              prix: (e.target.value as unknown) as number,
            })
          }
          fullWidth
          size="medium"
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
    </>
  );
};
