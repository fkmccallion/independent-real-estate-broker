import React from 'react'
import { Link } from 'react-router-dom';

class PropertiesList extends React.Component {

  propertyImage = (property) => {
    const image = this.props.images.find(image => image.property_id === property.id)
    return image ? image.img_url : "https://firebasestorage.googleapis.com/v0/b/independent-real-estate-broker.appspot.com/o/images%2Fadd-image.png?alt=media&token=9bff3966-8370-4214-8cdb-7f540cc65984"
  }

  reduceFunction = (availableProperties, soldProperties) => {
    console.log(soldProperties)
    console.log(availableProperties)
    console.log(soldProperties.concat(availableProperties))
    return soldProperties.concat(availableProperties)

  }

  render() {
    const renderSoldProperties = this.props.properties.filter(property => property.sold === true).map(property =>
      <div className="properties-spacing">
        <Link key={property.id} onClick={this.props.hideNav} to={`/properties/${property.id}`}>
          <div className="properties-overlay-container">
            <img alt={property.title} src={this.propertyImage(property)} width="400" height="300" />
            <span className="properties-overlay-text"><span>SOLD</span></span>
          </div>
          <span className="properties-address">{property.address}</span><br />
          <span className="properties-details">
            {property.city}, {property.state}<br />
            Bedrooms: {property.bed} -
            Bathrooms: {property.bath}<br />
            Price: {property.price}<br />
          </span>
        </Link>
      </div>
    )
    const renderAvailableProperties = this.props.properties.filter(property => property.sold === false).map(property =>
      <div className="properties-spacing">
        <Link key={property.id} onClick={this.props.hideNav} to={`/properties/${property.id}`}>
          <div>
            <img alt={property.title} src={this.propertyImage(property)} width="400" height="300" />
          </div>
          <span className="properties-address">{property.address}</span><br />
          <span className="properties-details">
            {property.city}, {property.state}<br />
            Bedrooms: {property.bed} -
            Bathrooms: {property.bath}<br />
            Price: {property.price}<br />
          </span>
        </Link>
      </div>
    )

    return (
      <div>

        {(renderAvailableProperties.length > 0) ? <div className="properties-header">Featured Properties</div> : <div className="properties-hide">Featured Properties</div>}
        {renderAvailableProperties}

        <div className="properties-header">Properties Sold</div>
        {renderSoldProperties}
      </div>
    )
  }
}

export default PropertiesList;
