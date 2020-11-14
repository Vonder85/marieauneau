import { makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { SoinModal } from "../../../../../Components/Modals/SoinModal";
import { Tableau } from "../../../../../Components/Table/Tableau";
import { Soin } from "../../../../../Models/Soin";

import * as firebase from "firebase";

const useStyles = makeStyles({
  modal: {
    float: "right",
  },
});

export const ListeSoins = () => {
  const classes = useStyles();
  const [datas, setDatas] = useState<Soin[]>([]);
  const newSoins = [...datas];

  useEffect(() => {
    firebase
      .database()
      .ref("/soins")
      .on("value", function (snapshot) {
        snapshot.forEach(function (soin) {
          newSoins.push(soin.val());
        });
        setDatas(newSoins);
      });
  }, [...datas]);

  return (
    <div>
      <h2>Les soins</h2>
      <div className={classes.modal}>
        <SoinModal text="Ajouter un soin" />
      </div>
      <Tableau datas={datas} />
    </div>
  );
};
