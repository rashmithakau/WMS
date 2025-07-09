export function validateRegistration({ username, mobile, password, confirmPassword }) {
    const errors = {};
  
    if (!username.trim()) {
      errors.username = "Username is required";
    }
  
    if (!/^\d{10}$/.test(mobile)) {
      errors.mobile = "Mobile must be a valid 10-digit number";
    }
  
    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
  
    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
  
    return errors;
  }
  