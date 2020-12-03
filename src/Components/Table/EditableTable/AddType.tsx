import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  TableCell,
  TableRow,
  TextField,
  Select,
  makeStyles,
} from "@material-ui/core";

import addIcon from "../../../Images/Icons/addIconBlack.svg";

import { Type } from "../../../Models/Type";

const useStyles = makeStyles({
  icon: {
    width: "25px",
  },
});

/**
 * Props du composant
 */
interface AddTypeProps {
  /**
   * transmet la data
   * @param value action ou contre indication
   */
  handleChange: (value: Type) => void;

  /**
   * label du type concerné
   */
  label: string;
}

/**
 * Formulaire de saisie pour ajouter une metaProperty
 * @param props
 * @constructor
 */
export const AddType = (props: AddTypeProps) => {
  const classes = useStyles();
  /**
   * Liste des options des actions
   */
  const optionsActions = [
    { label: "générale", value: "générale" },
    { label: "drainante", value: "drainante" },
    { label: "immunitaire", value: "immunitaire" },
    { label: "sur le système nerveux", value: "sur le système nerveux" },
    { label: "musculaire", value: "musculaire" },
  ];

  /**
   * Liste des options des contre indications
   */
  const optionsContreIndications = [
    { label: "générale", value: "générale" },
    { label: "relative", value: "relative" },
    { label: "absolue", value: "absolue" },
  ];
  /**
   * Etat pour afficher le message d'erreur
   */
  const [errorMsg, setErrorMsg] = useState(false);

  /**
   * Etat local d'une data
   */
  const [data, setData] = useState<Type>({
    texte: "",
    type: "",
  });

  /**
   * Ajoute une metaProperty au metaProduit
   */
  function addType() {
    if (data.texte === undefined || data.texte.trim() === "") {
      setErrorMsg(true);
    } else {
      props.handleChange(data);
      setData({
        texte: "",
        type: "",
      });
      setErrorMsg(false);
    }
  }

  return (
    <TableRow>
      <TableCell>
        <TextField
          id="text"
          label="Texte"
          variant="outlined"
          fullWidth
          value={data.texte}
          onChange={(e) =>
            setData({
              ...data,
              texte: e.target.value,
            })
          }
          error={errorMsg && data.texte.trim() === ""}
          helperText={
            errorMsg && data.texte.trim() === "" && "Veuillez saisir un texte"
          }
        />
      </TableCell>
      <TableCell>
        <FormControl variant="outlined" fullWidth>
          <InputLabel id="genre">Genre</InputLabel>
          <Select
            labelId="genre"
            id="genre"
            value={data.type}
            label="Genre"
            onChange={(e: any) => setData({ ...data, type: e.target.value })}
          >
            {props.label === "Actions"
              ? optionsActions.map((option) => (
                  <MenuItem value={option.value}>{option.label}</MenuItem>
                ))
              : optionsContreIndications.map((option) => (
                  <MenuItem value={option.value}>{option.label}</MenuItem>
                ))}
          </Select>
        </FormControl>
      </TableCell>

      <TableCell>
        <img
          src={addIcon}
          className={classes.icon}
          alt="addIcon"
          onClick={addType}
        />
      </TableCell>
    </TableRow>
  );
};
