import React from "react";
import TextField from "../components/textfield";
import PasswordField from "../components/PasswordField";
import Container1 from "../components/Container1";
import Heading1 from "../components/Heading1";
import Button1 from "../components/Button1";
import { validateLogin } from "../validations/loginValidation";
import { useState } from "react";
import { loginUser } from "../api/user";

const LoginPage = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errors, setErrors] = useState({});

  const handleLogin = async () => {
  
    const validationErrors = validateLogin({ username, password });
    

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    

    setErrors({}); // clear errors

    try {
      await loginUser({
        userName: username,
        password: password,
      });
    } catch (error) {
      console.error("Login error:", error);
      setErrors({ general: "Login failed. Please try again." });
    }
  };
  return (
    <>
      <Container1>
        <Heading1 txt={"Sign In"} />
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-600 mb-2">
            Username :{" "}
          </label>
          <TextField
            txt={"Enter Username Here"}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-600 mb-2">
            Password :{" "}
          </label>
          <PasswordField
            txt={"Enter Password Here"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>
        <Button1 txt={"Login Now"} handleClick={handleLogin} />
      </Container1>
    </>
  );
};

export default LoginPage;
