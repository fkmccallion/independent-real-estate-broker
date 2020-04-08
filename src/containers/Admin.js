import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAgents } from '../actions/agents';
import { fetchProperties } from '../actions/properties';
import '../admin.css';

import AgentInput from '../components/admin/AgentInput';
import AgentUpdate from '../components/admin/AgentUpdate';
import AgentDelete from '../components/admin/AgentDelete';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavbarAdmin from '../components/admin/NavbarAdmin'

class Admin extends Component {

    componentDidMount() {

      this.props.fetchAgents()
      this.props.fetchProperties()

    }

  render() {
    return (
      <div>
        <h1>Admin</h1>
        <Router>
          <NavbarAdmin />
          <Route exact path="/admin/new" component={AgentInput} />
          <Route exact path="/admin/update" render={(props) => <AgentUpdate agents={this.props.agents} properties={this.props.properties} />} />
          <Route exact path="/admin/delete" render={(props) => <AgentDelete agents={this.props.agents} />} />
        </Router>

      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    agents: state.agents.agents,
    properties: state.properties.properties
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAgents: () => dispatch(fetchAgents()),
    fetchProperties: () => dispatch(fetchProperties())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
