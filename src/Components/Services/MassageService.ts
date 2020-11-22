import firebase from "../../FirebaseConfig";
import { Massage } from "../../Models/Massage";

class MassageService {
  db = firebase.database();

  /**
   * Fonction qui créé un massage
   * @param data massage créé
   */
  async createMassage(data: Massage) {
    const id = (await this.db.ref("/massages").push(data)).key;
    await this.db.ref("/massages/" + id).update({ id: id });
    this.getMassages();
  }

  /**
   * Fonction qui modifie un massage
   * @param data massage à modifier
   */
  async updateMassage(data: Massage) {
    this.db.ref("/massages/" + data.id).update(data);
    this.getMassages();
  }

  /**
   * Fonction qui récupère les massages
   */
  async getMassages() {
    const initMassages: Massage[] = [];
    this.db.ref("/massages").on("value", function (snapshot) {
      snapshot.forEach(function (_massage) {
        initMassages.push(_massage.val());
      });
    });
    return initMassages;
  }

  async deleteMassage(id: string) {
    this.db.ref("/massages/" + id).remove();
    this.getMassages();
  }
}
export default new MassageService();
