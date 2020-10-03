import React from "react";
import classnames from "classnames";

import styles from "./Typography.module.css";

export const enum TypographyType {
  PAGE_HEADER = "pageHeader",
  SECTION_HEADER = "sectionHeader",
  SUBHEADER = "subheader",
  PARAGRAPH = "paragraph",
  CARD_CAPTION = "cardCaption",
}

interface TypographyProps {
  type?: TypographyType;
  text?: string;
  className?: string;
}

export const Typography: React.FC<React.PropsWithChildren<TypographyProps>> = ({
  text,
  children,
  className,
  type = TypographyType.PARAGRAPH,
}) => {
  const content = text ?? children;
  const classNames = classnames(className, styles[type]);

  switch (type) {
    case TypographyType.PAGE_HEADER:
      return <h1 className={classNames}>{content}</h1>;
    case TypographyType.SECTION_HEADER:
      return <h2 className={classNames}>{content}</h2>;
    case TypographyType.SUBHEADER:
      return <h3 className={classNames}>{content}</h3>;
    case TypographyType.PARAGRAPH:
    case TypographyType.CARD_CAPTION:
      return <p className={classNames}>{content}</p>;
    default:
      return <span>{content}</span>;
  }
};
