import React from "react";
import "date-fns";
import { createStyles, makeStyles, TextField, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    requiredDot: {
      color: "red",
    },
    container: {
      flexWrap: "wrap",
      float: "left",
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  })
);

/**
 * Props du composant
 */
interface DateTimePickerProps {
  /**
   * Label et id du composant
   */
  label: string;

  /**
   * Transmet la date saisie au composant parent
   * @param value
   */
  handleChange: (value: string) => void;

  /**
   * Date par défaut
   */
  defaultValue: string; //exemple: 2017-05-24T10:30

  /**
   * required
   */
  required?: boolean;
}

export const DatePicker = (props: DateTimePickerProps) => {
  const classes = useStyles();

  /**
   * Accèder plus rapidement aux props
   */
  const { label, handleChange, defaultValue, required } = props;

  /**
   * Convertit la date au bon format pour afficher la date par défaut
   */
  let date = new Date(defaultValue);
  console.log(date);
  //janvier commence à 0 donc j'ajoute un mois(30 jours) pour obtenir le bon chiffre
  date.setDate(date.getMonth() + 30);

  return (
    <form className={classes.container} noValidate>
      <b>
        {label}
        {required && <span className={classes.requiredDot}>*</span>}
      </b>
      <br />
      <TextField
        required={required}
        id={label}
        type="date"
        defaultValue={date?.toString()}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(e) => handleChange(e.target.value)}
      />
      <br />
    </form>
  );
};
