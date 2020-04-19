import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'

import poppy from '../imgs/ca-poppy.jpg'
import house1 from '../imgs/house-on-hill.jpg'
import house2 from '../imgs/front-yard.jpg'


class Home extends Component {

  render() {

    return (
      <div>
        <Carousel interval="5000" pause="false">
          <Carousel.Item>
            <img
              height="500"
              className="d-block w-100"
              src={poppy}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Ventana Properties</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              height="500"
              className="d-block w-100"
              src={house1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              height="500"
              className="d-block w-100"
              src={house2}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>


      </div>
    )

  }

}

export default Home
