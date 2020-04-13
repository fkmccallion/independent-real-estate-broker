import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchAgents } from '../actions/agents';

import Agent from '../components/agents/Agent';

import '../agents.css';



//import { BrowserRouter as Router, Route } from 'react-router-dom';
//import NavbarAgents from '../components/agents/NavbarAgents';
// <Router>
//   <NavbarAgents agents={this.props.agents} />
//   <Route exact path={`${this.props.match.url}/:agentId`} render={routerProps => <Agent {...routerProps} agents={this.props.agents} />}/>
// </Router>


class Agents extends Component {

  componentDidMount() {
    this.props.fetchAgents()
  }

  render() {
    return(
      <div>
        {this.props.agents.map(agent => <a href="#"><Agent agent={agent} /></a>)}
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
