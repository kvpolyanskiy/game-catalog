import React from "react";
import { api } from "../api/api";
import { Typography, TypographyType } from "../common-components/ui";
import { AppContext } from "../store/AppContext";

import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";

import styles from "./MainPage.module.css";

export const MainPage: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  const [loading, setLoading] = React.useState(true);
  const { onApplyGames } = React.useContext(AppContext);

  React.useEffect(() => {
    const fetchFeed = async () => {
      const games = await api.fetchFeed();
      onApplyGames(games);
      setLoading(false);
    };

    fetchFeed();
  }, [onApplyGames]);

  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.content}>
        {loading ? <Typography type={TypographyType.SUBHEADER} text="Loading..." /> : children}
      </div>
      <Footer />
    </div>
  );
};
