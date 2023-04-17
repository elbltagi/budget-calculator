import React from "react";

function Alert({ text, type }) {
  return (
    <div
      className={`fixed top-3 ${
        type ? "bg-green-600" : "bg-red-700"
      } w-2/3 text-white py-1 max-md:w-[90%] shadow-md transition-all shadow-black`}
    >
      <p>{text}</p>
    </div>
  );
}
export default Alert;
