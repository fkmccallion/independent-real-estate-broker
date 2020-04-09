import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addImage } from '../../actions/images';
import { storage } from '../../firebase';

class ImageInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      img_url: "",
      property_id: 0,
      image: null,
      address: "",
      properties: []
    };
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

  handlePropertyImageChange = event => {
    console.log(this.props)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleImageSubmit = event => {
    event.preventDefault();
    this.props.addImage(this.state)
    document.getElementById("adminAddPropertyImageForm").classList.add("admin-hide");
    console.log(this.state)
    this.setState({
      title: "",
      img_url: "",
      property_id: "",
      image: null
    });
  };

  handleSelection = event => {
    document.getElementById("adminAddPropertyImageForm").classList.add("admin-hide")
    if (event.target.value !== "")
    {
      let selectedAgent = this.props.agents.find(agent => agent.id === parseInt(event.target.value, 10))
      let selectedAgentProperties = this.props.properties.filter(property => property.agent_id === selectedAgent.id)
      this.setState({
        properties: selectedAgentProperties
      })

    } else {
      this.setState({
        title: "",
        img_url: "",
        property_id: 0,
        image: null,
        properties: []
      });
    }
  }

  handleAddImage = (event, property) => {
    event.preventDefault();
    document.getElementById("adminAddPropertyImageForm").classList.remove("admin-hide")
    this.setState({
      property_id: property.id,
      address: property.address
    })
  }

  render() {
    return(
      <div>
        <h3>Add Property Image</h3>
        <select id="agentSelect" onChange={event => this.handleSelection(event)}>
          <option value="">Select Agent:</option>
          {this.props.agents.map(agent => <option key={agent.id} value={agent.id}>{agent.first_name + " " + agent.last_name}</option>)}
        </select>
        <div id="adminAddPropertyImageForm" className="admin-hide">
          <h4>Selected Property: {this.state.address}</h4>
          <form onSubmit={event => this.handleImageSubmit(event)}>
            <p>
              <label>
                Image Title:
                <input
                  name="title"
                  type="text"
                  onChange={event => this.handlePropertyImageChange(event)}
                  value={this.state.title}
                />
              </label>
            </p>
            <p>
              <label>
                Add Picture:
                <input name="image" type="file" accept="image/*" onChange={this.fileSelectedHandler} />
                <button onClick={this.fileUploadHandler}>Upload</button>
              </label>
            </p>
            <input type="submit" value="Submit Property Image" />
          </form>
        </div>
        {this.state.properties.map(property => <p>{property.address}<button onClick={event => this.handleAddImage(event, property)}>Add Image</button></p>)}
      </div>
    )
  }

}

const mapDispatchToProps = dispatch => {
  return {
    addImage: image => dispatch(addImage(image))
  };
};

export default connect(null, mapDispatchToProps)(ImageInput);
