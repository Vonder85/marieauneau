import React from "react";
import { Massage } from "../../Models/Massage";

import { MassageState } from "./MassageState";

export default React.createContext<MassageState>({
  massage: {
    id: "",
    nom: "",
    description: "",
    resume: "",
    duree: 0,
    prix: 0,
    image: "",
  },
  setMassage: (massage: Massage) => {},

  massages: [],
  setMassages: (massages: Massage[]) => [],
});
