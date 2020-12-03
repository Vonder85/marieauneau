import { useEffect, useContext } from "react";
import { Massage } from "../../../Models/Massage";
import MassageContext from "../../Context/MassageContext";
import MassageService from "../../Services/MassageService";

export const useFetchMassages = () => {
  const context = useContext(MassageContext);

  const getMassages = async () => {
    await MassageService.getMassages().then((massages: Massage[]) => {
      console.log(massages);
      context.setMassages(massages);
    });
  };

  useEffect(() => {
    context.setMassages([]);
    getMassages();
    // eslint-disable-next-line
  }, []);
};
