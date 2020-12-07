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

  /**
   * Ajouter une photo dans un dossier
   */
  async addImageMassage(folder: string, file: File) {
    const storageRef = this.storage.ref();
    const fileRef = storageRef.child(folder + "/" + file.name);
    fileRef.put(file);
  }

  //Récupérer l'url de chargement d'une image
  async getDownloadUrlImage(folder: string, name: string) {
    return this.storage
      .ref()
      .child(`${folder}/${name}`)
      .getDownloadURL()
      .then((result) => {
        console.log(result);
        let url: string = result;
        return url;
      });
  }
}
export default new ImageService();
