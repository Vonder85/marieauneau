import React, { useContext, useState } from "react";
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
import {
  Button,
  TableCell,
  TablePagination,
  TableRow,
} from "@material-ui/core";
import { Link } from "react-router-dom";

//Component
import { TableHeadAdmin } from "./TableHead";

//Model
import { Massage } from "../../Models/Massage";
import { Type } from "../../Models/Type";

//Context
import MassageContext from "../Context/MassageContext";

//Services
import MassageService from "../Services/MassageService";

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
      width: "100%",
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
      width: "11%",
    },
  })
)(TableCell);

const useStyles = makeStyles({
  table: {
    width: "100%",
    tableLayout: "fixed",
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
  liens: {
    textDecoration: "none",
    color: "rgba(255, 255, 255, 0.8)",
  },
});

export const TableauMassage = () => {
  const classes = useStyles();

  /**
   * Libellés des colonnes du tableau
   */
  const libelles = [
    "Nom",
    "Description",
    "Résumé",
    "Durée",
    "Prix",
    "Bienfaits",
    "Contre indications",
    "Actions",
    "Supplément",
    "Editer",
  ];
  const context = useContext(MassageContext);

  /**
   * Fonction qui supprime un massage
   * @param id id du massage à supprimer
   */
  const handleRemove = (id: string) => {
    MassageService.deleteMassage(id);
    MassageService.getMassages().then((massages: Massage[]) => {
      context.setMassages(massages);
    });
  };

  /**
   * Pagination
   */
  const [rowsPerPage, setRowsPerPage] = useState(3);
  const [page, setPage] = useState(0);
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <div>
        <Link to="/Admin/Dashboard/Massages/Edition" className={classes.liens}>
          <Button variant="contained" size="large" className={classes.button}>
            Ajouter un massage
          </Button>
        </Link>
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHeadAdmin libelles={libelles} />
          <TableBody>
            {context.massages
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((massage: Massage) => (
                <StyledTableRow key={massage.id}>
                  <StyledTableCell component="th" scope="row">
                    <p
                      style={{
                        overflow: "hidden",
                        height: "20px",
                        width: "100%",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {massage.nom}
                    </p>
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <p
                      style={{
                        overflow: "hidden",
                        height: "20px",
                        width: "100%",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {massage.description}
                    </p>
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    <p
                      style={{
                        overflow: "hidden",
                        height: "20px",
                        width: "100%",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {massage.resume}
                    </p>
                  </StyledTableCell>
                  <StyledTableCell component="th">
                    <p
                      style={{
                        overflow: "hidden",
                        height: "20px",
                        width: "100%",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {massage.duree} min
                    </p>
                  </StyledTableCell>
                  <StyledTableCell>{massage.prix} €</StyledTableCell>
                  <StyledTableCell>
                    <ul>
                      {massage.bienFaits?.map(
                        (bienfait: string, index: number) => (
                          <li
                            key={index}
                            style={{
                              overflow: "hidden",
                              height: "20px",
                              width: "100%",
                              textOverflow: "ellipsis",
                            }}
                          >
                            {bienfait}
                          </li>
                        )
                      )}
                    </ul>
                  </StyledTableCell>
                  <StyledTableCell>
                    <ul>
                      {massage.contreIndications?.map(
                        (contreIndication: Type, index: number) => (
                          <li
                            key={index}
                            style={{
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              height: "20px",
                              width: "100%",
                            }}
                          >
                            {contreIndication.texte}
                          </li>
                        )
                      )}
                    </ul>
                  </StyledTableCell>
                  <StyledTableCell>
                    <ul>
                      {massage.actions?.map((action: Type, index: number) => (
                        <li
                          key={index}
                          style={{
                            overflow: "hidden",
                            height: "20px",
                            width: "100%",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {action.texte}
                        </li>
                      ))}
                    </ul>
                  </StyledTableCell>
                  <StyledTableCell>
                    {massage.supplement?.description.trim() !== ""
                      ? "Oui"
                      : "Non"}
                  </StyledTableCell>
                  <StyledTableCell>
                    <Link
                      to={`/Admin/Dashboard/Massages/Edition/${massage.nom}`}
                      className={classes.liens}
                    >
                      <Button
                        variant="contained"
                        color="default"
                        size="small"
                        className={classes.button}
                      >
                        Modifier
                      </Button>
                    </Link>
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
        <TablePagination
          rowsPerPageOptions={[3, 5, 10]}
          labelRowsPerPage="Nombre de massages par page"
          labelDisplayedRows={({ from, to, count }) =>
            ` ${from}-${to} sur ${count} - Page ${page + 1}`
          }
          count={context.massages.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </TableContainer>
    </>
  );
};
