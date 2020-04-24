import React, { Component } from 'react';

import Agent from '../agents/Agent';
import Testimonial from '../testimonials/Testimonial'


// Bootstrap style
import Image from 'react-bootstrap/Image'
//
// <div className="properties-header properties-header-text">{this.props.properties[this.props.match.params.propertyId].address}</div>
//   <p className="properties-details">
//     {this.props.properties[this.props.propertyArrayIndex(this.props.match.params.propertyId)].city} {this.props.properties[this.props.propertyArrayIndex(this.props.match.params.propertyId)].state}<br />
//     Bedrooms: {this.props.properties[this.props.propertyArrayIndex(this.props.match.params.propertyId)].bed}&nbsp;&nbsp; |
//     &nbsp;&nbsp;Bathrooms: {this.props.properties[this.props.propertyArrayIndex(this.props.match.params.propertyId)].bath}&nbsp;&nbsp; |
//     &nbsp;&nbsp;Living Area: {this.props.properties[this.props.propertyArrayIndex(this.props.match.params.propertyId)].sqft} ft<sup>2</sup>&nbsp;&nbsp; |
//     &nbsp;&nbsp;Price: ${this.props.properties[this.props.propertyArrayIndex(this.props.match.params.propertyId)].price}
//   </p>
// <p>
//   {this.props.images.filter(image => image.property_id === this.props.properties[this.props.propertyArrayIndex(this.props.match.params.propertyId)].id).map(image =>
//     <Image thumbnail alt={image.title} src={image.img_url} width="40%" />
//   )}
// </p>
// <div className="properties-description">{this.props.properties[this.props.propertyArrayIndex(this.props.match.params.propertyId)].description}</div>
// <span className="properties-header-text">Represented {this.props.properties[this.props.propertyArrayIndex(this.props.match.params.propertyId)].client}:</span>
// <Agent agent={this.props.agents.find(agent => agent.id === this.props.properties[this.props.propertyArrayIndex(this.props.match.params.propertyId)].agent_id)} />
// {this.props.testimonials.find(testimonial => testimonial.agent_id === this.props.properties[this.props.propertyArrayIndex(this.props.match.params.propertyId)].agent_id) ? <span className="properties-header-text">Agent Testimonial:</span> : null}
// {this.props.testimonials.filter(testimonial => testimonial.agent_id === this.props.properties[this.props.propertyArrayIndex(this.props.match.params.propertyId)].agent_id).map(testimonial =>
//   <Testimonial testimonial={testimonial} />
// )}

class Property extends Component {


    componentDidMount() {
      this.props.hideNav()
    }




    render() {


      return (
        <div>
          <div className="properties-header properties-header-text">
            {this.props.properties.map(property => (property.id === this.props.properties[this.props.propertyArrayIndex(this.props.match.params.propertyId)].id) ? property.address : null)}
          </div>
          <p className="properties-details">
            {this.props.properties.map(property => (property.id === this.props.properties[this.props.propertyArrayIndex(this.props.match.params.propertyId)].id) ? property.city : null)}&nbsp;
            {this.props.properties.map(property => (property.id === this.props.properties[this.props.propertyArrayIndex(this.props.match.params.propertyId)].id) ? property.state : null)}<br />
            Bedrooms: {this.props.properties.map(property => (property.id === this.props.properties[this.props.propertyArrayIndex(this.props.match.params.propertyId)].id) ? property.bed : null)}&nbsp;&nbsp; |
            &nbsp;&nbsp;Bathrooms: {this.props.properties.map(property => (property.id === this.props.properties[this.props.propertyArrayIndex(this.props.match.params.propertyId)].id) ? property.bath : null)}&nbsp;&nbsp; |
            &nbsp;&nbsp;Living Area: {this.props.properties.map(property => (property.id === this.props.properties[this.props.propertyArrayIndex(this.props.match.params.propertyId)].id) ? property.sqft : null)} ft<sup>2</sup>&nbsp;&nbsp; |
            &nbsp;&nbsp;Price: ${this.props.properties.map(property => (property.id === this.props.properties[this.props.propertyArrayIndex(this.props.match.params.propertyId)].id) ? property.price : null)}
          </p>
          <p>
            {this.props.images.filter(image => image.property_id === this.props.properties[this.props.propertyArrayIndex(this.props.match.params.propertyId)].id).map(image =>
              <Image thumbnail alt={image.title} src={image.img_url} width="40%" />
            )}
          </p>
          <div className="properties-description">{this.props.properties.map(property => (property.id === this.props.properties[this.props.propertyArrayIndex(this.props.match.params.propertyId)].id) ? property.description : null)}</div>
          {this.props.agents.filter(agent => agent.id === this.props.properties[this.props.propertyArrayIndex(this.props.match.params.propertyId)].agent_id).map(agent =>
            <Agent agent={agent} />
          )}
          {this.props.testimonials.find(testimonial => testimonial.agent_id === this.props.properties[this.props.propertyArrayIndex(this.props.match.params.propertyId)].agent_id) ? <span className="properties-header-text">Agent Testimonial:</span> : null}
          {this.props.testimonials.filter(testimonial => testimonial.agent_id === this.props.properties[this.props.propertyArrayIndex(this.props.match.params.propertyId)].agent_id).map(testimonial =>
            <Testimonial testimonial={testimonial} />
          )}

        </div>
      )
    }

}

export default Property;
