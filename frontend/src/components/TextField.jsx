import React from "react";

const TextField = ({ txt,onChange,value}) => {
  return (
    <div>
      <input
        type="text"
        placeholder={txt}
        className="border-1 border-gray-300 rounded-md p-1 focus:outline-none focus:border-blue-500"
        required
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default TextField;
