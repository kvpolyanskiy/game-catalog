import React from "react";
import classnames from "classnames";

import styles from "./Input.module.css";

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  value,
  onChange,
  onBlur,
  onKeyDown,
  className,
}) => {
  const classNames = classnames(styles.input, className);
  return (
    <input
      className={classNames}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
    />
  );
};
