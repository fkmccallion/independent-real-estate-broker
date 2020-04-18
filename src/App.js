import React from 'react';
import './App.css';
// Import for future use of Material-UI
import 'typeface-roboto';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './containers/Home'
import Admin from './containers/Admin';
import Agents from './containers/Agents';
import Properties from './containers/Properties';

import logo from './imgs/logo-medium.gif'

function App() {
  return (
    <div className="App">
      <header>
        <img id="app-logo" src={logo} alt="logo" height="150px" />
      </header>
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/properties" render={routerProps => <Properties {...routerProps} />} />
            <Route exact path="/agents" component={Agents} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
