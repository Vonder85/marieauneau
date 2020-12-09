import {
  Button,
  makeStyles,
  TextField,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

//Service
import MessageService from "../../../../Components/Services/MessageService";

//Model
import { Message } from "../../../../Models/Message";

const useStyles = makeStyles({
  root: {
    "& label.Mui-focused": {
      color: "#D19D8E",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#D19D8E",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#D19D8E",
      },
    },
    marginTop: "100px",
    width: "60%",
    marginRight: "auto",
    marginLeft: "auto",
  },
  input: {
    marginBottom: "15px",
  },
  name: {
    display: "flex",
    justifyContent: "space-evenly",
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

export const LectureMessage = () => {
  const classes = useStyles();

  //Récupération du nom du massage dans l'url
  const idMessage: any = useParams();

  /**
   * Permet de faire la redirection
   */
  const history = useHistory();

  /**
   * Etat local du message
   */
  const [message, setMessage] = useState<Message>({
    id: "",
    message: "",
    email: "",
    nom: "",
    date: "",
    prenom: "",
    sujet: "",
  });
  useEffect(() => {
    if (idMessage.id !== undefined && idMessage.id !== null) {
      MessageService.getMessagesById(idMessage.id).then((result: Message[]) => {
        setMessage(result[0]);
      });
    }
    window.scrollTo(0, 0);
  }, [idMessage]);

  /**
   * Permet de revenir à la page précédente
   */
  function handleBack() {
    history.push("/Admin/Dashboard/Messages");
  }

  /**
   * Responsive
   */
  const themeQueries = useTheme();
  const smScreen = useMediaQuery(themeQueries.breakpoints.down("sm"));

  return (
    <>
      <div className={classes.root}>
        <Button className={classes.button} onClick={handleBack}>
          Retour
        </Button>
        <div className={`${!smScreen && classes.name}`}>
          <TextField
            id="nom"
            label="Nom"
            variant="outlined"
            name="nom"
            fullWidth={smScreen}
            className={classes.input}
            value={message.nom}
          />
          <TextField
            id="prenom"
            label="Prénom"
            variant="outlined"
            name="prenom"
            fullWidth={smScreen}
            className={classes.input}
            value={message.prenom}
          />
          {message.date}
        </div>
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          fullWidth
          type="email"
          name="email"
          className={classes.input}
          value={message.email}
        />
        <TextField
          id="sujet"
          label="Sujet"
          variant="outlined"
          name="sujet"
          fullWidth
          className={classes.input}
          value={message.sujet}
        />
        <TextField
          id="message"
          label="Message"
          name="message"
          multiline
          rows={6}
          fullWidth
          variant="outlined"
          className={classes.input}
          value={message.message}
        />
      </div>
    </>
  );
};
