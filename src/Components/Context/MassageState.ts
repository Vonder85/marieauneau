import { Avis } from "../../Models/Avis";
import { Massage } from "../../Models/Massage";
import { Message } from "../../Models/Message";
import { Question } from "../../Models/Question";

export interface MassageState {
  massages: Massage[];
  setMassages: (massages: Massage[]) => void;
  imagesCarousel: firebase.storage.Reference[];
  setImagesCarousel: (urls: firebase.storage.Reference[]) => void;
  avis: Avis[];
  setAvis: (avis: Avis[]) => void;
  messages: Message[];
  setMessages: (messages: Message[]) => void;
  questions: Question[];
  setQuestions: (questions: Question[]) => void;
}
