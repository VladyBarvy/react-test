import React from 'react'
import simpleform_style from './simpleform_style';

const TextField = ({name, onChange, onBlur, error, label}) => (
  <div style={simpleform_style.inputGroup}>
    <label>
      {label}
      <input
        style={simpleform_style.input}
        type="text"
        name={name}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <div style={simpleform_style.error}>{error}</div>}
    </label>
  </div>
);

export default TextField;
