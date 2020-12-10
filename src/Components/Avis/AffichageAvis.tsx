import { makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import Pagination from "@material-ui/lab/Pagination";

import MassageContext from "../Context/MassageContext";
import { ContenantAvis } from "./ContenantAvis";

const useStyles = makeStyles({
  avis: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around ",
    marginTop: "20px",
    marginLeft: "20px",
    marginRight: "20px",
  },
  pagination: {
    "& .MuiPagination-ul": {
      justifyContent: "center",
    },
  },
});

export const AffichageAvis = () => {
  const classes = useStyles();

  const themeQueries = useTheme();
  const smScreen = useMediaQuery(themeQueries.breakpoints.down("sm"));

  /**
   * Pagination
   */
  const [rowsPerPage, setRowsPerPage] = useState(0);
  const [page, setPage] = useState(1);
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  useEffect(() => {
    if (smScreen) {
      setRowsPerPage(1);
    } else {
      setRowsPerPage(3);
    }
  }, [smScreen]);

  /**
   * Récupération du context
   */
  const context = useContext(MassageContext);
  return (
    <>
      <div className={classes.avis} style={{ width: `${smScreen && "90%"}` }}>
        {context.avis
          ?.slice(
            (page - 1) * rowsPerPage,
            (page - 1) * rowsPerPage + rowsPerPage
          )
          .map((_avis) => (
            <ContenantAvis avis={_avis} />
          ))}
      </div>
      <Pagination
        count={
          smScreen ? context.avis.length : Math.round(context.avis.length / 3)
        }
        siblingCount={0}
        page={page}
        defaultPage={1}
        boundaryCount={2}
        onChange={handleChangePage}
        className={classes.pagination}
      />
    </>
  );
};
