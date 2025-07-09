import React, { useState } from "react";
import TextField from "../components/TextField";
import PasswordField from "../components/PasswordField";
import Container1 from "../components/Container1";
import Heading1 from "../components/Heading1";
import Button1 from "../components/Button1";
import { createUser } from "../api/user";
import { validateRegistration } from "../validations/registrationValidation";

const Registration = () => {
  const [username, setUsername] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    const validationErrors = validateRegistration({ username, mobile, password, confirmPassword });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({}); // clear previous errors

    try {
      createUser({
        userName: username,
        phoNumber: mobile,
        password: password,
      });
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <div>
      <Container1>
        <Heading1 txt="Sign Up" />

        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-600 mb-2">Username:</label>
          <TextField
            txt=""
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="mobile" className="block text-gray-600 mb-2">Mobile:</label>
          <TextField
            txt=""
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-600 mb-2">Password:</label>
          <PasswordField
            txt=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>

        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-gray-600 mb-2">Re-Enter Password:</label>
          <PasswordField
            txt=""
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
        </div>

        <Button1 txt="Create Account" handleClick={handleSubmit} />
      </Container1>
    </div>
  );
};

export default Registration;
