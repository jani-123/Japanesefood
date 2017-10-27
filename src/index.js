import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CHECKOUT from './checkout';
import { HashRouter, Switch, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "redux-zero/react";
import store from "./store";

const Index = () => (
  <Provider store={store}>
     <HashRouter>
        <Switch>
           <Route exact path="/" component={App} />
           <Route path="/checkout" component={CHECKOUT} />
        </Switch>
     </HashRouter>
  </Provider>
);

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();