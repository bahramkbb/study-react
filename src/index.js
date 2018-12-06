import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  // <Router>
  //   <div>
  //     <nav>
  //       <ul>
  //         <li>
  //           <NavLink to="/">Home</NavLink>
  //         </li>
  //         <li>
  //           <NavLink to="/about">About</NavLink>
  //         </li>
  //         <li>
  //           <NavLink to="/products">Products</NavLink>
  //         </li>
  //         <li>
  //           <NavLink to="/shit">Shit</NavLink>
  //         </li>
  //       </ul>
  //     </nav>
  //
  //     <Switch>
  //       <Route path="/" exact component={App} />
  //       <Route component={NotFound} />
  //     </Switch>
  //   </div>
  // </Router>
<App />
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
