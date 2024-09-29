import React from "react";

const InputForm = ({ label, valueData, on_Change }) => (
    <div>
      <label>{label}</label>
      <input
        type="number"
        step="0.01"
        value={valueData}
        onChange={on_Change}
      />
    </div>
);

export default InputForm;
