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
    this.getMessages();
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

  async deleteMessage(id: string) {
    this.db.ref("/messages/" + id).remove();
    this.getMessages();
  }
}
export default new MessageService();
