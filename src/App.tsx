import React from "react";
import { BrowserRouter } from "react-router-dom";

import { MainPage } from "./main-page/MainPage";
import { Router } from "./router/Router";
import { AppContext } from "./store/AppContext";
import { useAppStore } from "./store/useAppStore";

export const App: React.FC = () => {
  const store = useAppStore();

  return (
    <AppContext.Provider value={store}>
      <BrowserRouter>
        <MainPage>
          <Router />
        </MainPage>
      </BrowserRouter>
    </AppContext.Provider>
  );
};
