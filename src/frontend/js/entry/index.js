import React from 'react'
import ReactDOM from 'react-dom'
import "@babel/polyfill";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { Application } from 'modules/Application'
import configureStore from 'store';
import { ThemeProvider } from 'styled-components'
import theme from 'shared/theme'
import 'main.scss'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Application />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.body.appendChild(document.createElement('main'))
)
