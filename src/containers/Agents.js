import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchAgents } from '../actions/agents';

import Agent from '../components/agents/Agent';

import '../agents.css';

import Carousel from 'react-bootstrap/Carousel';


class Agents extends Component {

  componentDidMount() {
    this.props.fetchAgents()
  }

  render() {
    return(
      <div>
        {this.props.agents.map(agent => <Agent agent={agent} />)}
        <Carousel interval="100">
          <Carousel.Item>
            <img
              width="250px"
              className="d-block w-100"
              src="https://firebasestorage.googleapis.com/v0/b/independent-real-estate-broker.appspot.com/o/images%2Fsemper-fi.gif?alt=media&token=d7da8996-c21f-40c0-843d-c7e26a4a688e"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width="250"
              className="d-block w-100"
              src="https://firebasestorage.googleapis.com/v0/b/independent-real-estate-broker.appspot.com/o/images%2Fsemper-fi.gif?alt=media&token=d7da8996-c21f-40c0-843d-c7e26a4a688e"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="250"
              className="d-block w-100"
              src="https://firebasestorage.googleapis.com/v0/b/independent-real-estate-broker.appspot.com/o/images%2Fsemper-fi.gif?alt=media&token=d7da8996-c21f-40c0-843d-c7e26a4a688e"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    agents: state.agents.agents
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAgents: () => dispatch(fetchAgents())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Agents);
