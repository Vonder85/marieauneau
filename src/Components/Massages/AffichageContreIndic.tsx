import { makeStyles } from "@material-ui/core";
import React from "react";
import { Type } from "../../Models/Type";

const useStyles = makeStyles({
  root: {
    "& ul": {
      listStyleType: "none",
    },
  },
});

interface affichageContreIndicProps {
  contreIndications: Type[];
}
export const AffichageContreIndic = (props: affichageContreIndicProps) => {
  const { contreIndications } = props;

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h2>Les contre-indications</h2>

      {contreIndications.filter((result) => result.type === "générale").length >
        0 && (
        <ul>
          <b>
            Générale
            {contreIndications.filter((result) => result.type === "générale")
              .length > 1 && "s"}{" "}
            :
          </b>
          {contreIndications
            .filter((result) => result.type === "générale")
            .map((contreIndic: Type, index: number) => (
              <li key={index}>{contreIndic.texte}</li>
            ))}
        </ul>
      )}

      {contreIndications.filter((result) => result.type === "relative").length >
        0 && (
        <ul>
          <b>
            Relative
            {contreIndications.filter((result) => result.type === "relative")
              .length > 1 && "s"}{" "}
            :
          </b>
          {contreIndications
            .filter((result) => result.type === "relative")
            .map((contreIndic: Type, index: number) => (
              <li key={index}>{contreIndic.texte}</li>
            ))}
        </ul>
      )}

      {contreIndications.filter((result) => result.type === "absolue").length >
        0 && (
        <ul>
          <b>
            Absolue
            {contreIndications.filter((result) => result.type === "absolue")
              .length > 1 && "s"}{" "}
            :
          </b>
          {contreIndications
            .filter((result) => result.type === "absolue")
            .map((contreIndic: Type, index: number) => (
              <li key={index}>{contreIndic.texte}</li>
            ))}
        </ul>
      )}
    </div>
  );
};
