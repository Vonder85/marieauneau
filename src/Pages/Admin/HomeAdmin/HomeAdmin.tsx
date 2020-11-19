import React, { useState } from "react";
import { ListeSoins } from "./Soins/ListeMassages/ListeMassages";
import * as firebase from "firebase";
import { LoginPage } from "../../LoginPage/LoginPage";
import { useFetchMassages } from "../../../Components/Hooks/Fetch/UseFetchMassage";

export default function VerticalMenu() {
  const [user, setUser] = useState<boolean>(false);

  firebase.auth().onAuthStateChanged(function (User) {
    if (User) {
      setUser(true); // User is signed in.
    } else {
      setUser(false);
    }
  });

  useFetchMassages();

  return <div>{!user ? <LoginPage /> : <ListeSoins />}</div>;
}
