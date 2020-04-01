import React, { Component } from 'react';

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
        <form onSubmit={event => this.handleSubmit(event)}>
          <label>
            First Name:
            <input
              name="first_name"
              type="text"
              onChange={event => this.handleChange(event)}
              value={this.state.first_name}
            />
          </label>
          <label>
            Last Name:
            <input
              name="last_name"
              type="text"
              onChange={event => this.handleChange(event)}
              value={this.state.last_name}
            />
          </label>
          <label>
            Biography:
            <textarea
              name="biography"
              onChange={event => this.handleChange(event)}
              value={this.state.biography}
            />
          </label>
          <label>
            Phone Number:
            <input
              name="phone"
              type="text"
              onChange={event => this.handleChange(event)}
              value={this.state.phone}
            />
          </label>
          <label>
            Email Address:
            <input
              name="email"
              type="text"
              onChange={event => this.handleChange(event)}
              value={this.state.email}
            />
          </label>
          <label>
            BRE Number:
            <input
              name="bre_number"
              type="text"
              onChange={event => this.handleChange(event)}
              value={this.state.bre_number}
            />
          </label>
        </form>
      </div>
    )
  }

}
