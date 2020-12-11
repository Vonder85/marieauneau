import {
  Button,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

//Service
import QuestionService from "../Services/QuestionService";

//Model
import { Question } from "../../Models/Question";

//Context
import MassageContext from "../Context/MassageContext";

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
  root: {
    width: "70%",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: "100px",
  },
  form: {
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
    "& label + .MuiInput-formControl": {
      marginBottom: "20px",
    },
  },
});

export const QuestionForm = () => {
  const classes = useStyles();

  //Récupération du context
  const context = useContext(MassageContext);

  //Récupération de l'id de la question dans l'url
  const idQuestion: any = useParams();

  /**
   * Permet de faire la redirection
   */
  const history = useHistory();

  /**
   * Liste des options des categories
   */
  const optionsContreIndications = [
    { label: "rendez-vous", value: "rdv" },
    { label: "prestations", value: "prestations" },
    { label: "contre-indications", value: "contreIndic" },
    { label: "offres", value: "offres" },
  ];

  /**
   * Etat d'une question
   */
  const [question, setQuestion] = useState<Question>({
    id: "",
    titre: "",
    reponse: "",
    categorie: "",
  });
  useEffect(() => {
    if (idQuestion.id !== undefined && idQuestion.id !== null) {
      QuestionService.getQuestionById(idQuestion.id).then(
        (result: Question[]) => {
          setQuestion(result[0]);
        }
      );
    }
    window.scrollTo(0, 0);
  }, [idQuestion]);

  /**
   * Soumission / Ajout d'une question
   */
  const handleSubmit = () => {
    if (idQuestion.id !== undefined && idQuestion.id !== null) {
      QuestionService.updateQuestion(question).then((result) => {
        QuestionService.getQuestions().then((_questions: Question[]) => {
          context.setQuestions(_questions);
          history.push("/Admin/Dashboard/Questions");
        });
      });
    } else {
      QuestionService.createQuestion(question).then((result) => {
        QuestionService.getQuestions().then((_questions: Question[]) => {
          context.setQuestions(_questions);
          history.push("/Admin/Dashboard/Questions");
        });
      });
    }
  };

  /**
   * Permet de revenir à la page précédente
   */
  function handleBack() {
    history.push("/Admin/Dashboard/Questions");
  }

  return (
    <>
      <div className={classes.root}>
        <Button className={classes.button} onClick={handleBack}>
          Retour
        </Button>
        <h2>
          {idQuestion.id !== undefined && idQuestion.id !== null
            ? "Modification"
            : "Nouvelle Question"}{" "}
          :
        </h2>
        <form
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleSubmit();
          }}
          className={classes.form}
        >
          <TextField
            id="titre"
            label="Question"
            value={question.titre}
            onChange={(e) =>
              setQuestion({ ...question, titre: e.target.value })
            }
            fullWidth
            size="medium"
          />
          <TextField
            multiline
            rows={6}
            id="texte"
            label="Réponse"
            value={question.reponse}
            onChange={(e) =>
              setQuestion({ ...question, reponse: e.target.value })
            }
            fullWidth
            size="medium"
          />

          <FormControl variant="outlined" fullWidth>
            <InputLabel id="genre">Catégorie</InputLabel>
            <Select
              labelId="categorie"
              id="categorie"
              value={question.categorie}
              label="Catégorie"
              onChange={(e: any) =>
                setQuestion({ ...question, categorie: e.target.value })
              }
            >
              {optionsContreIndications.map((option) => (
                <MenuItem value={option.value}>{option.label}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            size="large"
            fullWidth
            className={classes.button}
          >
            Sauvegarder
          </Button>
        </form>
      </div>
    </>
  );
};
