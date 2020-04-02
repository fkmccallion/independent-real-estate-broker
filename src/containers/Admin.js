import React, { Component } from 'react';
import { connect } from 'react-redux';
import AgentInput from '../components/AgentInput';

class Admin extends Component {

  render() {
    return (
      <div>
        <AgentInput />
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    agents: state.agents
  };
};

export default connect(mapStateToProps)(Admin);
