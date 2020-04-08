import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

import Agent from '../components/Agent';
import AgentShow from '../components/AgentShow';
import { fetchAgents } from '../actions/agents';

import '../agents.css';


class Agents extends Component {

  componentDidMount() {
    this.props.fetchAgents()
  }

  render() {
    const renderAgents = Object.keys(this.props.agents).map(agentID =>
      <Link key={agentID} to={`/agents/${agentID}`}><Agent key={this.props.agents[agentID]} agent={this.props.agents[agentID]} /></Link>
    );

    return (
      <div>
        <h1>Agents</h1>
        {renderAgents}
        {console.log(`${this.props.match.url}/:agentID`)}
        <Route exact path={`${this.props.match.url}/:agentID`} render={routerProps => <AgentShow {...routerProps} agents={this.props.agents} />}/>

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
