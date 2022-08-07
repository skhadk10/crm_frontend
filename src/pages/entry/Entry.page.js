import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import LoginForm from "../../component/login/Login.comp.js";
import ResetPassword from "../../component/password-reset/PasswordReset.comp.js";
import "./entry.style.css";
const Entry = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [frmLoad, setFrmLoad] = useState("login");

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
    console.log(name, value);
  };
  const handleOnSubmit = (e) => {
    console.log("hello");
    e.preventDefault();
    if (!email || !password) {
      alert("fill up all the form!");
      console.log(email, password);
    }
  };

  const handleOnResetSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert("fill up all the form!");
      console.log(email);
    }
  };

  const formSwitcher = (frmType) => {
    setFrmLoad(frmType);
  };
  return (
    <div className="entry-page bg-info">
      <Card className="form-box" style={{ width: "18rem" }}>
        <Card.Body>
          {frmLoad === "login" && (
            <LoginForm
              handleOnChange={handleOnChange}
              handleOnSubmit={handleOnSubmit}
              formSwitcher={formSwitcher}
              email={email}
              pass={password}
            />
          )}
          {frmLoad === "reset" && (
            <ResetPassword
              handleOnChange={handleOnChange}
              handleOnResetSubmit={handleOnResetSubmit}
              formSwitcher={formSwitcher}
              email={email}
            />
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Entry;
