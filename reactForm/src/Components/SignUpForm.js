import React, { useState } from "react";
// import { Link } from "react-router-dom";
import {
  FormContainer,
  ShortInputContainer,
  StyledButton,
} from "../Styles/FormStyle";
import { useFormik, withFormik, Form, Field } from "formik";
// import { validator } from "../validators";

const validator = (values) => {
  const errors = {};
  if (!values.fullName) {
    errors.fullName = "required";
  } else if (values.fullName.length < 5) {
    errors.firstName = "must be 15 characters or less";
  } else if (values.fullName.indexOf("") >= 2) {
    errors.fullName = "please include your last name";
  }

  if (!values.email) {
    errors.email = "required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  // if(!values.phoneNumber){
  //   errors.phoneNumber = "Required";
  // }else if (){

  // }

  return errors;
};
const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      // email: "",
    },
    validator,
    onSubmit: (values) => {
      alert(values, null, 2);
    },
  });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  // const handleChange = (event) => {
  //   const { name, value } = event.target;

  //   setInputState((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  //   // console.log(inputState);
  // };

  return (
    <FormContainer>
      <div className="form-card-container">
        <div className="message-container">
          <h1 className="form-title">Sign Up</h1>
        </div>
        {/* <div className="form-container"> */}
        <form>
          {/* <div className="input-container"> */}
          <input
            className="form-input"
            id="fullName"
            type="text"
            name="fullName"
            placeholder="full name"
            onChange={formik.handleChange}
            value={formik.values.fullName}
            onBlur={formik.handleBlur}
          />
          {/* {formik.touched.fullName && formik.errors.fullName ? (
              <div>{formik.errors.fullName}</div>
            ) : null} */}
          {formik.touched.fullNname && formik.errors.fullName ? (
            <div style={{ color: "red" }}>{formik.errors.fullName}</div>
          ) : null}
          {/* </div> */}
          {/* <div className="input-container"> */}
          <input
            className="form-input"
            id="email"
            type="text"
            name="email"
            placeholder="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
          {/* </div> */}
          {/* <div className="input-container">
              <Field
                className="form-input"
                type="email"
                name="email"
                placeholder="email"
              />
            </div>
            <div className="input-container">
              <Field
                className="form-input"
                type="number"
                name="phoneNumber"
                placeholder="phone number"
              />
            </div> */}
          {/* <ShortInputContainer className="short-input-container">
              <div className="short-input">
                <Field
                  className="form-input"
                  type="password"
                  name="password"
                  placeholder="password"
                />
              </div>
              <div className="short-input">
                <Field
                  className="form-input"
                  type="password"
                  name="confirmPassword"
                  placeholder="confirm password"
                />
              </div>
            </ShortInputContainer>
            <ShortInputContainer className="short-input-container">
              <div className="short-input">
                <Field
                  className="form-input"
                  type="number"
                  name="cardNumber"
                  placeholder="card number"
                />
              </div>
              <div className="shorter-input">
                <Field
                  className="form-input"
                  type="number"
                  name="expiryDate"
                  placeholder="expiry date"
                />
              </div>
            </ShortInputContainer>
            <div className="input-container">
              <Field
                className="form-input"
                type="text"
                name="pin"
                placeholder="password"
              />
            </div> */}

          <div className="form-button-container">
            {/* <StyledButton
              className="form-button"
              // disabled={isSubmitting}
              // theme={userReducer.isLoading ? loadingButtonTheme : buttonTheme}
              type="submit"
            >
              Get Started
            </StyledButton> */}
          </div>
        </form>
        {/* </div> */}
      </div>
    </FormContainer>
  );
};

export default SignUpForm;
