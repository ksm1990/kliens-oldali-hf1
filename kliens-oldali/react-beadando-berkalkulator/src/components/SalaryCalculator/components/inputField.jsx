import React from "react";

const InputField = ({ label, value, onChange }) => {
  return (
    <div className="flex flex-col items-center">
      <div>{label}</div>
      <input
        className="p-4 m-1 rounded-xl bg-gray-300 border-4 border-black"
        value={value}
        type="text"
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
