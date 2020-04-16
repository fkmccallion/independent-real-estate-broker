import React from 'react'
import Agent from '../agents/Agent';

const Property = ({match, properties, agents, images, unhideNav, propertyArrayIndex}) => {

  // stateless component due to project requirements - update at a later date

  return (
    <div>
      <p>
        <button onClick={unhideNav}>Back</button>
      </p>
      <h2>{properties[propertyArrayIndex(match.params.propertyId)].address}</h2>
        <p className="properties-details">
          <b>{properties[propertyArrayIndex(match.params.propertyId)].city} {properties[propertyArrayIndex(match.params.propertyId)].state}</b><br />
          Bedrooms: {properties[propertyArrayIndex(match.params.propertyId)].bed}<br />
          Bathrooms: {properties[propertyArrayIndex(match.params.propertyId)].bath}<br />
          Living Area: {properties[propertyArrayIndex(match.params.propertyId)].sqft}<br />
          Price: {properties[propertyArrayIndex(match.params.propertyId)].price}<br />
        </p>
      <p>
        {images.filter(image => image.property_id === properties[propertyArrayIndex(match.params.propertyId)].id).map(image =>
          <img alt={image.title} src={image.img_url} width="50%" />
        )}
      </p>
      <Agent agent={agents.find(agent => agent.id === properties[propertyArrayIndex(match.params.propertyId)].agent_id)} />

    </div>
  )
}

export default Property
