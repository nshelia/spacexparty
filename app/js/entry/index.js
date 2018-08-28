import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { Application } from 'components/Application'
import configureStore from 'store';
import 'main.scss'


const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Application/>
       </BrowserRouter>
    </Provider>,
  document.body.appendChild(document.createElement('main'))
)
