import React from "react";

const PasswordField = ({ txt,onChange,value}) => {
  return (
    <div>
      <input
        type="password"
        placeholder={txt}
        className="border-1 border-gray-300 rounded-md p-1 focus:outline-none focus:border-blue-500"
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default PasswordField;
