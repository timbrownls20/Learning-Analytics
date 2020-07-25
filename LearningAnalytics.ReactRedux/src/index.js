import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css'

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./js/store/index";
import Cohort from "./js/components/Cohort";
import Layout from "./js/components/Layout";
import Home from "./js/components/Home";
import { BrowserRouter as Router, Route } from 'react-router-dom'

render(
  <Provider store={store}>
    <Router>
      <RouteWrapper path="/" component={Home} layout={Layout} exact />
      <RouteWrapper path="/Cohort/:id?" component={Cohort} layout={Layout} exact />
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