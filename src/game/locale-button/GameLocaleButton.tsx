import React from "react";
import classnames from "classnames";
import { ButtonSizeType, PrimaryButton } from "../../common-components/ui";

import styles from "./GameLocaleButton.module.css";

interface GameLocaleButtonProps {
  locale: string;
  activeLocale: string;
  onClick: (locale: string) => void;
}

export const GameLocaleButton: React.FC<GameLocaleButtonProps> = ({
  locale,
  activeLocale,
  onClick,
}) => {
  const classNames = classnames(styles.button, { [styles.notActive]: locale !== activeLocale });
  const handleClick = React.useCallback(() => onClick(locale), [locale, onClick]);

  return (
    <PrimaryButton
      className={classNames}
      size={ButtonSizeType.SMALL}
      key={locale}
      onClick={handleClick}
    >
      {locale}
    </PrimaryButton>
  );
};
