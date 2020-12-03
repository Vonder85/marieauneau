import { Supplement } from "./Supplement";

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
  actions: string[];
  contreIndications: string[];
  supplement?: Supplement;
}
