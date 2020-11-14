import React from "react";
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

interface TableRowProps {
  datas: Soin[];
}

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
export const TableRowAdmin = (props: TableRowProps) => {
  const { datas } = props;
  const classes = useStyles();

  const handleRemove = (id: string) => {
    firebase
      .database()
      .ref("/soins/" + id)
      .remove();
  };

  return (
    <>
      {datas.map((soin: Soin) => (
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
