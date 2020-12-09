import React, { useContext, useEffect } from "react";
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
import { Button, TableCell, TableRow } from "@material-ui/core";
import { Link } from "react-router-dom";

//Component
import { TableHeadAdmin } from "./TableHead";

//Service
import AvisService from "../Services/AvisService";

//Model
import { Avis } from "../../Models/Avis";
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

export const TableauAvis = () => {
  const classes = useStyles();
  const libelles = ["Titre", "Texte", "Auteur", "Date", "Editer"];

  //Récupération du context
  const context = useContext(MassageContext);

  /**
   * Fonction qui supprime un avis
   * @param id id de l'avis à supprimer
   */
  const handleRemove = (id: string) => {
    AvisService.deleteAvis(id);
    AvisService.getAvis().then((_avis: Avis[]) => {
      context.setAvis(_avis);
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div>
        <Link to="/Admin/Dashboard/Avis/Edition" className={classes.liens}>
          <Button variant="contained" size="large" className={classes.button}>
            Ajouter un avis
          </Button>
        </Link>
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHeadAdmin libelles={libelles} />
          <TableBody>
            {context.avis?.map((_avis: Avis) => (
              <StyledTableRow key={_avis.id}>
                <StyledTableCell component="th" scope="row">
                  <p
                    style={{
                      overflow: "hidden",
                      height: "20px",
                      width: "100%",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {_avis.titre}
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
                    {_avis.texte}
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
                    {_avis.auteur}
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
                    {_avis.date}
                  </p>
                </StyledTableCell>
                <StyledTableCell>
                  <Link
                    to={`/Admin/Dashboard/Avis/Edition/${_avis.titre}`}
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
                    onClick={() => handleRemove(_avis.id)}
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
