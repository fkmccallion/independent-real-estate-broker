import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { fetchAgents } from '../actions/agents';

import Agent from '../components/agents/Agent';
import NavbarAgents from '../components/agents/NavbarAgents';

import '../agents.css';

class Agents extends Component {

  componentDidMount() {
    this.props.fetchAgents()
  }

  render() {
    return(
      <div>
        <Router>
          <NavbarAgents agents={this.props.agents} />
          <Route exact path={`${this.props.match.url}/:agentId`} render={routerProps => <Agent {...routerProps} agents={this.props.agents} />}/>
        </Router>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    agents: state.agents.agents
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAgents: () => dispatch(fetchAgents())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Agents);
