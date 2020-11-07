import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { Soin } from "../../../../../Models/Soin";

export const NewSoinForm = () => {
  const [soin, setSoin] = useState<Soin>({
    nom: "",
    description: "",
    duree: 0,
    prix: 0,
  });

  const handleSubmit = () => {};

  return (
    <>
      <h2>Nouveau soin :</h2>

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
          style={{ background: "#DB997E", marginTop: "10px" }}
          variant="contained"
          size="large"
          fullWidth
        >
          Sauvegarder
        </Button>
      </form>
    </>
  );
};
