import React from 'react';
import { Route, Link } from "react-router-dom";
import Product from './Product';
import logo from './logo.svg';
import './App.css';

const Products = ({ match }) => (
  <div>
    <h2>Topics</h2>

    <ul>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.path}/:id`} component={Product} />
    <Route
      exact
      path={match.path}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

export default Products;
