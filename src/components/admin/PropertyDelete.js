import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteProperty } from '../../actions/properties';
import { deleteImage } from '../../actions/images';

class PropertyDelete extends Component {

  state = {
    agent_id: 0,
    selected_property: {},
    properties: []
  }

  handleSelection = event => {
    if (event.target.value !== "")
    {
      document.getElementById("adminPropertyDisplay").classList.remove("admin-hide")
      document.getElementById("submitPane").classList.add("admin-hide")
      let selectedAgent = this.props.agents.find(agent => agent.id === parseInt(event.target.value, 10))
      let selectedAgentProperties = this.props.properties.filter(property => property.agent_id === selectedAgent.id)
      this.setState({
        agent_id: selectedAgent.id,
        properties: selectedAgentProperties
      })
    } else {
      this.setState({
        agent_id: 0
      });
      document.getElementById("adminDeleteForm").classList.add("admin-hide")
    }
  }

  confirmSubmitPane = (event, property) => {
    document.getElementById("submitPane").classList.remove("admin-hide")
    this.setState({
      selected_property: property
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.selected_property !== {}) {
      let images = this.props.images.filter(image => image.property_id === this.state.selected_property.id)
      images.map(image => this.props.deleteImage(image.id))
      this.props.deleteProperty(this.state.selected_property.id)
    }
    this.setState({
      agent_id: 0,
      selected_property: {},
      properties: []
    });
    document.getElementById("submitPane").classList.add("admin-hide")
    document.getElementById("adminPropertyDisplay").classList.add("admin-hide")
  }

  render() {

    return(
      <div>
        <h3>Delete Property</h3>
        <select id="agentSelect" onChange={event => this.handleSelection(event)}>
          <option value="">Choose:</option>
          {this.props.agents.map(agent => <option key={agent.id} value={agent.id}>{agent.first_name + " " + agent.last_name}</option>)}
        </select>
        <div id="submitPane" className="admin-hide">
          <h4>Selected Property: {this.state.selected_property.address}</h4>
          <form onSubmit={event => this.handleSubmit(event)}>
            <input type="submit" value="Confirm Delete" />
          </form>
        </div>
        <div id="adminPropertyDisplay" className="admin-hide">
          {this.state.properties.map(property => <p>{property.address}<br /><button onClick={event => this.confirmSubmitPane(event, property)}>delete</button></p>)}
        </div>

      </div>
    )

  }

}

const mapDispatchToProps = dispatch => {
  return {
    deleteProperty: property_id => dispatch(deleteProperty(property_id)),
    deleteImage: image_id => dispatch(deleteImage(image_id))
  };
};

export default connect(null, mapDispatchToProps)(PropertyDelete);
