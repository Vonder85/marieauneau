import firebase from "../../FirebaseConfig";
import { Massage } from "../../Models/Massage";

class MassageService {
  storage = firebase.storage();
  db = firebase.database();

  /**
   * Fonction qui créé un massage
   * @param data massage créé
   */
  async createMassage(data: Massage) {
    const id = (await this.db.ref("/massages/" + data.id).push(data)).key;
    await this.db.ref("/massages/" + id).update({ id: id });
  }

  /**
   * Fonction qui modifie un massage
   * @param data massage à modifier
   */
  async updateMassage(data: Massage) {
    this.db.ref("/massages/" + data.id).update(data);
  }

  /**
   * Fonction qui récupère les massages
   */
  async getMassages() {
    return this.db
      .ref("/massages")
      .once("value")
      .then((data) => {
        const array: Massage[] = [];
        data.forEach((item) => {
          array.push(item.val());
        });
        return array.sort(function (a, b) {
          return a.nom.localeCompare(b.nom);
        });
      });
  }

  async deleteMassage(id: string) {
    this.db.ref("/massages/" + id).remove();
  }

  /**
   * Fonction qui récupère les massages
   */
  async getMassageByName(name: string) {
    return this.db
      .ref("massages")
      .orderByChild("nom")
      .equalTo(name)
      .once("value")
      .then((data) => {
        const array: Massage[] = [];
        data.forEach(function (_massage) {
          array.push(_massage.val());
        });
        return array;
      });
  }
}
export default new MassageService();
