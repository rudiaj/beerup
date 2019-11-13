import React, { memo } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { createBrowserHistory } from "history";

import { Home, Main, Navigation, Header, Footer } from "./components";
import { GlobalStyle, theme } from "./utils";

import { paths } from "./constants";

const history = createBrowserHistory();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter history={history}>
        <Navigation />
        <Header />
        <Main>
          <Switch>
            <Route path={paths.routes.BASE} component={Home} />
          </Switch>
        </Main>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default memo(App);
