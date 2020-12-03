import { Supplement } from "./Supplement";
import { Type } from "./Type";

export interface Massage {
  id: string;
  nom: string;
  adjectif: string;
  zone: string;
  description: string;
  resume: string;
  duree: number;
  prix: number;
  image: string;
  bienFaits: string[];
  actions: Type[];
  contreIndications: Type[];
  supplement?: Supplement;
}
