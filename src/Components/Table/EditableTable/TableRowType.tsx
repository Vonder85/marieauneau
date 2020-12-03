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

import checkIcon from "../../../Images/Icons/checkIcon.svg";
import crossIcon from "../../../Images/Icons/crossIcon.svg";
import editIcon from "../../../Images/Icons/editIcon.svg";
import blackTrashIcon from "../../../Images/Icons/trashIcon.svg";

import { Type } from "../../../Models/Type";

const useStyles = makeStyles({
  icon: {
    width: "25px",
  },
});

/**
 * Props du composant
 */
interface TableRowTypeProps {
  /**
   * label du type concerné
   */
  label: string;

  /**
   * Action ou contreIndication
   */
  data: Type;

  /**
   * Index de la data dans la liste
   */
  index: number;

  /**
   * Transmet l'index de la data à supprimer
   * @param index
   */
  handleRemove: (index: number) => void;

  /**
   * transmet la data et son index pour la modification
   * @param data action ou contre indication
   * @param _index
   */
  handleUpdate: (data: Type, _index: number) => void;
}
export const TableRowType = (props: TableRowTypeProps) => {
  const classes = useStyles();
  /**
   * Permet d'accéder plus rapidement aux props
   */
  const { data, index, handleRemove, handleUpdate } = props;

  /**
   * Etat pour afficher le message d'erreur
   */
  const [errorMsg, setErrorMsg] = useState(false);

  /**
   * data concernée
   */
  const [dataSelected, setDataSelected] = useState(data);

  /**
   * Ancienne data non modifiée (utile pour l'annulation)
   */
  const oldData = data;

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
   * Etat du mode Edit
   */
  const [inEditMode, setInEditMode] = useState({
    status: false,
    rowKey: 0,
  });

  /**
   * Active le mode edit
   *@param _index
   */
  const onEdit = (_index: number) => {
    setInEditMode({
      status: true,
      rowKey: _index,
    });
  };

  /**
   * Annule l'édition en cours
   */
  const onCancel = () => {
    setInEditMode({
      status: false,
      rowKey: 0,
    });
    setDataSelected(oldData);
  };

  /**
   * Validation modification
   * @param _data action ou contre indication
   * @param _index index de la data pour la modifier
   */
  function onSave(_data: Type, _index: number) {
    if (_data.texte.trim() === "") {
      setErrorMsg(true);
    } else {
      setDataSelected(_data);
      setInEditMode({
        status: false,
        rowKey: 0,
      });
      handleUpdate(_data, _index);
      setErrorMsg(false);
    }
  }

  return (
    <TableRow key={index}>
      <TableCell>
        {inEditMode.status && inEditMode.rowKey === index ? (
          <TextField
            id="texte"
            label="texte"
            variant="outlined"
            fullWidth
            value={dataSelected.texte}
            onChange={(e) =>
              setDataSelected({
                ...dataSelected,
                texte: e.target.value,
              })
            }
            error={errorMsg && data.texte.trim() === ""}
            helperText={
              errorMsg && data.texte.trim() === "" && "Veuillez saisir un texte"
            }
          />
        ) : (
          data.texte
        )}
      </TableCell>
      <TableCell>
        {inEditMode.status && inEditMode.rowKey === index ? (
          <FormControl variant="outlined">
            <InputLabel id="genre">Genre</InputLabel>
            <Select
              labelId="genre"
              id="genre"
              value={dataSelected.type}
              label="Genre"
              onChange={(e: any) =>
                setDataSelected({ ...data, type: e.target.value })
              }
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
        ) : (
          data.type
        )}
      </TableCell>

      <TableCell>
        {inEditMode.status && inEditMode.rowKey === index ? (
          <React.Fragment>
            <img
              src={checkIcon}
              alt="checkIcon"
              onClick={() => onSave(dataSelected, index)}
              className={classes.icon}
            />

            <img
              src={crossIcon}
              alt="crossIcon"
              onClick={() => onCancel()}
              className={classes.icon}
            />
          </React.Fragment>
        ) : (
          <>
            <img
              src={editIcon}
              alt="editIcon"
              onClick={() => onEdit(index)}
              className={classes.icon}
            />
            <img
              src={blackTrashIcon}
              alt="blackTrashIcon"
              onClick={() => handleRemove(index)}
              className={classes.icon}
            />
          </>
        )}
      </TableCell>
    </TableRow>
  );
};
