import React, { Component } from 'react';

import '../calculator.css';

class Calculator extends Component {

  componentDidMount() {

  }

  render() {
    return(
      <div className="container">
        <div className="widget">
          <iframe className="frame" src="https://www.mortgagecalculator.net/embeddable/v2/?size=1&textColor=003140&backgroundColor=c78625" width="104%" frameborder="0" scrolling="false" height="500"></iframe>
        </div>
      </div>
    )
  }

}

export default Calculator;
