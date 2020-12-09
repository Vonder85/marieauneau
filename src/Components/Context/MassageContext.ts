import React from "react";

//Models
import { Avis } from "../../Models/Avis";
import { Massage } from "../../Models/Massage";

import { MassageState } from "./MassageState";

export default React.createContext<MassageState>({
  massages: [],
  setMassages: (massages: Massage[]) => [],
  imagesCarousel: [],
  setImagesCarousel: (urls: string[]) => [],
  avis: [],
  setAvis: (avis: Avis[]) => [],
});
