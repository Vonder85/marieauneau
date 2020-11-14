import React, { useContext, useState } from "react";
import * as firebase from "firebase";
import {
  Button,
  createStyles,
  makeStyles,
  TableCell,
  TableRow,
  Theme,
  withStyles,
} from "@material-ui/core";

import { Soin } from "../../Models/Soin";

import { SoinModal } from "../Modals/SoinModal";
import { useHistory } from "react-router-dom";
import SoinContext from "../../Pages/Admin/HomeAdmin/SoinContext";

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  })
)(TableRow);

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

const useStyles = makeStyles({
  button: {
    marginLeft: "5px",
    backgroundColor: "#DB997E",
    color: "white",
    "&:hover": {
      backgroundColor: "rgba(219, 153, 126, 0.6)",
    },
  },
});
export const TableRowAdmin = () => {
  const classes = useStyles();
  const context = useContext(SoinContext);

  const { soins, setSoins } = context;
  let history = useHistory();

  const handleRemove = (id: string) => {
    firebase
      .database()
      .ref("/soins/" + id)
      .remove();
    const newSoins = [...soins];
    const indexDelete = newSoins.findIndex((soin: Soin) => soin.id === id);
    newSoins.splice(indexDelete, 1);
    setSoins(newSoins);
    history.push("/Admin");
  };

  return (
    <>
      {soins.map((soin: Soin) => (
        <StyledTableRow key={soin.nom}>
          <StyledTableCell component="th" scope="row">
            {soin.nom}
          </StyledTableCell>
          <StyledTableCell align="left">{soin.description}</StyledTableCell>
          <StyledTableCell component="th">{soin.duree} min</StyledTableCell>
          <StyledTableCell>{soin.prix} €</StyledTableCell>
          <StyledTableCell>
            <SoinModal text="Modifier" soin={soin} />
            <Button
              variant="contained"
              color="default"
              size="small"
              className={classes.button}
              onClick={() => handleRemove(soin.id)}
            >
              Supprimer
            </Button>
          </StyledTableCell>
        </StyledTableRow>
      ))}
    </>
  );
};
