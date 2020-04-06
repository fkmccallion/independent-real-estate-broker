import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteAgent } from '../actions/agents';

class AgentDelete extends Component {

  state = {
    id: 0
  }

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.id !== "") {
      this.props.deleteAgent(this.state)
    }
    this.setState({
      id: 0
    });
    document.getElementById("adminDeleteForm").classList.add("admin-hide")
  }

  handleSelection = event => {
    if (event.target.value !== "")
    {
      document.getElementById("adminDeleteForm").classList.remove("admin-hide")
      let selectedAgent = this.props.agents.find(agent => agent.id === parseInt(event.target.value, 10))
      this.setState({
        id: selectedAgent.id
      })
    } else {
      this.setState({
        id: 0
      });
      document.getElementById("adminDeleteForm").classList.add("admin-hide")
    }
  }

  render() {

    return(
      <div>
        <h3>Delete Agent</h3>
        <label htmlFor="agentSelect">SELECT AGENT:</label>
        <select id="agentSelect" onChange={event => this.handleSelection(event)}>
          <option value="">Choose:</option>
          {this.props.agents.map(agent => <option key={agent.id} value={agent.id}>{agent.first_name + " " + agent.last_name}</option>)}
        </select>
        <div id="adminDeleteForm" className="admin-hide">
          <form onSubmit={event => this.handleSubmit(event)}>
            <input type="submit" />
          </form>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteAgent: agent_id => dispatch(deleteAgent(agent_id))
  };
};

export default connect(null, mapDispatchToProps)(AgentDelete);
