import React from "react";
import TextField from "../components/textfield";
import PasswordField from "../components/PasswordField";
import Container1 from "../components/Container1";
import Heading1 from "../components/Heading1";
import Button1 from "../components/Button1";

const LoginPage = () => {
  return (
    <>
      <Container1>
        <Heading1 txt={"Login Page"} />
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
        <Button1 txt={"Login Now"} />
      </Container1>
    </>
  );
};

export default LoginPage;
