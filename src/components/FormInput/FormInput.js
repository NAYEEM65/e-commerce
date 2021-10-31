import React from "react";
import "./FormInput.scss";

const FormInput = (props) => {
  const { handleChange, label, ...otherProps } = props;
  return (
    <div className="group">
      <input className="form__input" onChange={handleChange} {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form__input__label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
