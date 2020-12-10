import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import { TablePagination } from "@material-ui/core";

//Component
import { TableHeadAdmin } from "./TableHead";
import { TableRowImage } from "./TableRowImage";

//Service
import ImageService from "../Services/ImageService";

//Context
import MassageContext from "../Context/MassageContext";

const useStyles = makeStyles({
  table: {
    width: "100%",
    tableLayout: "fixed",
  },
});

export const TableauImages = () => {
  const classes = useStyles();
  const libelles = ["Photo", "Editer"];

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /**
   * Ajoute l'image au carousel
   */
  const uploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      const file = e.target.files[0];
      ImageService.addImage("Carousel", file).then((res) => {
        ImageService.getImages("Carousel").then((result) => {
          context.setImagesCarousel(result);
        });
      });
    }
  };

  return (
    <>
      <input type="file" onChange={(e) => uploadFile(e)} />

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHeadAdmin libelles={libelles} />
          <TableBody>
            {context.imagesCarousel
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((_image: firebase.storage.Reference) => (
                <TableRowImage image={_image} />
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          labelRowsPerPage="Nombre d'avis par page"
          labelDisplayedRows={({ from, to, count }) =>
            ` ${from}-${to} sur ${count} - Page ${page + 1}`
          }
          count={context.avis.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </TableContainer>
    </>
  );
};
