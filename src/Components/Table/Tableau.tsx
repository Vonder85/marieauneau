import React from "react";
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Soin } from "../../Models/Soin";
import { TableHead } from "@material-ui/core";

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

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  })
)(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

interface TableauProps {
  datas: Soin[];
}

export const Tableau = (props: TableauProps) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell>
              <b>Nom</b>
            </TableCell>
            <TableCell align="center">
              <b>Description</b>
            </TableCell>
            <TableCell align="left">
              <b>Durée</b>
            </TableCell>
            <TableCell align="left">
              <b>Prix</b>
            </TableCell>
            <TableCell align="left">
              <b>Actions</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.datas.map((soin: Soin) => (
            <StyledTableRow key={soin.nom}>
              <StyledTableCell component="th" scope="row">
                {soin.nom}
              </StyledTableCell>
              <StyledTableCell align="right">
                {soin.description}
              </StyledTableCell>
              <StyledTableCell component="th">{soin.duree} min</StyledTableCell>
              <StyledTableCell>{soin.prix} €</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
