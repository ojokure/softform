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
    fullNameErr: "",
    email: "",
    emailErr: "",
    phoneNumber: "",
    phoneNumberErr: "",
    password: "",
    passwordErr: "",
    confirmPassword: "",
    confirmPasswordErr: "",
    cardNumber: "",
    cardNumberErr: "",
    expiryDate: "",
    expiryDateErr: "",
    pin: "",
    pinErr: "",
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
        <label>Full Name</label>
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
      <div>
        <label>Phone Number</label>
        <input
          name="phoneNumber"
          className={`form-control ${
            inputState.phoneNumberErr ? "is-invalid" : ""
          }`}
          id="phoneNumber"
          placeholder="Enter your Phone Number"
          defaultValue={inputState.phoneNumber}
          onBlur={validatePhoneNumber}
        />
        <div>{inputState.phoneNumberErr}</div>
      </div>
      <div>
        <label>Password</label>
        <input
          name="password"
          className={`form-control ${
            inputState.passwordErr ? "is-invalid" : ""
          }`}
          id="password"
          placeholder="Enter your password"
          defaultValue={inputState.password}
          onBlur={validatePassword}
        />
        <div>{inputState.passwordErr}</div>
      </div>
      <div>
        <label>Confirm Password</label>
        <input
          name="confirmPassword"
          className={`form-control ${
            inputState.confirmPasswordErr ? "is-invalid" : ""
          }`}
          id="confirmPassword"
          placeholder="Confirm Password"
          defaultValue={inputState.confirmPassword}
          onBlur={validateConfirmPass}
        />
        <div>{inputState.confirmPasswordErr}</div>
      </div>
      <div>
        <label>Card Number</label>
        <input
          name="cardNumber"
          className={`form-control ${
            inputState.cardNumberErr ? "is-invalid" : ""
          }`}
          id="cardNumber"
          placeholder="Enter your Card Number"
          defaultValue={inputState.cardNumber}
          onBlur={validateCardNumber}
        />
        <div>{inputState.cardNumberErr}</div>
      </div>
      <div>
        <label>Expiry Date</label>
        <input
          name="expiryDate"
          className={`form-control ${
            inputState.expiryDateErr ? "is-invalid" : ""
          }`}
          id="expiryDate"
          placeholder="Expiry Date"
          defaultValue={inputState.expiryDate}
          onBlur={validateExpiryDate}
        />
        <div>{inputState.expiryDateErr}</div>
      </div>
      <div>
        <label>Pin</label>
        <input
          name="pin"
          className={`form-control ${inputState.pinErr ? "is-invalid" : ""}`}
          id="pin"
          placeholder="Enter you PIN"
          defaultValue={inputState.pin}
          onBlur={validatePin}
        />
        <div>{inputState.pinErr}</div>
      </div>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default Form;
