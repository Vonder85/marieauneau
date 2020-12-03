import {
  Button,
  makeStyles,
  TextareaAutosize,
  TextField,
  Theme,
} from "@material-ui/core";
import React, { useState } from "react";

import { Supplement } from "../../../Models/Supplement";

const theme = { fontFamily: "BillySignature" };
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
  form: {
    fontFamily: theme.fontFamily,
  },
});

interface AjoutSupplementProps {
  /**
   * Permet de transmettre le supplément au composant parent
   */
  handleChange: (supp: Supplement) => void;
  /**
   * Permet de fermer la modal
   */
  handleClose: () => void;
}
export const AjoutSupplement = (props: AjoutSupplementProps) => {
  const classes = useStyles();
  /**
   * Etat local du supplément
   */
  const [supp, setSupp] = useState<Supplement>({
    description: "",
    prix: 0,
    duree: 0,
  });

  function handleSubmit() {
    props.handleChange(supp);
    props.handleClose();
  }

  return (
    <>
      <h1>Ajouter un supplément</h1>
      <br />
      <form
        className={classes.form}
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleSubmit();
        }}
      >
        <label htmlFor="description" style={{ color: "rgba(0, 0, 0, 0.5)" }}>
          Description
        </label>
        <TextareaAutosize
          rowsMin={3}
          id="description"
          value={supp.description}
          onChange={(e) => setSupp({ ...supp, description: e.target.value })}
          style={{ width: "100%" }}
        />
        <TextField
          id="duree"
          label="Durée"
          type="number"
          value={supp.duree}
          onChange={(e) =>
            setSupp({
              ...supp,
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
          value={supp.prix}
          onChange={(e) =>
            setSupp({
              ...supp,
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
