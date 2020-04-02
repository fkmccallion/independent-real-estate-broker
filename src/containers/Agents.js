import React, { Component } from 'react';
import { connect } from 'react-redux';

import Agent from '../components/Agent';

class Agents extends Component {

  render() {
    return (
      <div>
        {this.props.agents.map(agent => <Agent agent={agent})}
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    agents: state.agents
  };
};

export default connect(mapStateToProps)(Agents);
