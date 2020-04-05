import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAgent } from '../actions/agents';
import axios from 'axios';

class AgentInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      biography: "",
      phone: "",
      email: "",
      bre_number: "",
      selectedFile: null
    };
  }

  handleChange = event => {
    if (event.target.files[0]) {
      this.setState({
      selectedFile: event.target.files[0]
    })
    } else {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
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

  fileUploadHandler = event => {
    event.preventDefault();
    const data = new FormData()
    data.append('file', this.state.selectedFile)
    console.log(data)
  }

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
          <p>
            <label>
              Image:
              <input name="img_url" type="file" onChange={event => this.handleChange(event)} />
              <button onClick={event => this.fileUploadHandler(event)}>Upload</button>
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
