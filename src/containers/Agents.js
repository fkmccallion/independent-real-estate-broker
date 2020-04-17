import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchAgents } from '../actions/agents';

import Agent from '../components/agents/Agent';

import '../agents.css';


class Agents extends Component {

  componentDidMount() {
    this.props.fetchAgents()
  }

  render() {
    return(
      <div>
        {this.props.agents.map(agent => <Agent agent={agent} />)}
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
