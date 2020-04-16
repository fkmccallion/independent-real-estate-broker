import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { fetchTestimonials } from '../actions/testimonials';
import Testimonial from '../components/testimonials/Testimonial';

class Testimonials extends Component {

  componentDidMount() {
    this.props.fetchTestimonials()
  }

  render() {

    return (
      <div>
        <Testimonials testimonials={this.props.testimonials} />
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
