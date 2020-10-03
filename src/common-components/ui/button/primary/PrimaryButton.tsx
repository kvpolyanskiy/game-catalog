import React from "react";
import classnames from "classnames";
import { Button, ButtonProps } from "../Button";

import styles from "./PrimaryButton.module.css";

export const PrimaryButton: React.FC<ButtonProps> = ({ className, children, ...restProps }) => {
  const classNames = classnames(styles.button, className);

  return (
    <Button className={classNames} {...restProps}>
      {children}
    </Button>
  );
};
