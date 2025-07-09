  export function validateLogin  ({ username, password }) {
    const errors = {};

    if (!username) {
      errors.username = "username is required";
    }

    if (!password) {
      errors.password = "Password is required";
    }

    return errors;
  }

