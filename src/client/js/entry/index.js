import "@babel/polyfill";

import * as OfflinePluginRuntime from 'offline-plugin/runtime';
OfflinePluginRuntime.install({
  onUpdating: () => {
    console.log('SW Event:', 'onUpdating');
  },
  onUpdateReady: () => {
    console.log('SW Event:', 'onUpdateReady');
    // Tells to new SW to take control immediately
    runtime.applyUpdate();
  },
  onUpdated: () => {
    console.log('SW Event:', 'onUpdated');
    // Reload the webpage to load into the new version
    window.location.reload();
  },

  onUpdateFailed: () => {
    console.log('SW Event:', 'onUpdateFailed');
  }
});

import React from "react";
import { hydrate, render } from "react-dom";
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
