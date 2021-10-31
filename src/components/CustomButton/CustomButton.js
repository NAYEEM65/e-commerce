import React from "react";
import "./CustomButton.scss";

const CustomButton = (props) => {
  const { children, isGoogleSignIn, ...otherProps } = props;
  return (
    <button
      className={`${isGoogleSignIn ? "google__sign__in" : ""} custom__button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
