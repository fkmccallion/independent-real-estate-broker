import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { fetchProperties } from '../actions/properties';
import { fetchAgents } from '../actions/agents';
import { fetchImages } from '../actions/images';
import { fetchTestimonials } from '../actions/testimonials';
import Property from '../components/properties/Property';
import PropertiesList from '../components/properties/PropertiesList';

import '../properties.css';
import '../testimonials.css';

class Properties extends Component {

  componentDidMount() {
    this.props.fetchProperties()
    this.props.fetchAgents()
    this.props.fetchImages()
    this.props.fetchTestimonials()

  }

  propertyArrayIndex = (propertyId) => {
    for (var i = 0; i < this.props.properties.length; i++) { if (this.props.properties[i].id === parseInt(propertyId, 10)) { return i; } }
  }

  hideNav = () => {
    const nav = document.getElementById('properties-nav')
    const display = document.getElementById('properties-display')
    nav.classList.add('properties-hide')
    display.classList.remove('properties-hide')
  }

  unhideNav = () => {
    const nav = document.getElementById('properties-nav')
    const display = document.getElementById('properties-display')
    nav.classList.remove('properties-hide')
    display.classList.add('properties-hide')
  }


  render() {

    return (
      <div>
        <Router>
          <div id="properties-nav"><PropertiesList properties={this.props.properties} images={this.props.images} hideNav={this.hideNav} /></div>
          <div id="properties-display"><Route exact path={`${this.props.match.url}/:propertyId`} render={routerProps => <Property {...routerProps} properties={this.props.properties} agents={this.props.agents} images={this.props.images} testimonials={this.props.testimonials} unhideNav={this.unhideNav} propertyArrayIndex={this.propertyArrayIndex} />}/></div>
        </Router>
      </div>
    )

  }

}


const mapStateToProps = (state) => {
  return {
    properties: state.properties.properties,
    agents: state.agents.agents,
    images: state.images.images,
    testimonials: state.testimonials.testimonials
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProperties: () => dispatch(fetchProperties()),
    fetchAgents: () => dispatch(fetchAgents()),
    fetchImages: () => dispatch(fetchImages()),
    fetchTestimonials: () => dispatch(fetchTestimonials())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Properties);
