import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { Button } from "@material-ui/core";
import { NewSoinForm } from "../../Pages/Admin/HomeAdmin/Soins/NewSoin/NewSoinForm";
import { Soin } from "../../Models/Soin";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      marginLeft: "5px",
      backgroundColor: "#DB997E",
      color: "white",
      "&:hover": {
        backgroundColor: "rgba(219, 153, 126, 0.6)",
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

/**
 * props du composant
 */
interface SoinModalProps {
  /**
   * metaProperty retournée au composant parent
   * @param value
   */
  //handleChange: (value: Soin) => void;

  /**
   * texte du bouton
   */
  text: string;

  soin?: Soin;
}

export const SoinModal = (props: SoinModalProps) => {
  const classes = useStyles();

  /**
   * Etat pour l'ouverture de la modal
   */
  const [open, setOpen] = React.useState(false);

  /**
   * Ouvre la modal
   */
  const handleOpen = () => {
    setOpen(true);
  };

  /**
   * ferme la modal
   */
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="default"
        size="small"
        onClick={handleOpen}
        className={classes.button}
      >
        {props.text}
      </Button>

      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <div className={classes.paper}>
          <NewSoinForm soin={props.soin as Soin} handleClose={handleClose} />
        </div>
      </Modal>
    </div>
  );
};
