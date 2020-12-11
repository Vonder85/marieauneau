import firebase from "../../FirebaseConfig";
import { Question } from "../../Models/Question";

class QuestionService {
  db = firebase.database();

  /**
   * Fonction qui créé une question
   * @param data question créée
   */
  async createQuestion(data: Question) {
    const id = (await this.db.ref("/questions/" + data.id).push(data)).key;
    await this.db.ref("/questions/" + id).update({ id: id });
  }

  /**
   * Fonction qui modifie une question
   * @param data question à modifier
   */
  async updateQuestion(data: Question) {
    this.db.ref("/questions/" + data.id).update(data);
  }

  /**
   * Fonction qui récupère les questions
   */
  async getQuestions() {
    return this.db
      .ref("/questions")
      .once("value")
      .then((data) => {
        const array: Question[] = [];
        data.forEach((item) => {
          array.push(item.val());
        });

        return array;
      });
  }

  /**
   * Fonction qui supprime une question
   * @param id id de la question à supprimer
   */
  async deleteQuestion(id: string) {
    this.db.ref("/questions/" + id).remove();
  }

  /**
   * Fonction qui récupère les questions par l'id
   */
  async getQuestionById(id: string) {
    return this.db
      .ref("questions")
      .orderByChild("id")
      .equalTo(id)
      .once("value")
      .then((data) => {
        const array: Question[] = [];
        data.forEach(function (_avis) {
          array.push(_avis.val());
        });
        return array;
      });
  }
}
export default new QuestionService();
