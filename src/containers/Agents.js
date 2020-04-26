import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { fetchProperties } from '../actions/properties';
import { fetchAgents } from '../actions/agents';
import { fetchImages } from '../actions/images';
import { fetchTestimonials } from '../actions/testimonials';

import AgentsList from '../components/agents/AgentsList';
import AgentDetails from '../components/agents/AgentDetails';

import '../agents.css';



class Agents extends Component {

  componentDidMount() {
    this.props.fetchProperties()
    this.props.fetchAgents()
    this.props.fetchImages()
    this.props.fetchTestimonials()
  }

  agentArrayIndex = (agentId) => {
    for (var i = 0; i < this.props.agents.length; i++) { if (this.props.agents[i].id === parseInt(agentId, 10)) { return i; } }
  }

  hideNav = () => {
    const nav = document.getElementById('agents-nav')
    const display = document.getElementById('agents-display')
    nav.classList.add('agent-hide')
    display.classList.remove('agent-hide')
  }

  render() {

    return(
      <div>
        <Router>
          <div id="agents-nav">
            <AgentsList agents={this.props.agents} hideNav={this.hideNav} />
          </div>
          <div id="agents-display">
            <Route path={`${this.props.match.url}/:agentId`} render={routerProps => <AgentDetails {...routerProps} agents={this.props.agents} properties={this.props.properties} images={this.props.images} testimonials={this.props.testimonials} agentArrayIndex={this.agentArrayIndex} hideNav={this.hideNav} />}/>
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Agents);
