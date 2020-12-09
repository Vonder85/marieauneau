import React from "react";
import { Type } from "../../Models/Type";

const theme = { fontFamily: "BillySignature" };

interface affichageActionsProps {
  actions: Type[];
}
export const AffichageActions = (props: affichageActionsProps) => {
  const { actions } = props;
  return (
    <div>
      <h2 style={{ fontFamily: theme.fontFamily }}>Les actions</h2>
      {actions.filter((result) => result.type === "générale").length > 0 && (
        <ul>
          <b>
            Générale
            {actions.filter((result) => result.type === "générale").length >
              1 && "s"}{" "}
            :
          </b>
          {actions
            .filter((result) => result.type === "générale")
            .map((action: Type, index: number) => (
              <li key={index}>{action.texte}</li>
            ))}
        </ul>
      )}

      {actions.filter((result) => result.type === "drainante").length > 0 && (
        <ul>
          <b>
            Drainante
            {actions.filter((result) => result.type === "drainante").length >
              1 && "s"}{" "}
            :
          </b>
          {actions
            .filter((result) => result.type === "drainante")
            .map((action: Type, index: number) => (
              <li key={index}>{action.texte}</li>
            ))}
        </ul>
      )}

      {actions.filter((result) => result.type === "immunitaire").length > 0 && (
        <ul>
          <b>
            Immunitaire
            {actions.filter((result) => result.type === "immunitaire").length >
              1 && "s"}{" "}
            :
          </b>
          {actions
            .filter((result) => result.type === "immunitaire")
            .map((action: Type, index: number) => (
              <li key={index}>{action.texte}</li>
            ))}
        </ul>
      )}
      {actions.filter((result) => result.type === "musculaire").length > 0 && (
        <ul>
          <b>
            Musculaire
            {actions.filter((result) => result.type === "musculaire").length >
              1 && "s"}{" "}
            :
          </b>
          {actions
            .filter((result) => result.type === "musculaire")
            .map((action: Type, index: number) => (
              <li key={index}>{action.texte}</li>
            ))}
        </ul>
      )}
      {actions.filter((result) => result.type === "sur le système nerveux")
        .length > 0 && (
        <ul>
          <b>Sur le système nerveux :</b>
          {actions
            .filter((result) => result.type === "sur le système nerveux")
            .map((action: Type, index: number) => (
              <li key={index}>{action.texte}</li>
            ))}
        </ul>
      )}
    </div>
  );
};
