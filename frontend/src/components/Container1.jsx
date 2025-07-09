import React from "react";

const Container1 = ({ children }) => {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <form className="bg-white p-8 rounded-xl shadow-lg max-w-sm">
          {children}
        </form>
      </div>
    </div>
  );
};

export default Container1;
