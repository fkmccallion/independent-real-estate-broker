import React, { Component } from 'react';

import Agent from '../agents/Agent';
import Testimonial from '../testimonials/Testimonial'


// Bootstrap style
import Image from 'react-bootstrap/Image'

class Property extends Component {


    componentDidMount() {
      this.props.hideNav()
    }

    // Add if statement to stall render until props are populated - empty array evalutates to true so adding .length works
    render() {
      if (!this.props.properties.length || !this.props.images.length || !this.props.agents.length || !this.props.testimonials.length) {
          return <div />
      }

      return (
        <div>
          <div className="properties-header properties-header-text">
            {this.props.properties[this.props.propertyArrayIndex(this.props.match.params.propertyId)].address}
          </div>
          <p className="properties-details">
            {this.props.properties[this.props.propertyArrayIndex(this.props.match.params.propertyId)].city} {this.props.properties[this.props.propertyArrayIndex(this.props.match.params.propertyId)].state}<br />
            Bedrooms: {this.props.properties[this.props.propertyArrayIndex(this.props.match.params.propertyId)].bed}&nbsp;&nbsp; |
            &nbsp;&nbsp;Bathrooms: {this.props.properties[this.props.propertyArrayIndex(this.props.match.params.propertyId)].bath}&nbsp;&nbsp; |
            &nbsp;&nbsp;Living Area: {this.props.properties[this.props.propertyArrayIndex(this.props.match.params.propertyId)].sqft} ft<sup>2</sup>&nbsp;&nbsp; |
            &nbsp;&nbsp;Price: ${this.props.properties[this.props.propertyArrayIndex(this.props.match.params.propertyId)].price}
          </p>
                    <div className="properties-description">{this.props.properties[this.props.propertyArrayIndex(this.props.match.params.propertyId)].description}</div>
          <p>
            {this.props.images.filter(image => image.property_id === this.props.properties[this.props.propertyArrayIndex(this.props.match.params.propertyId)].id).map(image =>
              <Image thumbnail alt={image.title} src={image.img_url} width="40%" />
            )}
          </p>
          <span className="properties-header-text">Agent Representing {this.props.properties[this.props.propertyArrayIndex(this.props.match.params.propertyId)].client}:</span>
          <Agent agent={this.props.agents.find(agent => agent.id === this.props.properties[this.props.propertyArrayIndex(this.props.match.params.propertyId)].agent_id)} />
          {this.props.testimonials.find(testimonial => testimonial.agent_id === this.props.properties[this.props.propertyArrayIndex(this.props.match.params.propertyId)].agent_id) ? <span className="properties-header-text">Agent Testimonial:</span> : null}
          {this.props.testimonials.filter(testimonial => testimonial.agent_id === this.props.properties[this.props.propertyArrayIndex(this.props.match.params.propertyId)].agent_id).map(testimonial =>
            <Testimonial testimonial={testimonial} />
          )}

        </div>
      )
    }

}

export default Property;
