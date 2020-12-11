import { makeStyles } from "@material-ui/core";
import React from "react";
import { Question } from "../../Models/Question";

const useStyles = makeStyles({
  question: {
    color: "rgb(209, 157, 142)",
  },
  liens: {
    textDecoration: "none",
    fontWeight: "bold",
    color: "black",
  },
});

interface AffichageQuestionProps {
  question: Question;
}

export const AffichageQuestion = (props: AffichageQuestionProps) => {
  const classes = useStyles();

  const { question } = props;
  return (
    <>
      <h3 className={classes.question}>{question.titre}</h3>
      {question.reponse}
      <br />
    </>
  );
};
