export const validateCreateListingForm = (values) => {
  const { farmstandName } = values;
  const errors = {};

  if (!farmstandName) {
    errors.farmstandName = 'Required';
  } else if (farmstandName.length < 2) {
    errors.farmstandName = 'Must be at least 2 characters';
  } else if (farmstandName.length > 30) {
    errors.farmstandName = 'Must be 30 characters or less';
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