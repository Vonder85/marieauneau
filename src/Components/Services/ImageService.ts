import firebase from "../../FirebaseConfig";

class ImageService {
  storage = firebase.storage();

  /**
   * Récupérer les photos d'un dossier du storage
   */
  async getImages(folder: string) {
    return this.storage
      .ref(folder)
      .listAll()
      .then((result) => {
        const listImages: string[] = [];
        for (let i = 0; i < result.items.length; i++) {
          result.items[i].getDownloadURL().then((res) => {
            listImages.push(res);
          });
        }
        return listImages;
      });
  }
}
export default new ImageService();
