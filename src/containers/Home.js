import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'

import poppy from '../imgs/ca-poppy.jpeg'
import beachView from '../imgs/beach-view.jpeg'
import beachHouse from '../imgs/house-on-beach.jpeg'
import houseHill from '../imgs/house-on-hill.jpg'

import '../home.css';


class Home extends Component {

  render() {

    return (
      <div>
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


      </div>
    )

  }

}

export default Home
