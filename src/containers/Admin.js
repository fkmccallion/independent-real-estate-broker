import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAgents } from '../actions/agents';
import { fetchProperties } from '../actions/properties';
import { fetchImages } from '../actions/images';
import { fetchTestimonials } from '../actions/testimonials';
import '../admin.css';

import AgentInput from '../components/admin/AgentInput';
import PropertyInput from '../components/admin/PropertyInput';
import ImageInput from '../components/admin/ImageInput';
import AgentUpdate from '../components/admin/AgentUpdate';
import PropertyUpdate from '../components/admin/PropertyUpdate';
import AgentDelete from '../components/admin/AgentDelete';
import PropertyDelete from '../components/admin/PropertyDelete';
import ImageDelete from '../components/admin/ImageDelete';
import TestimonialInput from '../components/admin/TestimonialInput';
import TestimonialDelete from '../components/admin/TestimonialDelete';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavbarAdmin from '../components/admin/NavbarAdmin'

class Admin extends Component {

    componentDidMount() {

      this.props.fetchAgents()
      this.props.fetchProperties()
      this.props.fetchImages()
      this.props.fetchTestimonials()

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
          <Route exact path="/admin/properties/delete" render={(props) => <PropertyDelete agents={this.props.agents} properties={this.props.properties} images={this.props.images} />} />
          <Route exact path="/admin/images/delete" render={(props) => <ImageDelete agents={this.props.agents} properties={this.props.properties} images={this.props.images} />} />
          <Route exact path="/admin/testimonials/new" render={(props) => <TestimonialInput agents={this.props.agents} testimonials={this.props.testimonials} />} />
          <Route exact path="/admin/testimonials/delete" render={(props) => <TestimonialDelete agents={this.props.agents}  testimonials={this.props.testimonials} />} />
        </Router>

      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    agents: state.agents.agents,
    properties: state.properties.properties,
    images: state.images.images,
    testimonials: state.testimonials.testimonials
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAgents: () => dispatch(fetchAgents()),
    fetchProperties: () => dispatch(fetchProperties()),
    fetchImages: () => dispatch(fetchImages()),
    fetchTestimonials: () => dispatch(fetchTestimonials())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
