import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAgent } from '../actions/agents';

class AgentInput extends Component {

  state = {
    first_name: "",
    last_name: "",
    biography: "",
    phone: "",
    email: "",
    bre_number: ""
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addAgent(this.state)
    this.setState({
      first_name: "",
      last_name: "",
      biography: "",
      phone: "",
      email: "",
      bre_number: ""
    });
  };

  render() {
    return(
      <div>
        <h3>Agent Input</h3>
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
    )
  }

}

const mapDispatchToProps = dispatch => {
  return {
    addAgent: agent => dispatch(addAgent(agent))
  };
};

export default connect(null, mapDispatchToProps)(AgentInput);
