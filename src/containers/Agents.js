import React, { Component } from 'react';
import { connect } from 'react-redux';

class Agents extends Component {

  render() {
    return (
      <div>{console.log(this.state)}test</div>
    )
  }

}

export default connect()(Agents);
