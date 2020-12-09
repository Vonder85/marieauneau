import React, { useState } from "react";
import * as firebase from "firebase";

import { LoginPage } from "../../LoginPage/LoginPage";
import { useFetchMassages } from "../../../Components/Hooks/Fetch/UseFetchMassage";
import { useHistory } from "react-router-dom";

export default function HomeAdmin() {
  const [user, setUser] = useState<boolean>(false);

  const history = useHistory();

  firebase.auth().onAuthStateChanged(function (User) {
    if (User) {
      setUser(true); // User is signed in.
    } else {
      setUser(false);
    }
  });

  useFetchMassages();
  if (!user) {
    return <LoginPage />;
  }

  return <>{history.push("/Admin/Dashboard/Massages")}</>;
}
