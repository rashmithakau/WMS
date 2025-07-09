import React from "react";

const TextField = ({ txt }) => {
  return (
    <div>
      <input
        type="text"
        placeholder={txt}
        className="border-1 border-gray-300 rounded-md p-1 focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};

export default TextField;
