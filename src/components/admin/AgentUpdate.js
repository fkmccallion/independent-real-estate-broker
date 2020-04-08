import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateAgent } from '../../actions/agents';
import { storage } from '../../firebase';

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
    if (this.state.id !== "") {
      this.props.updateAgent(this.state)
    }
    this.setState({
      id: 0,
      first_name: "",
      last_name: "",
      biography: "",
      phone: "",
      email: "",
      bre_number: "",
      img_url: ""
    });
    document.getElementById("adminUpdateForm").classList.add("admin-hide")
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSelection = event => {
    if (event.target.value !== "")
    {
      document.getElementById("adminUpdateForm").classList.remove("admin-hide")
      let selectedAgent = this.props.agents.find(agent => agent.id === parseInt(event.target.value, 10))
      this.setState({
        id: selectedAgent.id,
        first_name: selectedAgent.first_name,
        last_name: selectedAgent.last_name,
        biography: selectedAgent.biography,
        phone: selectedAgent.phone,
        email: selectedAgent.email,
        bre_number: selectedAgent.bre_number,
        img_url: selectedAgent.img_url
      })
    } else {
      this.setState({
        id: 0,
        first_name: "",
        last_name: "",
        biography: "",
        phone: "",
        email: "",
        bre_number: "",
        img_url: ""
      });
      document.getElementById("adminUpdateForm").classList.add("admin-hide")
    }
  }

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

  render() {

    return(
      <div>
        <h3>Update Agent</h3>
        <select id="agentSelect" onChange={event => this.handleSelection(event)}>
          <option value="">Choose:</option>
          {this.props.agents.map(agent => <option key={agent.id} value={agent.id}>{agent.first_name + " " + agent.last_name}</option>)}
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
            <p>
              <label>
                Update Photo:
                <input name="image" type="file" accept="image/*" onChange={this.fileSelectedHandler} />
                <button onClick={this.fileUploadHandler}>Upload</button>
              </label>
            </p>
            <input type="submit" />
          </form>
          <h4>Current Photo</h4>
          <img className="agent-image" src={ this.state.img_url ?  this.state.img_url : "https://firebasestorage.googleapis.com/v0/b/independent-real-estate-broker.appspot.com/o/images%2Fsemper-fi.gif?alt=media&token=d7da8996-c21f-40c0-843d-c7e26a4a688e" } alt="" />
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
