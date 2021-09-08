import { validate } from 'indicative/validator';

export const registration = async data => {
  const rules = {
    name: 'required|alpha',
    email: 'required|email',
    password: 'required|min:6|max:12',
  };

  const messages = {
    required: field => `${field} is required`,
    'name.alpha': 'Username contains unallowed characters',
    'email.email': 'Please enter a valid email address',
    'password.min': 'Password is too short',
    'password.max': 'Password is too long',
  };

  try {
    await validate(data, rules, messages);
  } catch (error) {
    throw new Error(error[0].message);
  }
};

export const login = async data => {
  const rules = {
    email: 'required|email',
    password: 'required|min:6|max:12',
  };

  const messages = {
    required: field => `${field} is required`,
    'email.email': 'Please enter a valid email address',
    'password.min': 'Password is too short',
    'password.max': 'Password is too long',
  };

  try {
    await validate(data, rules, messages);
  } catch (error) {
    throw new Error(error[0].message);
  }
};
