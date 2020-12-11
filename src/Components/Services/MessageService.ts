import firebase from "../../FirebaseConfig";
import { Message } from "../../Models/Message";

class MessageService {
  db = firebase.database();

  /**
   * Fonction qui créé un message
   * @param data message créé
   */
  async createMessage(data: Message) {
    const id = (await this.db.ref("/messages/" + data.id).push(data)).key;
    await this.db.ref("/messages/" + id).update({ id: id });
  }

  /**
   * Fonction qui récupère les messages
   */
  async getMessages() {
    const initMessages: Message[] = [];
    this.db.ref("/messages").on("value", function (snapshot) {
      snapshot.forEach(function (_message) {
        initMessages.push(_message.val());
      });
    });
    return initMessages;
  }

  /**
   * Fonction qui supprime un message
   * @param id id du message à supprimer
   */
  async deleteMessage(id: string) {
    this.db.ref("/messages/" + id).remove();
  }

  /**
   * Fonction qui récupère les messages grâce à l'id
   */
  async getMessagesById(id: string) {
    return this.db
      .ref("messages")
      .orderByChild("id")
      .equalTo(id)
      .once("value")
      .then((data) => {
        const array: Message[] = [];
        data.forEach(function (_message) {
          array.push(_message.val());
        });
        return array;
      });
  }
}
export default new MessageService();
