import React from 'react'
import Agent from '../agents/Agent';

const Property = ({match, properties, agents, images, unhideNav}) => {

  // stateless component due to project requirements - update at a later date

  return (
    <div>
      <p>
        <button onClick={unhideNav}>Back</button>
      </p>
      <h2>{properties[match.params.propertyId - 1].address}</h2>
        <p className="properties-details">
          <b>{properties[match.params.propertyId - 1].city} {properties[match.params.propertyId - 1].state}</b><br />
          Bedrooms: {properties[match.params.propertyId - 1].bed}<br />
          Bathrooms: {properties[match.params.propertyId - 1].bath}<br />
          Living Area: {properties[match.params.propertyId - 1].sqft}<br />
          Price: {properties[match.params.propertyId - 1].price}<br />
        </p>
      <p>
        {images.filter(image => image.property_id === properties[match.params.propertyId - 1].id).map(image =>
          <img alt={image.title} src={image.img_url} width="600" />
        )}
      </p>


      <Agent agent={agents.find(agent => agent.id === properties[match.params.propertyId - 1].agent_id)} />

    </div>
  )
}

export default Property
