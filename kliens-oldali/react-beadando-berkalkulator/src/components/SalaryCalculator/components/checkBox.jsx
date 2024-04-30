import React from "react";

const Checkbox = ({ id, label, checked, onChange }) => {
  return (
    <div className="p-1 m-1 rounded w-80 shadow-sm">
      <label htmlFor={id}>
        <input id={id} type="checkbox" checked={checked} onChange={onChange} className="p-3 m-3"/>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
