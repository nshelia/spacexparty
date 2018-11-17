import { combineReducers } from "redux";
import { routerReducer } from 'react-router-redux'

const CONTEXT = require.context('../modules', true, /\.\/(.*)\/index.js?$/i);

const lowerCaseFirstLetter = (string) => string.charAt(0).toLowerCase() + string.slice(1)

const importReducer = (req) => (obj, path) => {
  if (path.includes('reducer')) {
    const [
      moduleState,
      moduleName
    ] = path.match(/\.\/(.*)\/index.js?$/i)
    const reducer = { [lowerCaseFirstLetter(moduleName.replace('/reducer',''))]: req(moduleState).default };


    return {
      ...obj,
      ...reducer
    };
  }

  return { ...obj, };
};

const getReducers = (ctx) => ctx.keys().reduce(importReducer(ctx), { routing: routerReducer });

export default combineReducers(getReducers(CONTEXT));

