import React, { Component } from 'react';
import { connect } from 'react-redux';
import './app.css';
import ListView from './ListView.js';
import Settings from './Settings';
import Dashboard from './Dashboard';
import {Link, Route, BrowserRouter as Router,Switch} from 'react-router-dom'


class App extends React.Component {

  render () {

    return (
      <Router>
        <Switch>
          <Route exact path='/pages/popup.html' component={Dashboard} />
          <Route path='/pages/settings' component={Settings} />
        </Switch>
      </Router>
    )
  }
}

export default App;
