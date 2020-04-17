import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchTestimonials } from '../actions/testimonials';
import Testimonial from '../components/testimonials/Testimonial';

import '../testimonials.css';

class Testimonials extends Component {

  componentDidMount() {
    this.props.fetchTestimonials()
  }

  render() {

    return (
      <div>
        {this.props.testimonials.map(testimonial => <Testimonial testimonial={testimonial} />)}
      </div>
    )

}

const mapStateToProps = (state) => {
  return {
    testimonials: state.testimonials.testimonials
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTestimonials: () => dispatch(fetchTestimonials())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Testimonials);
