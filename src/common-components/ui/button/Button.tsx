/* eslint-disable react/button-has-type */
import React from "react";
import classnames from "classnames";

import styles from "./Button.module.css";

export const enum ButtonSizeType {
  SMALL = "small",
  LARGE = "large",
  WRAP_CONTENT = "wrapContent",
}

export const enum ButtonType {
  BUTTON = "button",
  SUBMIT = "submit",
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSizeType;
  type?: ButtonType;
}

export const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  size = ButtonSizeType.LARGE,
  type = ButtonType.BUTTON,
  ...restProps
}) => {
  const classNames = classnames(styles.button, size && styles[size], className);

  return (
    <button type={type} className={classNames} {...restProps}>
      {children}
    </button>
  );
};
