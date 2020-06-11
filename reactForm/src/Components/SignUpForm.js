import React from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import { FormContainer, StyledButton } from "../Styles/FormStyle";
import formatDate from "../Utils/formatDate";
import maskCardPan from "../Utils/maskCardPan";
import { validNumber } from "../Utils/validNumbers";

const validate = (values) => {
  const errors = {};
  const isValidStart = values.phoneNumber.split("").splice(0, 4).join("");
  const passwordCheck = values.password;
  // let masterCheck = /^(?:5[1-5][0-9]{14})$/;
  // let visaCheck = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;

  //   Validates Full Name
  if (!values.fullName) {
    errors.fullName = "please type in your name";
  } else if (values.fullName.length < 5) {
    errors.fullName = "name must be 2 characters or more";
  } else if (values.fullName.indexOf(" ") < 2) {
    errors.fullName = "please type in your last name";
  }

  //   Validates Email
  if (!values.email) {
    errors.email = "please type in your email";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  //   Validates Phone Number
  if (!values.phoneNumber) {
    errors.phoneNumber = "please type in your phone number";
  } else if (!/^[0-9]+$/i.test(values.phoneNumber)) {
    errors.phoneNumber = "invalid phone number";
  } else if (!validNumber.includes(isValidStart)) {
    errors.phoneNumber = "please type in a valid Nigerian number";
  } else if (values.phoneNumber.length < 11 || values.phoneNumber.length > 11) {
    errors.phoneNumber = "should not be shorter or longer than 11 digits";
  }

  //   Validates Password
  if (!values.password) {
    errors.password = "please type in your pasword";
  } else if (values.password.length < 6) {
    errors.password = "password must be at least 6 character";
  } else if (
    !/^.*(?=.{6,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/i.test(
      values.password
    )
  ) {
    errors.password = "uppercase, special character and a number";
  }

  //   Validates ConfirmPassword
  if (!values.confirmPassword) {
    errors.confirmPassword = "please confirm password";
  } else if (passwordCheck !== values.confirmPassword) {
    errors.confirmPassword = "confirm password must match password";
  }

  //   Validates Card Number (Master and Visa Card Only)
  if (!values.cardNumber) {
    errors.cardNumber = "please type in your 16-digit card number";
  } else if (values.cardNumber.length < 19 || values.cardNumber.length > 19) {
    errors.cardNumber = "16 digits";
  }
  //   else if (!(values.cardNumber.match(masterCheck) || values.cardNumber.match(visaCheck)) ) {
  //     errors.cardNumber = "Invalid Card Number or Type";
  //   }

  //   Validates Expiry Date
  if (
    !values.expiryDate ||
    values.expiryDate.length < 4 ||
    values.expiryDate.length > 4
  ) {
    errors.expiryDate = "please input date in MM/YY format";
  }

  //   Validates Pin
  if (!values.pin || !/^\d+$/.test(values.pin)) {
    errors.pin = "please input a four-digit PIN number";
  } else if (values.pin.length < 4 || values.pin.length > 4) {
    errors.pin = "four digits";
  }

  return errors;
};

const SignUpForm = () => {
  const history = useHistory();

  //   Initial values
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      cardNumber: "",
      expiryDate: "",
      pin: "",
    },

    validate,

    // Redireccts to dashboard upon successful Validation
    onSubmit: () => {
      history.push("/dashboard");
    },
  });

  return (
    <FormContainer onSubmit={formik.handleSubmit}>
      <div className="form-card-container">
        <div className="message-container">
          <h3 className="form-title"> Please fill in your details </h3>
        </div>
        <div className="form-container">
          <div className="input-container">
            <input
              className="form-input"
              placeholder="full name"
              id="fullName"
              name="fullName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fullName}
            />
            {formik.touched.fullName && formik.errors.fullName ? (
              <div style={{ color: "red" }}>{formik.errors.fullName}</div>
            ) : null}
          </div>
          <div className="input-container">
            <input
              className="form-input"
              placeholder="email"
              id="email"
              name="email"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div style={{ color: "red" }}>{formik.errors.email}</div>
            ) : null}
          </div>

          <div className="input-container">
            <input
              className="form-input"
              placeholder="phone number"
              id="phoneNumber"
              name="phoneNumber"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phoneNumber}
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
              <div style={{ color: "red" }}>{formik.errors.phoneNumber}</div>
            ) : null}
          </div>

          <div className="input-container">
            <input
              className="form-input"
              placeholder="password"
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div style={{ color: "red" }}>{formik.errors.password}</div>
            ) : null}
          </div>

          <div className="input-container">
            <input
              className="form-input"
              placeholder="confirm password"
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div style={{ color: "red" }}>
                {formik.errors.confirmPassword}
              </div>
            ) : null}
          </div>

          <div className="input-container">
            <input
              className="form-input"
              placeholder="card number"
              id="cardNumber"
              name="cardNumber"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={maskCardPan(formik.values.cardNumber)}
            />
            {formik.touched.cardNumber && formik.errors.cardNumber ? (
              <div style={{ color: "red" }}>{formik.errors.cardNumber}</div>
            ) : null}
          </div>

          <div className="input-container">
            <input
              className="form-input"
              placeholder="expiry date"
              id="expiryDate"
              name="expiryDate"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formatDate(formik.values.expiryDate)}
            />
            {formik.touched.expiryDate && formik.errors.expiryDate ? (
              <div style={{ color: "red" }}>{formik.errors.expiryDate}</div>
            ) : null}
          </div>

          <div className="input-container">
            <input
              className="form-input"
              placeholder="PIN"
              id="pin"
              name="pin"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.pin}
            />
            {formik.touched.pin && formik.errors.pin ? (
              <div style={{ color: "red" }}>{formik.errors.pin}</div>
            ) : null}
          </div>
        </div>

        <StyledButton
          type="submit"
          onClick={() => {
            history.push("/dashboard");
          }}
        >
          Submit
        </StyledButton>
      </div>
    </FormContainer>
  );
};

export default SignUpForm;
