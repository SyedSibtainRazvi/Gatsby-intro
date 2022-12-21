import React from "react";
import cx from "classnames";

export const Button = ({ label, className, ...rest }) => {
  return (
    <button
      className={cx(
        "text-12-22 uppercase font-mulish py-8 px-20 rounded-sm tracking-16 font-semibold focus:outline-none",
        className
      )}
      {...rest}>
      {label}
    </button>
  );
};