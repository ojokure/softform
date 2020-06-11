import React from "react";
import { useFormik } from "formik";
import { FormContainer, StyledButton } from "../Styles/FormStyle";
import formatDate from "../Utils/formatDate";
import maskCardPan from "../Utils/maskCardPan";
import { validate } from "../Utils/validate";

const SignUpForm = ({ history }) => {
  // Initial values
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
    onSubmit: (values) => {
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

        <StyledButton type="submit">Submit</StyledButton>
      </div>
    </FormContainer>
  );
};

export default SignUpForm;
