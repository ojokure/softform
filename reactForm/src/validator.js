const validator = (values) => {
  const errors = {};
  if (!values.fullName) {
    errors.fullName = "required";
  } else if (values.fullName.length < 5) {
    errors.fullName = "name must be 2 characters or more";
  } else if (values.fullName.indexOf(" ") < 2) {
    errors.fullName = "please fill in your last name";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  // if(!values.phoneNumber){
  //   errors.phoneNumber = "Required";
  // }else if (){

  // }

  return errors;
};

export default validator;
