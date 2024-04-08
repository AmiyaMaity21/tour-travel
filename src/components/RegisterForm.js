import React from "react";
import "./RegisterFormStyles.css";
function RegisterForm() {
  return (
    <div className="register-form-container">
      <h1>Create an account !</h1>
      <form>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Password" />
        <button>Register</button>
      </form>
    </div>
  );
}

export default RegisterForm;
