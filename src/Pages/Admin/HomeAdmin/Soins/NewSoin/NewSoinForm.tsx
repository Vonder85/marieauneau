import {
  Button,
  createStyles,
  makeStyles,
  TextField,
  Theme,
} from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import * as firebase from "firebase";

import { Soin } from "../../../../../Models/Soin";
import SoinContext from "../../SoinContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      marginLeft: "5px",
      backgroundColor: "#DB997E",
      color: "white",
      marginTop: "10px",
      "&:hover": {
        backgroundColor: "rgba(219, 153, 126, 0.6)",
      },
    },
  })
);

interface NewSoinFormProps {
  soin: Soin;
  handleClose: () => void;
}
export const NewSoinForm = (props: NewSoinFormProps) => {
  const classes = useStyles();
  const context = useContext(SoinContext);

  const { soin, setSoin, setSoins, soins } = context;

  useEffect(() => {
    if (props.soin) {
      setSoin(props.soin);
    }
  }, []);

  const handleSubmit = () => {
    if (props.soin) {
      firebase
        .database()
        .ref("/soins/" + soin.id)
        .update(soin);
      const indexUpdate = soins.findIndex(
        (_soin: Soin) => _soin.id === soin.id
      );
      const newSoins = [...soins];
      newSoins.splice(indexUpdate, 1, soin);
      setSoins(newSoins);
    } else {
      const soinId = firebase.database().ref("/soins").push(soin).key;
      firebase
        .database()
        .ref("/soins/" + soinId)
        .update({
          id: soinId,
        });
      setSoins([...soins, soin]);
    }

    props.handleClose();
  };

  return (
    <>
      <h2>{props.soin ? "Modification" : "Nouveau soin"} :</h2>
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
          value={soin.nom}
          onChange={(e) => setSoin({ ...soin, nom: e.target.value })}
          fullWidth
          size="medium"
        />
        <TextField
          id="description"
          label="Description"
          value={soin.description}
          onChange={(e) => setSoin({ ...soin, description: e.target.value })}
          fullWidth
          size="medium"
        />
        <TextField
          id="duree"
          label="Durée"
          type="number"
          value={soin.duree}
          onChange={(e) =>
            setSoin({ ...soin, duree: (e.target.value as unknown) as number })
          }
          fullWidth
          size="medium"
        />
        <TextField
          id="prix"
          label="Prix"
          type="number"
          value={soin.prix}
          onChange={(e) =>
            setSoin({ ...soin, prix: (e.target.value as unknown) as number })
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
