import React, { Component } from 'react';
import { connect } from 'react-redux';

import Agent from '../components/Agent';
import { fetchAgents } from '../actions/agents';

class Agents extends Component {

  componentDidMount() {
    console.log(this.props)
    this.props.fetchAgents()
  }

  render() {
    return (
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
