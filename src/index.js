import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './style/main.scss';
import 'antd/dist/antd.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from "./reducers";
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';

const store = createStore(rootReducer, applyMiddleware(thunk));
console.log(store)
ReactDOM.render(<Provider store={store}>
		<Router basename={process.env.PUBLIC_URL}><App /></Router>
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
