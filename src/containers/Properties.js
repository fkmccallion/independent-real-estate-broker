import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { fetchProperties } from '../actions/properties';
import { fetchAgents } from '../actions/agents';
import { fetchImages } from '../actions/images';
import Property from '../components/properties/Property';
import PropertiesList from '../components/properties/PropertiesList';

import '../properties.css';

class Properties extends Component {

  componentDidMount() {

    this.props.fetchProperties()
    this.props.fetchAgents()
    this.props.fetchImages()

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
          <div id="properties-display"><Route exact path={`${this.props.match.url}/:propertyId`} render={routerProps => <Property {...routerProps} properties={this.props.properties} agents={this.props.agents} images={this.props.images} unhideNav={this.unhideNav} />}/></div>
        </Router>
      </div>
    )

  }

}


const mapStateToProps = (state) => {
  return {
    properties: state.properties.properties,
    agents: state.agents.agents,
    images: state.images.images
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProperties: () => dispatch(fetchProperties()),
    fetchAgents: () => dispatch(fetchAgents()),
    fetchImages: () => dispatch(fetchImages())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Properties);
