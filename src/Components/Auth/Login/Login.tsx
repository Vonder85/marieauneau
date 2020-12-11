import { Button, makeStyles, TextField } from "@material-ui/core";
import React, { useState } from "react";
import * as firebase from "firebase";
import "./Login.css";
import { useHistory, withRouter } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    marginTop: "150px",
    height: "100px",
  },
});

const Login = () => {
  const classes = useStyles();
  let history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((data) => {
        if (data.user) {
          history.push("/");
          console.log(data.user);
        }
      });
  };

  const btn = email.trim() === "" && password.trim() === "";

  return (
    <div className={classes.root}>
      <h2>Connectes-toi !</h2>
      <form
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleSubmit();
        }}
        className="form"
      >
        <TextField
          required
          id="Email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          size="medium"
          color="secondary"
        />

        <br />
        <TextField
          id="password"
          label="Mot de passe"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          size="medium"
          color="secondary"
        />
        <br />
        <Button
          type="submit"
          style={{ background: "#DB997E", marginTop: "10px" }}
          variant="contained"
          size="large"
          disabled={btn}
          fullWidth
        >
          Se connecter
        </Button>
      </form>
    </div>
  );
};
export default withRouter(Login);
