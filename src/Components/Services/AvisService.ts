import firebase from "../../FirebaseConfig";
import { Avis } from "../../Models/Avis";

class AvisService {
  db = firebase.database();

  /**
   * Fonction qui créé un avis
   * @param data avis créé
   */
  async createAvis(data: Avis) {
    const id = (await this.db.ref("/avis/" + data.id).push(data)).key;
    await this.db.ref("/avis/" + id).update({ id: id });
    this.getAvis();
  }

  /**
   * Fonction qui modifie un avis
   * @param data avis à modifier
   */
  async updateAvis(data: Avis) {
    this.db.ref("/avis/" + data.id).update(data);
    this.getAvis();
  }

  /**
   * Fonction qui récupère les avis
   */
  async getAvis() {
    return this.db
      .ref("/avis")
      .once("value")
      .then((data) => {
        const array: Avis[] = [];
        data.forEach((item) => {
          array.push(item.val());
        });

        return array;
      });
  }

  /**
   * Fonction qui supprime un avis
   * @param id id de l'avis à supprimer
   */
  async deleteAvis(id: string) {
    this.db.ref("/avis/" + id).remove();
    this.getAvis();
  }

  /**
   * Fonction qui récupère les avis par l'id
   */
  async getAvisById(id: string) {
    return this.db
      .ref("avis")
      .orderByChild("id")
      .equalTo(id)
      .once("value")
      .then((data) => {
        const array: Avis[] = [];
        data.forEach(function (_avis) {
          array.push(_avis.val());
        });
        return array;
      });
  }
}
export default new AvisService();
