import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" >
          <Redirect to='/products' />
        </Route>
        <Route path="/products" />
        <Route path="/products/create" />
        <Route path="/products/:id" />
        <Route path="/products/:id/edit" />
        <Route />
      </Switch>
    </Router>
  );
}