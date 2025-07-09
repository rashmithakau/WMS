import React from "react";

const Button1 = ({ txt }) => {
  return (
    <div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
        {txt}
      </button>
    </div>
  );
};

export default Button1;
