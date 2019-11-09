/* eslint-disable no-console */
import "@babel/polyfill";
import React from "react";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router";
import express from "express";
import { ServerStyleSheet, StyleSheetManager, ThemeProvider } from "styled-components";
import createStore from "store";
import { Application } from "modules/Application";
import fs from "fs";
import path from "path";
import theme from "shared/theme";
import compression from "compression";
import { Helmet } from 'react-helmet'
import { matchRoutes } from "react-router-config";
import { routes } from "routes";
import { ChunkExtractor } from '@loadable/server'
import LRUCache from 'lru-cache'


const statsFile = path.resolve('build/loadable-stats.json')

const app = express();
const PORT = process.env.PORT || 8080;

const ssrCache = new LRUCache({
  max: 100 * 1024 * 1024, /* cache size will be 100 MB using `return n.length` as length() function */
  length: function (n, key) {
    return n.length
  },
  maxAge: 1000 * 60 * 60 * 24 * 30
});

const getCacheKey = (req, theme) => {
  return `${req.originalUrl}&appTheme=${theme}`
}

app.use(compression());

app.use("/static", express.static("build"));

app.get("/favicon.ico", (req, res) => res.status(204).end());

app.get("/*", (req, res) => {
  const key = getCacheKey(req, theme);
  if (ssrCache.has(key)) {
    console.log(`serving from cache ${key}`);
    res.setHeader('x-cache', 'HIT');
    res.send(ssrCache.get(key));
    return
  }


  const injectHTML = (data, { helmet, body, styleTags, scriptTags, state }) => {
    data = data.replace("</head>", `${helmet.title.toString()}${styleTags}</head>`);
    data = data.replace(
      "<main></main>",
      `<main>${body}</main><script>window.__PRELOADED_STATE__ = ${state}</script>${scriptTags}`
    );

    return data;
  };

  const indexFile = path.resolve("./build/index.html");

  fs.readFile(indexFile, "utf8", async (err, htmlData) => {
    if (err) {
      console.error("Something went wrong:", err);

      return res.status(500).send("Oops, better luck next time!");
    }
    const context = {};
    const { store } = createStore(req.url);

    const [branch] = matchRoutes(routes, req.url);

    if (!branch.route.isNotFound) {
      if (branch.route.loadData) {
        await branch.route.loadData(store.dispatch, req.url)
      }
    } else {
      res.status(404)
    }

    const sheet = new ServerStyleSheet();
    const extractor = new ChunkExtractor({
      statsFile,
      entrypoints: ["index"]
    })
    console.log(`key ${key} not found, rendering`);


    const jsx = extractor.collectChunks(<StyleSheetManager sheet={sheet.instance}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            <Application />
          </StaticRouter>
        </Provider>
      </ThemeProvider>
    </StyleSheetManager>)

    const routeMarkup = renderToString(jsx)

    const scriptTags = extractor.getScriptTags() // or extractor.getScriptElements();

    const helmet = Helmet.renderStatic();
    const styleTags = sheet.getStyleTags() // or extractor.getStyleElements();

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

    const html = injectHTML(htmlData, {
      helmet,
      body: routeMarkup,
      styleTags,
      scriptTags,
      state: JSON.stringify(store.getState()).replace(/</g, "\\u003c")
    });
    ssrCache.set(key, html);
    res.setHeader('x-cache', 'MISS');

    return res.send(html);

  });
});

app.listen(PORT, console.log(`App listening on port ${PORT}!`));
