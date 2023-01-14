import { IValues } from '../interfaces';

function validate(values: IValues) {
  const errors: { [key: string]: string } = {};

  if (!values.email.trim()) {
    errors.email = 'Required';
  } else if (!/^\S+@\S+\.\S+$/g.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 8) {
    errors.password = 'Password must be 8 characters or more';
  }
  return errors;
}

export default validate;
