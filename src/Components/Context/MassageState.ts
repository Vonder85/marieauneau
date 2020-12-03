import { Massage } from "../../Models/Massage";

export interface MassageState {
  massages: Massage[];
  setMassages: (massages: Massage[]) => void;
}
