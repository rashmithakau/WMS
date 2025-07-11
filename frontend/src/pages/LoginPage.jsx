import React from "react";
import TextField from "../components/textfield";
import PasswordField from "../components/PasswordField";
import Container1 from "../components/Container1";
import Heading1 from "../components/Heading1";
import Button1 from "../components/Button1";
import { Button2 } from "../components/Button2";
import { useNavigate } from 'react-router-dom';
import { validateLogin } from "../validations/loginValidation";
import { useState } from "react";
import { loginUser } from "../api/user";
import Swal from "sweetalert2";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errors, setErrors] = useState({});

  const clear = () => {
    setUsername("");
    setPassword("");
    setErrors({});
  };

  const handleLogin = async () => {
    const validationErrors = validateLogin({ username, password });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({}); // clear errors

    try {
      console.log(username, password);
      const login = await loginUser({
        userName: username,
        password: password,
      });
      console.log("Login response:", login);
      if (login.data.success) {
        Swal.fire({
          title: "Success!",
          text: "Login successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });
        clear();
      } 
    } catch (error) {
      console.error("Login error:", error);
      setErrors({ general: "Login failed. Please try again." });

      if(error.response.status === 401) {
        Swal.fire({
          title: "Error!",
          text: "Invalid username or password.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }else{
        Swal.fire({
          title: "Error!",
          text: "An unexpected error occurred. Please try again later.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
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
          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username}</p>
          )}
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
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}
        </div>
        <div className="flex flex-col gap-y-4">
          <Button1 txt={"Login Now"} handleClick={handleLogin} />
          <Button2 txt={"Sign Up"} handleClick={handleSignUpClick}/>
        </div>

      </Container1>
    </>
  );
};

export default LoginPage;
