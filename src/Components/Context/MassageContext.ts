import React from "react";
import { Massage } from "../../Models/Massage";

import { MassageState } from "./MassageState";

export default React.createContext<MassageState>({
  massage: {
    id: "",
    nom: "",
    adjectif: "",
    zone: "",
    description: "",
    resume: "",
    duree: 0,
    prix: 0,
    image: "",
    actions: [],
    bienFaits: [],
    contreIndications: [],
    supplement: { description: "", prix: 0, duree: 0 },
  },
  setMassage: (massage: Massage) => {},

  massages: [],
  setMassages: (massages: Massage[]) => [],
});
