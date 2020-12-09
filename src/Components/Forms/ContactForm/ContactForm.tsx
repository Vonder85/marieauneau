import {
  Button,
  makeStyles,
  Snackbar,
  TextField,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React, { useContext, useState } from "react";
import emailjs from "emailjs-com";
import { Alert } from "@material-ui/lab";
import ReCAPTCHA from "react-google-recaptcha";

//Model
import { Message } from "../../../Models/Message";
import MessageService from "../../Services/MessageService";
import MassageContext from "../../Context/MassageContext";

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

export const ContactForm = () => {
  const classes = useStyles();

  /**
   * Récupération du context
   */
  const context = useContext(MassageContext);

  /**
   * Etat local des données du formulaire
   */
  const [message, setMessage] = useState<Message>({
    id: "",
    nom: "",
    prenom: "",
    email: "",
    sujet: "",
    message: "",
    date: "",
  });

  /**
   * Les 3 variables d'emailJS
   */
  const templateId: string = process.env.REACT_APP_TEMPLATEID as string;
  const userId: string = process.env.REACT_APP_USERID as string;
  const serviceId: string = process.env.REACT_APP_SERVICEID as string;

  /**
   * Responsive
   */
  const themeQueries = useTheme();
  const smScreen = useMediaQuery(themeQueries.breakpoints.down("sm"));

  /**
   * Affichage de l'Alert si envoi réussi
   */
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSuccess(false);
    setOpenError(false);
  };

  /**
   * Etat local du captcha
   */
  const [captcha, setCaptcha] = useState<boolean>(false);

  /**
   * Valide le captcha ou non
   * @param value retour du captcha
   */
  function onChange(value: string | null) {
    if (value !== null && value.trim() !== "") {
      setCaptcha(true);
    }
  }

  /**
   * Affichage de l'Alert si envoi échoue
   */
  const [openError, setOpenError] = React.useState(false);
  /**
   * Soumet le formulaire et envoie l'email
   */
  function handleSubmit(e: any) {
    e.preventDefault();
    e.stopPropagation();

    emailjs.sendForm(serviceId, templateId, e.target, userId).then(
      (result) => {
        setOpenSuccess(true);

        MessageService.createMessage(message).then((result) =>
          MessageService.getMessages().then((res) => {
            context.setMessages(res);
          })
        );
        setMessage({
          id: "",
          nom: "",
          prenom: "",
          email: "",
          sujet: "",
          message: "",
          date: "",
        });
        setCaptcha(false);
      },
      (error) => {
        setOpenError(true);
      }
    );
  }

  /**
   * Ajuste en disabled ou non l'affichage du bouton
   */
  const btn =
    message.nom.trim() !== "" &&
    message.prenom.trim() !== "" &&
    message.email.trim() !== "" &&
    message.sujet.trim() !== "" &&
    message.message.trim() !== "" &&
    captcha;

  /**
   * Etat local de l'erreur si le format de l'email n'est pas bon
   */
  const [errorEmail, setErrorEmail] = useState<boolean>(false);
  /**
   * Vérifie si le format de l'email est bon
   */
  function verifEmail(email: string) {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/g;
    if (!regexEmail.test(email)) {
      setErrorEmail(true);
    } else {
      setErrorEmail(false);
    }
  }

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      autoComplete="off"
      className={classes.root}
    >
      <Snackbar
        open={openSuccess}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          Message envoyé! Je reviens vers toi au plus vite.
        </Alert>
      </Snackbar>
      <Snackbar open={openError} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Une erreur est survenue. Veuillez réessayer.
        </Alert>
      </Snackbar>
      <div className={`${!smScreen && classes.name}`}>
        <TextField
          id="nom"
          label="Nom"
          variant="outlined"
          name="nom"
          fullWidth={smScreen}
          className={classes.input}
          value={message.nom}
          onChange={(e) => setMessage({ ...message, nom: e.target.value })}
          required
        />
        <TextField
          id="prenom"
          label="Prénom"
          variant="outlined"
          name="prenom"
          fullWidth={smScreen}
          className={classes.input}
          value={message.prenom}
          onChange={(e) =>
            setMessage({
              ...message,
              prenom: e.target.value,
              date: new Date().toString(),
            })
          }
          required
        />
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
        onChange={(e) => {
          verifEmail(message.email);
          setMessage({ ...message, email: e.target.value });
        }}
        error={errorEmail}
        helperText={errorEmail && "Format non valide"}
        required
      />
      <TextField
        id="sujet"
        label="Sujet"
        variant="outlined"
        name="sujet"
        fullWidth
        className={classes.input}
        value={message.sujet}
        onChange={(e) => setMessage({ ...message, sujet: e.target.value })}
        required
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
        onChange={(e) => setMessage({ ...message, message: e.target.value })}
        required
      />

      <ReCAPTCHA
        sitekey={process.env.REACT_APP_SITEKEY as string}
        onChange={onChange}
      />

      <Button
        type="submit"
        variant="contained"
        size="large"
        fullWidth
        className={classes.button}
        disabled={!btn}
      >
        Envoyer
      </Button>
    </form>
  );
};
