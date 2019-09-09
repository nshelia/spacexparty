import "@babel/polyfill";
import "helpers/offline"
import "helpers/notifications"
import { loadableReady } from '@loadable/component'
import React from "react";
import { hydrate, render } from "react-dom";
import { Provider } from "react-redux";
import { Application } from "modules/Application";
import createStore from "store";
import { ThemeProvider } from "styled-components";
import theme from "shared/theme";
import { ConnectedRouter } from "connected-react-router";

const { store, history } = createStore();

const root = document.querySelector("main");

const App =
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Application />
      </ConnectedRouter>
    </Provider>
  </ThemeProvider>

  ;

if (root.hasChildNodes()) {
  loadableReady(() => {
    hydrate(App, root)
  })
} else {
  render(App, root);
}
