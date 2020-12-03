import { createStyles, makeStyles, TextField, Theme } from "@material-ui/core";
import React, { useState } from "react";

import addICon from "../../../Images/Icons/addIconBlack.svg";

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
    bienfaits: {
      display: "inline-flex",
      width: "100%",
    },
    icon: {
      width: "3%",
    },
  })
);

interface AjoutListeStringProps {
  /**
   * Liste des datas concernées
   */
  datas: string[];

  /**
   * label du composant
   */
  label: string;

  /**
   * Permet de transmettre les nouvelles données au composant parent
   */
  handleChange: (value: string[]) => void;
}
export const AjoutListeString = (props: AjoutListeStringProps) => {
  const classes = useStyles();
  const { datas, label, handleChange } = props;

  const [data, setData] = useState<string>("");

  function addData() {
    const newDatas = [...datas, data];
    handleChange(newDatas);
    setData("");
  }

  return (
    <>
      <div className={classes.bienfaits}>
        <TextField
          id={label}
          label={label}
          value={data}
          onChange={(e) => setData(e.target.value)}
          fullWidth
          size="medium"
        />
        <img
          src={addICon}
          alt="addIcon"
          className={classes.icon}
          onClick={addData}
        />
      </div>
      <ul>
        {datas?.length > 0 && datas.map((_data: string) => <li>{_data}</li>)}
      </ul>
    </>
  );
};
