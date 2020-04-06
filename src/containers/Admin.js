import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAgents } from '../actions/agents';
import '../admin.css';

import AgentInput from '../components/AgentInput';
import AgentUpdate from '../components/AgentUpdate';
import AgentDelete from '../components/AgentDelete';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavbarAdmin from '../components/NavbarAdmin'

class Admin extends Component {

    componentDidMount() {

      this.props.fetchAgents()

    }

  render() {
    return (
      <div>

        <h1>Admin</h1>
        <Router>
          <NavbarAdmin />
          <Route exact path="/admin/new" component={AgentInput} />
          <Route exact path="/admin/update" render={(props) => <AgentUpdate agents={this.props.agents} />} />
          <Route exact path="/admin/delete" render={(props) => <AgentDelete agents={this.props.agents} />} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
