import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteImage } from '../../actions/images';

class ImageDelete extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      img_url: "",
      property_id: 0,
      image: null,
      address: "",
      properties: [],
      images: []
    };
  }

  handleAgentSelection = event => {
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

  handleDeleteImage = (event, image) => {
    this.props.deleteImage(image.id)
  }

  render() {
    return(
      <div>
        <h3>Delete Property Image</h3>
        <select id="agentSelect" onChange={event => this.handleAgentSelection(event)}>
          <option value="">Select Agent:</option>
          {this.props.agents.map(agent => <option key={agent.id} value={agent.id}>{agent.first_name + " " + agent.last_name}</option>)}
        </select>
        <br /><br />
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
          </form>
        </div>
        {this.state.properties.map(property =>
          <p>
            {property.address} Images:<br />
          {this.props.images.filter(image => image.property_id === property.id).map(image => <p><img src={image.img_url} alt={image.title} className="admin-thumbnail" /><br /><br /><button onClick={event => this.handleDeleteImage(event, image)}>Commit Delete</button><hr width="300" /></p>)}

          </p>
        )}
      </div>
    )
  }

}

const mapDispatchToProps = dispatch => {
  return {
    deleteImage: image => dispatch(deleteImage(image))
  };
};

export default connect(null, mapDispatchToProps)(ImageDelete);
