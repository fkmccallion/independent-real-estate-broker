import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './containers/Home'
import Admin from './containers/Admin';
import Agents from './containers/Agents';
import Properties from './containers/Properties';

function App() {
  return (
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
  );
}

export default App;
