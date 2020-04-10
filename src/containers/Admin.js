import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAgents } from '../actions/agents';
import { fetchProperties } from '../actions/properties';
import { fetchImages } from '../actions/images';
import '../admin.css';

import AgentInput from '../components/agents/AgentInput';
import PropertyInput from '../components/properties/PropertyInput';
import ImageInput from '../components/images/ImageInput';
import AgentUpdate from '../components/agents/AgentUpdate';
import PropertyUpdate from '../components/properties/PropertyUpdate';
import AgentDelete from '../components/agents/AgentDelete';
import PropertyDelete from '../components/properties/PropertyDelete';
import ImageDelete from '../components/images/ImageDelete';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavbarAdmin from '../components/admin/NavbarAdmin'

class Admin extends Component {

    componentDidMount() {

      this.props.fetchAgents()
      this.props.fetchProperties()
      this.props.fetchImages()

    }

  render() {
    return (
      <div>
        <h1>Admin</h1>
        <Router>
          <NavbarAdmin />
          <Route exact path="/admin/agents/new" component={AgentInput} />
          <Route exact path="/admin/properties/new" render={(props) => <PropertyInput agents={this.props.agents} properties={this.props.properties} />} />
          <Route exact path="/admin/images/new" render={(props) => <ImageInput agents={this.props.agents} properties={this.props.properties} images={this.props.images} />} />
          <Route exact path="/admin/agents/update" render={(props) => <AgentUpdate agents={this.props.agents} properties={this.props.properties} />} />
          <Route exact path="/admin/properties/update" render={(props) => <PropertyUpdate agents={this.props.agents} properties={this.props.properties} />} />
          <Route exact path="/admin/agents/delete" render={(props) => <AgentDelete agents={this.props.agents} />} />
          <Route exact path="/admin/properties/delete" render={(props) => <PropertyDelete agents={this.props.agents} properties={this.props.properties} />} />
          <Route exact path="/admin/images/delete" render={(props) => <ImageDelete agents={this.props.agents} properties={this.props.properties} images={this.props.images} />} />
        </Router>

      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    agents: state.agents.agents,
    properties: state.properties.properties,
    images: state.images.images
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAgents: () => dispatch(fetchAgents()),
    fetchProperties: () => dispatch(fetchProperties()),
    fetchImages: () => dispatch(fetchImages())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
