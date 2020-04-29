import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel'

import { fetchProperties } from '../actions/properties';
import { fetchAgents } from '../actions/agents';
import { fetchImages } from '../actions/images';
import { fetchTestimonials } from '../actions/testimonials';

import AgentDetails from '../components/agents/AgentDetails';

import poppy from '../imgs/ca-poppy.jpeg'
import beachView from '../imgs/beach-view.jpeg'
import beachHouse from '../imgs/house-on-beach.jpeg'
import houseHill from '../imgs/house-on-hill.jpg'
import countryEntrance from '../imgs/country-home-entrance.jpeg'
import home from '../imgs/AdobeStock_322903458_Preview.jpeg'


// Bootstrap style
import Image from 'react-bootstrap/Image'

import '../home.css';


class Home extends Component {

  componentDidMount() {
    this.props.fetchProperties()
    this.props.fetchAgents()
    this.props.fetchImages()
    this.props.fetchTestimonials()
  }

  hideAllbutAgentInfo = () => {
    const nav = document.getElementById('home-carousel')
    const agentNav = document.getElementById('agent-nav')
    nav.classList.add('home-hide')
    agentNav.classList.add('home-hide')

    const redundantAgentInfo = document.getElementById('redundantAgentInfo')
    if (redundantAgentInfo) {redundantAgentInfo.classList.remove('properties-hide')}

    const redundantPropertyInfo = document.getElementById('redundantPropertyInfo')
    if (redundantPropertyInfo) {redundantPropertyInfo.classList.remove('properties-hide')}

    const propertiesDisplay = document.getElementById('properties-display')
    if (propertiesDisplay) {propertiesDisplay.classList.add('properties-hide')}

    const propertiesNav = document.getElementById('properties-nav')
    if (propertiesNav) {propertiesNav.classList.remove('properties-hide')}
  }

  render() {

    return (
      <div>
        <div id="home-carousel">
          <Carousel interval="5000" pause="false" indicators="false" wrap="false">
            <Carousel.Item>
              <img
                height="400"
                className="d-block w-100"
                src={poppy}
                alt="Ventana Poppies"
              />

            </Carousel.Item>
            <Carousel.Item>
              <img
                height="400"
                className="d-block w-100"
                src={beachView}
                alt="Ventana Beach House"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                height="400"
                className="d-block w-100"
                src={countryEntrance}
                alt="Country Home Entrance"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                height="400"
                className="d-block w-100"
                src={home}
                alt="Country Home Entrance"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                height="400"
                className="d-block w-100"
                src={houseHill}
                alt="Ventana House on Hill"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                height="400"
                className="d-block w-100"
                src={beachHouse}
                alt="Ventana Beach Front"
              />
            </Carousel.Item>
          </Carousel>

        <div className="home-agent-header">Meet The Team</div>
        </div>
        <Router>
          <span id="agent-nav">{this.props.agents.map(agent => <><Link to={`/agents/${agent.id}`} onClick={this.hideAllbutAgentInfo}><div className="home-images"><Image className="home-image-style" roundedCircle src={agent.img_url} /><span class="home-image-caption">{agent.first_name}</span></div></Link></>)}</span>
          <Switch>
            {this.props.agents.map(agent => <Route path={`/agents/${agent.id}`}><AgentDetails agent={agent} agents={this.props.agents} properties={this.props.properties} images={this.props.images} testimonials={this.props.testimonials} /></Route>)}
          </Switch>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)
