import React from "react";
import { Massage } from "../../Models/Massage";

import { MassageState } from "./MassageState";

export default React.createContext<MassageState>({
  massages: [],
  setMassages: (massages: Massage[]) => [],
});
