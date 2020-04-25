import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './containers/Home'
import Admin from './containers/Admin';
import Agents from './containers/Agents';
import Properties from './containers/Properties';
import Calculator from './components/Calculator';

import logo from './imgs/logo-medium.gif'

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="app-header">
          <div className="app-header-facebook">
            <a id="fb-page" href="https://www.facebook.com/ventanaproperties.net/" target="_blank" class="fa fa-facebook-square fa-3x"></a>
            <div id="fb-like" class="fb-like" data-href="https://www.facebook.com/ventanaproperties.net/" data-width="" data-layout="box_count" data-action="like" data-size="small"></div>
          </div>

          <img id="app-logo" src={logo} alt="logo" height="125px" />
          <div className="app-header-phone">805 910-9049</div>
        </div>
      </div>

      <div>
        <Router>
          <div className="app-navbar-header"><div className="app-header"><Navbar /></div></div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/admin" component={Admin} />
            <Route path="/properties" render={routerProps => <Properties {...routerProps} />} />
            <Route exact path="/agents" component={Agents} />
            <Route exact path="/calculator" component={Calculator} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
