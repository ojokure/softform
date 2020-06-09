import React, { useState } from "react";
import {
  validateName,
  validateEmail,
  validatePhoneNumber,
  validatePassword,
  validateConfirmPass,
  validateCardNumber,
  validateExpiryDate,
  validatePin,
} from "./validators";

const Form = () => {
  const formValue = {
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    cardNumber: "",
    expiryDate: "",
    pin: "",
  };

  const [inputState, setInputState] = useState(formValue);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setInputState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(inputState);
  };

  return (
    <form onChange={handleChange}>
      <div>
        <label>Name</label>
        <input
          name="fullName"
          className={`form-control ${inputState.nameError ? "is-invalid" : ""}`}
          id="name"
          placeholder="Enter name"
          defaultValue={inputState.name}
          onBlur={validateName}
        />
        <div>{inputState.nameError}</div>
      </div>
      <div>
        <label>Email</label>
        <input
          name="email"
          className={`form-control ${
            inputState.emailError ? "is-invalid" : ""
          }`}
          id="email"
          placeholder="Enter email"
          defaultValue={inputState.email}
          onBlur={validateEmail}
        />
        <div>{inputState.emailError}</div>
      </div>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default Form;
