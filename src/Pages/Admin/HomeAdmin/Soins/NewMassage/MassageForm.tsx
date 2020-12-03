import {
  Button,
  createStyles,
  makeStyles,
  TextField,
  Theme,
} from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { Massage } from "../../../../../Models/Massage";

import MassageContext from "../../../../../Components/Context/MassageContext";

import MassageService from "../../../../../Components/Services/MassageService";

import { AjoutListeString } from "../../../../../Components/Table/EditableTable/AjoutListeString";
import SuppModal from "../../../../../Components/Modal/SuppModal";
import { Supplement } from "../../../../../Models/Supplement";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
  })
);

interface MassageFormProps {
  massage?: Massage;
}
export const MassageForm = (props: MassageFormProps) => {
  const classes = useStyles();
  const context = useContext(MassageContext);
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

  /**
   * Attribue(s'il y en un) le massage passé en props
   */
  useEffect(() => {
    if (props.massage) {
      setMassage(props.massage);
    }
  }, [props.massage]);

  const handleSubmit = () => {
    if (props.massage !== undefined) {
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

  return (
    <>
      <div className={classes.root}>
        <h2>{props.massage ? "Modification" : "Nouveau massage"} :</h2>
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
          <br />

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
          <AjoutListeString
            datas={massage.contreIndications}
            label="Contre indications"
            handleChange={(value: string[]) =>
              setMassage({ ...massage, contreIndications: value })
            }
          />
          <AjoutListeString
            datas={massage.actions}
            label="Actions"
            handleChange={(value: string[]) =>
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
