import React, { useState } from "react";
import * as firebase from "firebase";

import { ListeSoins } from "./Soins/ListeMassages/ListeMassages";
import { LoginPage } from "../../LoginPage/LoginPage";
import { useFetchMassages } from "../../../Components/Hooks/Fetch/UseFetchMassage";

export default function HomeAdmin() {
  const [user, setUser] = useState<boolean>(false);

  firebase.auth().onAuthStateChanged(function (User) {
    if (User) {
      setUser(true); // User is signed in.
    } else {
      setUser(false);
    }
  });

  useFetchMassages();

  return (
    <div style={{ overflowY: "auto" }}>
      {!user ? <LoginPage /> : <ListeSoins />}
    </div>
  );
}
