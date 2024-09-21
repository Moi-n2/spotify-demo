import React from "react";

const Button = ({ children }) => {
  return (
    <button className="px-4 py-1.5 bg-yellow-300 text-[15px] text-black rounded-full">
      {children}
    </button>
  );
};

export default Button;
