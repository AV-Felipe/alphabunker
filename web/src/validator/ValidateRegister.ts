import {RegisterValues} from '../utils/types';

function Validate(register: RegisterValues) {
  const errors = {} as RegisterValues ;
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const { name, email, birthdate, cpf, password, confirm_password } = register;
  if (!name) {
    errors.name = 'Name is required';
  }
  if (!cpf) {
    errors.cpf = 'Cpf is required';
  }else if(cpf.length != 11){
    errors.cpf = 'Cpf must contain 11 digits';
  }

  if (!email) {
    errors.email = 'Email is required';
  } else if (!emailRegex.test(email)) {
    errors.email = 'Invalid Email';
  }
  const dateUS = new Date(birthdate);
  const dateNow = new Date();

  if (!birthdate) {
    errors.birthdate = 'Birth Date is required';
  } else if (dateUS > dateNow) {
    errors.birthdate = 'Your date of birth is greater than the current date';
  }

  if (!password) {
    errors.password = 'Password is required';
  } else if (password.length < 4) {
    errors.password = 'Password is too short';
  } else if (password.length > 4) {
    errors.password = 'Password is too long';
  }

  if (!confirm_password) {
    errors.confirm_password = 'Confirm password is required';
  } else if (password !== confirm_password) {
    errors.confirm_password = 'Password is different from confirm password';
  }

  return errors;
}

export default Validate;
