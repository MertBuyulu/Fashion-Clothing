import React from "react";

import "./form-input.styles.scss";
// if user enters something then the class name will be shrink form-input otherwise form-input
const FormInput = ({ id, handleChange, label, value, ...otherProps }) => {
  return (
    <div className="group">
      <input
        id={id}
        className="form-input"
        onChange={handleChange}
        {...otherProps}
      />
      {label ? (
        <label
          htmlFor={id}
          className={`${value.length ? "shrink" : ""} form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
