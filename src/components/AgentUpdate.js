import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateAgent } from '../actions/agents';

class AgentUpdate extends Component {

  state = {
    id: 0,
    first_name: "",
    last_name: "",
    biography: "",
    phone: "",
    email: "",
    bre_number: ""
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.updateAgent(this.state)
    this.setState({
      id: 0,
      first_name: "",
      last_name: "",
      biography: "",
      phone: "",
      email: "",
      bre_number: ""
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSelection = event => {
    document.getElementById("adminUpdateForm").classList.remove("admin-hide")
    let selectedAgent = this.props.agents.find(agent => agent.id == event.target.value)
    this.setState({
      id: selectedAgent.id,
      first_name: selectedAgent.first_name,
      last_name: selectedAgent.last_name,
      biography: selectedAgent.biography,
      phone: selectedAgent.phone,
      email: selectedAgent.email,
      bre_number: selectedAgent.bre_number
    })
  }

  render() {

    return(
      <div>
        <h3>Agent Update</h3>
        <label for="agentSelect">SELECT AGENT:</label>
        <select id="agentSelect" onChange={event => this.handleSelection(event)}>

          {this.props.agents.map(agent => <option value={agent.id}>{agent.first_name + " " + agent.last_name}</option>)}
        </select>

        <div id="adminUpdateForm" className="admin-hide">
          <form onSubmit={event => this.handleSubmit(event)}>
            <p>
              <label>
                First Name:
                <input
                  name="first_name"
                  type="text"
                  onChange={event => this.handleChange(event)}
                  value={this.state.first_name}
                />
              </label>
            </p>
            <p>
              <label>
                Last Name:
                <input
                  name="last_name"
                  type="text"
                  onChange={event => this.handleChange(event)}
                  value={this.state.last_name}
                />
              </label>
            </p>
            <p>
              <label>
                Biography:
                <textarea
                  name="biography"
                  onChange={event => this.handleChange(event)}
                  value={this.state.biography}
                />
              </label>
            </p>
            <p>
              <label>
                Phone Number:
                <input
                  name="phone"
                  type="text"
                  onChange={event => this.handleChange(event)}
                  value={this.state.phone}
                />
              </label>
            </p>
            <p>
              <label>
                Email Address:
                <input
                  name="email"
                  type="text"
                  onChange={event => this.handleChange(event)}
                  value={this.state.email}
                />
              </label>
            </p>
            <p>
              <label>
                BRE Number:
                <input
                  name="bre_number"
                  type="text"
                  onChange={event => this.handleChange(event)}
                  value={this.state.bre_number}
                />
              </label>
            </p>
            <input type="submit" />
          </form>
        </div>

      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateAgent: agent => dispatch(updateAgent(agent)),
  };
};

export default connect(null, mapDispatchToProps)(AgentUpdate);
