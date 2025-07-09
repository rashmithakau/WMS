import React from "react";

const PasswordField = ({ txt }) => {
  return (
    <div>
      <input
        type="password"
        placeholder={txt}
        className="border-1 border-gray-300 rounded-md p-1 focus:outline-none focus:border-blue-500"
        required
      />
    </div>
  );
};

export default PasswordField;
