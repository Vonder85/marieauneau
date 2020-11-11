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
import Paper from "@material-ui/core/Paper";
import { Soin } from "../../Models/Soin";
import { TableHeadAdmin } from "./TableHead";
import { TableRowAdmin } from "./TableRow";

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

  const libelles = ["Nom", "Description", "Durée", "Prix", "Actions"];

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHeadAdmin libelles={libelles} />
        <TableBody>
          <TableRowAdmin datas={props.datas} />
        </TableBody>
      </Table>
    </TableContainer>
  );
};
