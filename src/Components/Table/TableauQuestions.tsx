import React, { useContext, useEffect, useState } from "react";
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

//Service
import QuestionService from "../Services/QuestionService";

//Model
import { Question } from "../../Models/Question";

//Context
import MassageContext from "../Context/MassageContext";

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

export const TableauQestions = () => {
  const classes = useStyles();
  const libelles = ["Titre", "Réponse", "Catégorie", "Editer"];

  //Récupération du context
  const context = useContext(MassageContext);

  //Pagination
  const [rowsPerPage, setRowsPerPage] = useState(5);
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

  /**
   * Fonction qui supprime une question
   * @param id id de la question à supprimer
   */
  const handleRemove = (id: string) => {
    QuestionService.deleteQuestion(id);
    QuestionService.getQuestions().then((_questions: Question[]) => {
      context.setQuestions(_questions);
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div>
        <Link to="/Admin/Dashboard/Questions/Edition" className={classes.liens}>
          <Button variant="contained" size="large" className={classes.button}>
            Ajouter une question
          </Button>
        </Link>
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHeadAdmin libelles={libelles} />
          <TableBody>
            {context.questions
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((_question: Question) => (
                <StyledTableRow key={_question.id}>
                  <StyledTableCell component="th" scope="row">
                    <p
                      style={{
                        overflow: "hidden",
                        height: "20px",
                        width: "100%",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {_question.titre}
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
                      {_question.reponse}
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
                      {_question.categorie}
                    </p>
                  </StyledTableCell>

                  <StyledTableCell>
                    <Link
                      to={`/Admin/Dashboard/Questions/Edition/${_question.id}`}
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
                      onClick={() => handleRemove(_question.id)}
                    >
                      Supprimer
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          labelRowsPerPage="Nombre de questions par page"
          labelDisplayedRows={({ from, to, count }) =>
            ` ${from}-${to} sur ${count} - Page ${page + 1}`
          }
          count={context.questions.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </TableContainer>
    </>
  );
};
