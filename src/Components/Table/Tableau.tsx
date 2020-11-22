import React, { useContext } from "react";
import {
  createStyles,
  makeStyles,
  Theme,
  withStyles,
} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import { TableHeadAdmin } from "./TableHead";
import { Massage } from "../../Models/Massage";
import { MassageModal } from "../Modals/MassageModal";
import { Button, TableCell, TableRow } from "@material-ui/core";
import MassageContext from "../Context/MassageContext";
import MassageService from "../Services/MassageService";

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
  table: {
    width: "100%",
  },
  button: {
    marginLeft: "5px",
    backgroundColor: "#D19D8E",
    color: "white",
    marginTop: "10px",
    "&:hover": {
      backgroundColor: "rgba(209, 157, 142, 0.6)",
    },
  },
});

export const Tableau = () => {
  const classes = useStyles();
  const libelles = ["Nom", "Description", "Résumé", "Durée", "Prix", "Actions"];
  const context = useContext(MassageContext);

  const handleRemove = (id: string) => {
    MassageService.deleteMassage(id);
    MassageService.getMassages().then((massages: Massage[]) => {
      context.setMassages(massages);
    });
  };

  return (
    <>
      <div>
        <MassageModal text="Ajouter un massage" />
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHeadAdmin libelles={libelles} />
          <TableBody>
            {context.massages?.map((massage: Massage) => (
              <StyledTableRow key={massage.id}>
                <StyledTableCell component="th" scope="row">
                  {massage.nom}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {massage.description}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {massage.resume}
                </StyledTableCell>
                <StyledTableCell component="th">
                  {massage.duree} min
                </StyledTableCell>
                <StyledTableCell>{massage.prix} €</StyledTableCell>
                <StyledTableCell>
                  <MassageModal text="Modifier" massage={massage} />
                  <Button
                    variant="contained"
                    color="default"
                    size="small"
                    className={classes.button}
                    onClick={() => handleRemove(massage.id)}
                  >
                    Supprimer
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
