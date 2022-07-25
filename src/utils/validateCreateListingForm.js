export const validateCreateListingForm = (values) => {
  const { name } = values;
  const errors = {};

  if (!name) {
    errors.name = 'Required';
  } else if (name.length < 2) {
    errors.name = 'Must be at least 2 characters';
  } else if (name.length > 30) {
    errors.name = 'Must be 30 characters or less';
  }

  // if (!lastName) {
  //   errors.lastName = 'Required';
  // } else if (lastName.length < 2) {
  //   errors.lastName = 'Must be at least 2 characters';
  // } else if (lastName.length > 15) {
  //   errors.lastName = 'Must be 15 characters or less';
  // }

  // const reg = /^\d+$/;

  // if (!reg.test(phoneNum)) {
  //   errors.phoneNum = 'The phone number should contain only numbers.';
  // } 

  // if (!email.includes('@')) {
  //   errors.email = 'Email should contain a @';
  // }

  return errors;

};