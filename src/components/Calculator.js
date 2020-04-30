import React, { Component } from 'react';

import '../calculator.css';

class Calculator extends Component {

  componentDidMount() {

  }

  render() {

    return(
      <div className="container">
        <div className="widget">
          <iframe src="https://www.mortgagecalculator.net/embeddable/v2/?size=1&textColor=003140&backgroundColor=ffead1" width="100%" frameborder="0" scrolling="no" height="330"></iframe>
        </div>
      </div>
    )
    
  }

}

export default Calculator;
