import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';


export default function validateInput(data) {
  let errors = {};

  if(Validator.isEmpty(data.username)) {
    errors.username = 'This field is required (username)';
  }

  if(Validator.isEmpty(data.email)) {
    errors.email = 'This field is required (email)';
  }

  if(!Validator.isEmail(data.email)) {
    errors.email = 'This field is invalid (email)';
  }

  if(Validator.isEmpty(data.password)) {
    errors.password = 'This field is required (password)';
  }

  if(Validator.isEmpty(data.passwordConfirmation)) {
    errors.passwordConfirmation = 'This field is required (password ripeti)';
  }

  if(!Validator.equals(data.passwordConfirmation, data.password)) {
    errors.passwordConfirmation = 'Passwd must match';
  }

  if(Validator.isEmpty(data.timezone)) {
    errors.timezone = 'This field is required (timezone)';
  }


  return {
    errors,
    isValid: isEmpty(errors)
  }
}
