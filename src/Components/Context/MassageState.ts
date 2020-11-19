import { Massage } from "../../Models/Massage";

export interface MassageState {
  massage: Massage;
  setMassage: (massage: Massage) => void;

  massages: Massage[];
  setMassages: (massages: Massage[]) => void;
}
