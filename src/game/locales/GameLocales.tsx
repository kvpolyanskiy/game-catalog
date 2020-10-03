import React from "react";
import { PrimaryButton } from "../../common-components/ui";
import { GameLocaleButton } from "../locale-button/GameLocaleButton";

interface GameLocalesProps {
  locales: string;
}

export const GameLocales: React.FC<GameLocalesProps> = ({ locales }) => {
  const parsedLocales = React.useMemo(() => JSON.parse(locales), [locales]);
  const [active, setActive] = React.useState(parsedLocales[0]);

  const onChangeLocale = React.useCallback((locale) => setActive(locale), [setActive]);

  return (
    <>
      {parsedLocales.map((locale: string) => (
        <GameLocaleButton
          key={locale}
          locale={locale}
          activeLocale={active}
          onClick={onChangeLocale}
        >
          {locale}
        </GameLocaleButton>
      ))}
    </>
  );
};
