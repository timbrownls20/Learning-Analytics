import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./js/store/index";
import App from "./js/components/App";
import Layout from "./js/components/Layout";
import Page2 from "./js/components/Page2";
import { BrowserRouter as Router, Route } from 'react-router-dom'

render(
  <Provider store={store}>
    <Router>
      {/* <Route exact path="/" component={App} />
      <Route exact path="/Page2/:filter?" component={Page2} /> */}
      <RouteWrapper path="/" component={App} layout={Layout} exact />
      <RouteWrapper path="/Page2/:filter?" component={Page2} layout={Layout} exact />
    </Router>
  </Provider>,
  document.getElementById("root")
);


function RouteWrapper({
  component: Component, 
  layout: Layout, 
  ...rest
}) {
  return (
    <Route {...rest} render={(props) =>
      <Layout {...props}>
        <Component {...props} />
      </Layout>
    } />
  );
}