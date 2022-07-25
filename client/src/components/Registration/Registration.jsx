import React from "react";
import Form from "../Form/Form";
import "./Registration.scss";

function Registration() {
  return (
    <div className="whiteBlock block registrationPage">
      <div className="top">
        הוספת משתמש חדש
      </div>
      <div className="innerContainer basicBlockSpaces basicFields">
        <Form></Form>
      </div>
    </div>
  );
}

export default Registration;
