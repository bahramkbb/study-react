import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";

import './index.css';
import Home from './Home';
import About from './About';
import Products from './Products';
import NotFound from './NotFound';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/shit">Shit</NavLink>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/products" component={Products} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
