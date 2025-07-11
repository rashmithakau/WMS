import React from "react";
import TextField from "../components/textfield";
import PasswordField from "../components/PasswordField";
import Container1 from "../components/Container1";
import Heading1 from "../components/Heading1";
import Button1 from "../components/Button1";
import { Button2 } from "../components/Button2";
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/signup');
  };
  return (
    <>
      <Container1>
        <Heading1 txt={"Sign In"} />
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-600 mb-2">
            Username :{" "}
          </label>
          <TextField txt={"Enter Username Here"} />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-600 mb-2">
            Password :{" "}
          </label>
          <PasswordField txt={"Enter Password Here"} />
        </div>
        <div className="flex flex-col gap-y-4">
          <Button1 txt={"Login Now"} />
          <Button2 txt={"Sign Up"} handleClick={handleSignUpClick}/>
        </div>
      </Container1>
    </>
  );
};

export default LoginPage;
