import { Soin } from "../../../Models/Soin";

export interface SoinState {
  soin: Soin;
  setSoin: (soin: Soin) => void;

  soins: Soin[];
  setSoins: (soins: Soin[]) => void;
}
