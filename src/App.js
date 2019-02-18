import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import login from './container/login'
import register from './container/register'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
      <Switch>
        <Route exact path="/" component={login}></Route>                                              
        <Route exact path="/register" component={register}></Route>
      </Switch>
    </Router>
    );
  }
}

export default App;
