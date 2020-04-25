import React, { Component } from 'react';
import { connect } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel'

import { fetchAgents } from '../actions/agents';

import poppy from '../imgs/ca-poppy.jpeg'
import beachView from '../imgs/beach-view.jpeg'
import beachHouse from '../imgs/house-on-beach.jpeg'
import houseHill from '../imgs/house-on-hill.jpg'

// Bootstrap style
import Image from 'react-bootstrap/Image'

import '../home.css';


class Home extends Component {

  componentDidMount() {
    this.props.fetchAgents()
  }

  render() {

    return (
      <div className="home-container">

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

        {this.props.agents.map(agent => <Image roundedCircle src={agent.img_url} />)}

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

export default connect(mapStateToProps, mapDispatchToProps)(Home)
