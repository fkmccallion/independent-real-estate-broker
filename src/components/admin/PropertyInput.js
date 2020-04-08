import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProperty } from '../../actions/properties';
import { storage } from '../../firebase';

class PropertyInput extends Component {

  addNewProperty = (event, agentId) => {
    event.preventDefault();
    
  }

  render() {
    return(
      <div>
        <button onClick={event => this.addNewProperty(event, this.props.agentId)}>Add New Property</button>
        <div id="adminAddPropertyUpdateForm" className="admin-hide">
          test
        </div>
      </div>


    )
  }

}

const mapDispatchToProps = dispatch => {
  return {
    addProperty: property => dispatch(addProperty(property))
  };
};

export default connect(null, mapDispatchToProps)(PropertyInput);
