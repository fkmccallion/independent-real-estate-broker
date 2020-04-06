import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAgent } from '../actions/agents';
import { storage } from '../firebase';

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
      img_url: "",
      image: null
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  fileSelectedHandler = event => {
    this.setState({
      image: event.target.files[0]
    })
  }

  fileUploadHandler = event =>  {
    event.preventDefault();
    const image = this.state.image
    const uploadTask = storage.ref(`images/${image.name}`).put(image)
    uploadTask.on('state_changed',
      (snapshot) => {
        // progress function
      },
      (error) => {
        // error function
        console.log(error)
      },
      (complete) => {
        // complete function
        storage.ref('images').child(image.name).getDownloadURL().then(url => {
          this.setState({
            img_url: url
          })
        })
      });
  }

  handleSubmit = event => {
    this.props.addAgent(this.state)
    this.setState({
      first_name: "",
      last_name: "",
      biography: "",
      phone: "",
      email: "",
      bre_number: "",
      img_url: "",
      selectedFile: null
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
          <p>
            <label>
              Image:
              <input name="image" type="file" accept="image/*" onChange={this.fileSelectedHandler} />
              <button onClick={this.fileUploadHandler}>Upload</button>
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
