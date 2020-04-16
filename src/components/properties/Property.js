import React from 'react'
import Agent from '../agents/Agent';

const Property = ({match, properties, agents, images, unhideNav, propertyArrayIndex}) => {

  // stateless component due to project requirements

  return (
    <div>
      <div className="properties-header properties-header-text">{properties[propertyArrayIndex(match.params.propertyId)].address}</div>
        <p className="properties-details">
          {properties[propertyArrayIndex(match.params.propertyId)].city} {properties[propertyArrayIndex(match.params.propertyId)].state}<br />
          Bedrooms: {properties[propertyArrayIndex(match.params.propertyId)].bed}&nbsp;&nbsp; |
          &nbsp;&nbsp;Bathrooms: {properties[propertyArrayIndex(match.params.propertyId)].bath}&nbsp;&nbsp; |
          &nbsp;&nbsp;Living Area: {properties[propertyArrayIndex(match.params.propertyId)].sqft} ft<sup>2</sup>&nbsp;&nbsp; |
          &nbsp;&nbsp;Price: ${properties[propertyArrayIndex(match.params.propertyId)].price}
        </p>
      <p>
        {images.filter(image => image.property_id === properties[propertyArrayIndex(match.params.propertyId)].id).map(image =>
          <img alt={image.title} src={image.img_url} width="40%" />
        )}
      </p>
      <div className="properties-description">{properties[propertyArrayIndex(match.params.propertyId)].description}</div>
      <span className="properties-header-text">Listing Agent Representing {properties[propertyArrayIndex(match.params.propertyId)].client}:</span>
      <Agent agent={agents.find(agent => agent.id === properties[propertyArrayIndex(match.params.propertyId)].agent_id)} />

    </div>
  )
}

export default Property
