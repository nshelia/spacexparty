import "@babel/polyfill";
import React from "react";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router";
import express from "express";
import { ServerStyleSheet, StyleSheetManager,ThemeProvider } from "styled-components";
import createStore from "store";
import stats from "../../build/react-loadable.json";
import { getBundles } from "react-loadable/webpack";
import { Application } from "modules/Application";
import fs from "fs";
import path from "path";
import theme from "shared/theme";
import { Frontload, frontloadServerRender } from "react-frontload";
import Loadable from "react-loadable";
import compression from "compression";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(compression());

app.use("/static", express.static("build"));

app.get("/favicon.ico", (req, res) => res.status(204).end());

app.get("/*", (req, res) => {
  const injectHTML = (data, { body, styleTags, bundles, state }) => {
    const scripts = bundles.
      map((bundle) => {
        return `<script src="${bundle.publicPath}"></script>`;
      }).
      join("\n");

    data = data.replace("</head>", `${styleTags}</head>`);
    data = data.replace(
      "<main></main>",
      `<main>${body}</main><script>window.__PRELOADED_STATE__ = ${state}</script>${scripts}`
    );

    return data;
  };

  const indexFile = path.resolve("./build/index.html");

  fs.readFile(indexFile, "utf8", (err, htmlData) => {
    if (err) {
      console.error("Something went wrong:", err);

      return res.status(500).send("Oops, better luck next time!");
    }
    const context = {};
    const modules = [];
    const { store } = createStore(req.url);
    const App = () => <StyleSheetManager sheet={sheet.instance}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            <Frontload isServer={true}>
              <Application />
            </Frontload>
          </StaticRouter>
        </Provider>
      </ThemeProvider>
    </StyleSheetManager>

    ;

    const sheet = new ServerStyleSheet();


    return frontloadServerRender((dryRun) => {
      if (dryRun) {
        return renderToString(<Loadable.Capture report={(m) => modules.push(m)}>
          <App />
        </Loadable.Capture>);
      }

      return renderToString(<App />);
    }).then((routeMarkup) => {
      const styleTags = sheet.getStyleTags();

      if (context.status === 404) {
        res.status(404);

        return res.end();
      }
      if (context.url) {
        res.writeHead(302, {
          Location: context.url
        });

        return res.end();
      }
      const bundles = getBundles(stats, modules);

      const html = injectHTML(htmlData, {
        body: routeMarkup,
        styleTags,
        bundles,
        state: JSON.stringify(store.getState()).replace(/</g, "\\u003c")
      });

      return res.send(html);

    });
  });
});

Loadable.preloadAll().then(() => {
  /*eslint-disable*/
  app.listen(PORT, console.log(`App listening on port ${PORT}!`));
  /* eslint-enable*/
});
