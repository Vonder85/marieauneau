import { useEffect, useContext } from "react";
import { Massage } from "../../../Models/Massage";
import MassageContext from "../../Context/MassageContext";
import MassageService from "../../Services/MassageService";

export const useFetchMassages = () => {
  const setMassages = useContext(MassageContext).setMassages;

  useEffect(() => {
    MassageService.getMassages().then((massages: Massage[]) => {
      setMassages(massages);
    });
  }, [setMassages]);
};
