import { Button, makeStyles, TextField } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

//Models
import { Massage } from "../../../../../Models/Massage";
import { Supplement } from "../../../../../Models/Supplement";
import { Type } from "../../../../../Models/Type";

//Context
import MassageContext from "../../../../../Components/Context/MassageContext";

//Service
import MassageService from "../../../../../Components/Services/MassageService";

//Components
import { AjoutListeString } from "../../../../../Components/Table/EditableTable/AjoutListeString";
import SuppModal from "../../../../../Components/Modal/SuppModal";
import { EditableTableActionsContreIndic } from "../../../../../Components/Table/EditableTable/EditableTableActionsContreIndic";

const useStyles = makeStyles({
  button: {
    marginLeft: "5px",
    backgroundColor: "#D19D8E",
    color: "white",
    marginTop: "10px",
    "&:hover": {
      backgroundColor: "rgba(209, 157, 142, 0.6)",
    },
  },
  bienfaits: {
    display: "inline-flex",
  },
  root: {
    width: "70%",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: "100px",
  },
  form: {
    "& label.Mui-focused": {
      color: "#D19D8E",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#D19D8E",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#D19D8E",
      },
    },
  },
});

export const MassageForm = () => {
  const classes = useStyles();

  //Récupération du nom du massage dans l'url
  const nomMassage: any = useParams();

  /**
   * Récupération du context
   */
  const context = useContext(MassageContext);

  /**
   * Permet de faire la redirection
   */
  const history = useHistory();

  /**
   * Etat d'un massage
   */
  const [massage, setMassage] = useState<Massage>({
    id: "",
    nom: "",
    adjectif: "",
    zone: "",
    description: "",
    resume: "",
    duree: 0,
    prix: 0,
    image: "",
    actions: [],
    bienFaits: [],
    contreIndications: [],
    supplement: { description: "", prix: 0, duree: 0 },
  });
  useEffect(() => {
    if (nomMassage.nom !== undefined && nomMassage.nom !== null) {
      MassageService.getMassageByName(nomMassage.nom).then(
        (result: Massage[]) => {
          console.log(result);
          setMassage(result[0]);
        }
      );
    }
  }, [nomMassage]);

  /**
   * Soumission / Ajout d'un massage
   */
  const handleSubmit = () => {
    if (nomMassage.nom !== undefined && nomMassage.nom !== null) {
      MassageService.updateMassage(massage).then((result) => {
        MassageService.getMassages().then((massages: Massage[]) => {
          context.setMassages(massages);
          history.push("/Admin");
        });
      });
    } else {
      MassageService.createMassage(massage).then((result) => {
        MassageService.getMassages().then((massages: Massage[]) => {
          context.setMassages(massages);
        });
        history.push("/Admin");
      });
    }
  };

  /**
   * Permet de revenir à la page précédente
   */
  function handleBack() {
    history.push("/Admin");
  }

  return (
    <>
      <div className={classes.root}>
        <Button className={classes.button} onClick={handleBack}>
          Retour
        </Button>
        <h2>
          {nomMassage.nom !== undefined && nomMassage.nom !== null
            ? "Modification"
            : "Nouveau massage"}{" "}
          :
        </h2>
        <form
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleSubmit();
          }}
          className={classes.form}
        >
          <TextField
            id="name"
            label="Nom"
            value={massage.nom}
            onChange={(e) => setMassage({ ...massage, nom: e.target.value })}
            fullWidth
            size="medium"
          />
          <TextField
            id="adjectif"
            label="Adjectif"
            value={massage.adjectif}
            onChange={(e) =>
              setMassage({ ...massage, adjectif: e.target.value })
            }
            fullWidth
            size="medium"
          />
          <TextField
            id="zone"
            label="Zone"
            value={massage.zone}
            onChange={(e) => setMassage({ ...massage, zone: e.target.value })}
            fullWidth
            size="medium"
          />
          <TextField
            label="Description"
            multiline
            rows={6}
            id="description"
            value={massage.description}
            onChange={(e) =>
              setMassage({ ...massage, description: e.target.value })
            }
            style={{ width: "100%" }}
            fullWidth
          />
          <TextField
            id="resume"
            label="Résumé"
            value={massage.resume}
            onChange={(e) => setMassage({ ...massage, resume: e.target.value })}
            fullWidth
            size="medium"
          />
          <TextField
            id="duree"
            label="Durée"
            type="number"
            value={massage.duree}
            onChange={(e) =>
              setMassage({
                ...massage,
                duree: (e.target.value as unknown) as number,
              })
            }
            fullWidth
            size="medium"
          />
          <TextField
            id="prix"
            label="Prix"
            type="number"
            value={massage.prix}
            onChange={(e) =>
              setMassage({
                ...massage,
                prix: (e.target.value as unknown) as number,
              })
            }
            fullWidth
            size="medium"
          />
          <AjoutListeString
            datas={massage.bienFaits}
            label="Bienfaits"
            handleChange={(value: string[]) =>
              setMassage({ ...massage, bienFaits: value })
            }
          />
          <EditableTableActionsContreIndic
            datas={massage.contreIndications}
            label="Contre indications"
            handleChange={(value: Type[]) =>
              setMassage({ ...massage, contreIndications: value })
            }
          />
          <EditableTableActionsContreIndic
            datas={massage.actions}
            label="Actions"
            handleChange={(value: Type[]) =>
              setMassage({ ...massage, actions: value })
            }
          />

          {massage.supplement && massage.supplement.description}
          <SuppModal
            handleUpdate={(value: Supplement) =>
              setMassage({ ...massage, supplement: value })
            }
          />
          {/*<ImageUploader
          withIcon={true}
          buttonText="Choisir une image"
          //onChange={onDrop}
          imgExtension={[".jpg", ".gif", ".png", ".gif"]}
          maxFileSize={5242880}
          singleImage
        />*/}
          <Button
            type="submit"
            variant="contained"
            size="large"
            fullWidth
            className={classes.button}
          >
            Sauvegarder
          </Button>
        </form>
      </div>
    </>
  );
};
