import {
  Button,
  createStyles,
  makeStyles,
  TableCell,
  TableRow,
  Theme,
  withStyles,
} from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";

//Context
import MassageContext from "../Context/MassageContext";

//Service
import ImageService from "../Services/ImageService";

interface TableRowImageProps {
  image: firebase.storage.Reference;
}

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
  button: {
    marginLeft: "5px",
    backgroundColor: "#D19D8E",
    color: "white",
    marginTop: "10px",
    "&:hover": {
      backgroundColor: "rgba(209, 157, 142, 0.6)",
    },
  },

  image: {
    width: "250px",
    height: "250px",
  },
});

export const TableRowImage = (props: TableRowImageProps) => {
  const { image } = props;
  const classes = useStyles();
  const context = useContext(MassageContext);
  const [url, setUrl] = useState("");

  useEffect(() => {
    image.getDownloadURL().then((res) => {
      setUrl(res);
    });
  }, [image]);

  /**
   * Fonction qui supprime une photo du carousel
   * @param path path de la photo à supprimer
   */
  const handleRemove = (path: string) => {
    ImageService.deleteImage(path);
    ImageService.getImages("Carousel").then(
      (_images: firebase.storage.Reference[]) => {
        context.setImagesCarousel(_images);
      }
    );
  };

  return (
    <StyledTableRow key={image.fullPath}>
      <StyledTableCell component="th" scope="row">
        <img src={url} alt="imageCarousel" className={classes.image} />
      </StyledTableCell>

      <StyledTableCell>
        <Button
          variant="contained"
          color="default"
          size="small"
          className={classes.button}
          onClick={() => handleRemove(image.fullPath)}
        >
          Supprimer
        </Button>
      </StyledTableCell>
    </StyledTableRow>
  );
};
