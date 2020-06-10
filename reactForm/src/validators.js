export const validateEmail = () => {};
export const validatePhoneNumber = () => {};
export const validatePassword = () => {};
export const validateConfirmPass = () => {};
export const validateCardNumber = () => {};
export const validateExpiryDate = () => {};
export const validatePin = () => {};

// validateName = () => {
//   const { name } = this.state;
//   this.setState({
//     nameError: name.length > 3 ? null : "Name must be longer than 3 characters",
//   });
// };

export const validateName = (fullname) => {
  console.log(fullname);
  if (fullname.length < 5) return "Name must be longer than 2 characters";
  if (fullname.indexOf(" ") >= 2) {
    return "Please include your last name";
  } else return null;
};
