import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";

import { AjoutSupplement } from "../Table/EditableTable/AjoutSupplement";
import { Button } from "@material-ui/core";
import { Supplement } from "../../Models/Supplement";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      marginLeft: "5px",
      backgroundColor: "#D19D8E",
      color: "white",
      marginTop: "10px",
      "&:hover": {
        backgroundColor: "rgba(209, 157, 142, 0.6)",
      },
    },
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      width: "400px",
      height: "400px",
    },
  })
);

interface SuppModalProps {
  handleUpdate: (supp: Supplement) => void;
}
export default function SuppModal(props: SuppModalProps) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="default"
        size="small"
        className={classes.button}
        onClick={handleOpen}
      >
        Ajouter un supplément
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.modal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <div className={classes.paper}>
          <AjoutSupplement
            handleChange={(value: Supplement) => props.handleUpdate(value)}
            handleClose={handleClose}
          />
        </div>
      </Modal>
    </div>
  );
}
