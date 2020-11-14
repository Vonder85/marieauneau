import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import { TableHeadAdmin } from "./TableHead";
import { TableRowAdmin } from "./TableRow";

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export const Tableau = () => {
  const classes = useStyles();

  const libelles = ["Nom", "Description", "Durée", "Prix", "Actions"];

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHeadAdmin libelles={libelles} />
        <TableBody>
          <TableRowAdmin />
        </TableBody>
      </Table>
    </TableContainer>
  );
};
