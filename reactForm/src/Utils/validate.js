import { validNumber } from "./validNumbers";

export const validate = (values) => {
  const errors = {};
  const phoneNumberPrefix = values.phoneNumber.split("").splice(0, 4).join("");
  const passwordCheck = values.password;
  // let masterCheck = /^(?:5[1-5][0-9]{14})$/;
  // let visaCheck = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;

  // Validates Full Name
  if (!values.fullName) {
    errors.fullName = "please type in your full name";
  } else if (values.fullName.length < 5) {
    errors.fullName = "name must be at least 2 characters";
  } else if (values.fullName.indexOf(" ") < 2) {
    errors.fullName = "please type in your last name";
  } else if (values.fullName.charAt(values.fullName.length - 1) === " ") {
    errors.fullName = "no white space at the end";
  }

  // Validates Email
  if (!values.email) {
    errors.email = "please type in your email";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  // Validates Phone Number
  if (!values.phoneNumber) {
    errors.phoneNumber = "please type in your phone number";
  } else if (!/^[0-9]+$/i.test(values.phoneNumber)) {
    errors.phoneNumber = "invalid phone number";
  } else if (!validNumber.includes(phoneNumberPrefix)) {
    errors.phoneNumber =
      "Nigerian number without +234  e.g 080,  070,  090 ...";
  } else if (values.phoneNumber.length < 11 || values.phoneNumber.length > 11) {
    errors.phoneNumber = "11 digits";
  }

  // Validates Password
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

  // Validates ConfirmPassword
  if (!values.confirmPassword) {
    errors.confirmPassword = "please confirm password";
  } else if (passwordCheck !== values.confirmPassword) {
    errors.confirmPassword = "confirm password must match password";
  }

  // Validates Card Number (Master and Visa Card Only)
  if (!values.cardNumber) {
    errors.cardNumber = "please type in your 16-digit card number";
  } else if (values.cardNumber.length < 19 || values.cardNumber.length > 19) {
    errors.cardNumber = "16 digits";
  }
  //   else if (!(values.cardNumber.match(masterCheck) || values.cardNumber.match(visaCheck)) ) {
  //     errors.cardNumber = "Invalid Card Number or Type";
  //   }

  // Validates Expiry Date
  if (
    !values.expiryDate ||
    values.expiryDate.length < 7 ||
    values.expiryDate.length > 7
  ) {
    errors.expiryDate = "please input date in MM/YY format";
  }

  // Validates Pin
  if (!values.pin || !/^\d+$/.test(values.pin)) {
    errors.pin = "please input a four-digit PIN number";
  } else if (values.pin.length < 4 || values.pin.length > 4) {
    errors.pin = "4 digits";
  }

  return errors;
};
