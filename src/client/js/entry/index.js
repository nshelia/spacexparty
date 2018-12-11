import React from "react";
import { hydrate, render } from "react-dom";
import "@babel/polyfill";
import { Provider } from "react-redux";
import { Application } from "modules/Application";
import createStore from "store";
import { ThemeProvider } from "styled-components";
import theme from "shared/theme";
import { ConnectedRouter } from "connected-react-router";
import { Frontload } from "react-frontload";
import Loadable from "react-loadable";

const { store, history } = createStore();

const root = document.querySelector("main");

const App =
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Frontload noServerRender={true}>
          <Application />
        </Frontload>
      </ConnectedRouter>
    </Provider>
  </ThemeProvider>

;

if (root.hasChildNodes()) {
  Loadable.preloadReady().then(() => {
    hydrate(App, root);
  });
} else {
  render(App, root);
}
