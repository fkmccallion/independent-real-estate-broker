import React, { Component } from 'react';
import { connect } from 'react-redux';
import AgentInput from '../components/AgentInput';
import AgentUpdate from '../components/AgentUpdate';
import { fetchAgents } from '../actions/agents';
import '../admin.css';

class Admin extends Component {

    componentDidMount() {

      this.props.fetchAgents()

    }

  render() {
    return (
      <div>
        <h1>Admin</h1>
        <AgentInput />
        <AgentUpdate agents={this.props.agents} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
