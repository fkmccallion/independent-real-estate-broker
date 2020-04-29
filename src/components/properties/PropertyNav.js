import React from 'react';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'

const PropertyNav = nav => {

  return (
    <div className="properties-spacing">
      <div className="properties-overlay-container">
        <Image thumbnail alt={nav.property.title} src={nav.image} width="600"/>
        <span className="properties-overlay-text"><span>SOLD</span></span>
      </div>
      <span className="properties-header-text">{nav.property.address}</span><br />
      <span className="properties-details">
        {nav.property.city}, {nav.property.state}<br />
        Bedrooms: {nav.property.bed} -
        Bathrooms: {nav.property.bath}<br />
        Price: ${nav.property.price}
      </span>
    </div>
  )
  
}

export default PropertyNav
