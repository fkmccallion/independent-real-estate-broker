import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchProperties } from '../actions/properties';
import Property from '../components/properties/Property';

class Properties extends Component {

  componentDidMount() {

    this.props.fetchProperties()

  }


  render() {

    return (
      <div>
        <h1>Properties</h1>
        {this.props.properties.map(property => <Property key={property.id} property={property} />)}
      </div>
    )

  }

}


const mapStateToProps = (state) => {
  return {
    properties: state.properties.properties
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProperties: () => dispatch(fetchProperties())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Properties);
