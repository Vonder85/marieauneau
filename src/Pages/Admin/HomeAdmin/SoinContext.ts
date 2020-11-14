import React from "react";
import { Soin } from "../../../Models/Soin";

import { SoinState } from "./SoinState";

export default React.createContext<SoinState>({
  soin: {
    id: "",
    nom: "",
    description: "",
    duree: 0,
    prix: 0,
  },
  setSoin: (soin: Soin) => {},

  soins: [],
  setSoins: (soins: Soin[]) => [],
});
