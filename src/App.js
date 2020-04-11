import React from 'react';
import './App.css';
import 'typeface-roboto';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './containers/Home'
import Admin from './containers/Admin';
import Agents from './containers/Agents';
import Properties from './containers/Properties';

import logo from './imgs/logo.png'

function App() {
  return (
    <div id="container">
      <header>
        <img src={logo} alt="logo" height="100" />
      </header>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/properties" component={Properties} />
            <Route exact path="/agents" render={routerProps => <Agents {...routerProps} />} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
