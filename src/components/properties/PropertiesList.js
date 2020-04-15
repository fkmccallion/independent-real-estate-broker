import React from 'react'
import { Link } from 'react-router-dom';

class PropertiesList extends React.Component {

  propertyImage = (propertyId) => {
    const image = this.props.images.find(image => image.property_id === parseInt(propertyId, 10) + 1)
    return image ? image.img_url : "https://firebasestorage.googleapis.com/v0/b/independent-real-estate-broker.appspot.com/o/images%2Fadd-image.png?alt=media&token=9bff3966-8370-4214-8cdb-7f540cc65984"
  }

  render() {
    const renderSoldProperties = Object.keys(this.props.properties.filter(property => property.sold === true)).map(propertyId =>
      <p>
        <Link key={parseInt(propertyId, 10) + 1} onClick={this.props.hideNav} to={`/properties/${parseInt(propertyId, 10) + 1}`}>
          <img alt={this.props.properties[propertyId].title} src={this.propertyImage(propertyId)} width="400" height="300" /><br />
          <span className="properties-address"><b>{this.props.properties[propertyId].address}</b></span><br />
          {this.props.properties[propertyId].city}, {this.props.properties[propertyId].state}<br />
          Bedrooms: {this.props.properties[propertyId].bed} -
          Bathrooms: {this.props.properties[propertyId].bath}<br />
          Price: {this.props.properties[propertyId].price}<br />
        </Link>
      </p>
    )
    const renderAvailableProperties = this.props.properties.filter(property => property.sold === false).map(property =>
      <p>
        <Link key={property.id} onClick={this.props.hideNav} to={`/properties/${property.id}`}>
          <img alt={property.title} src={this.propertyImage(property.id)} width="400" height="300" /><br />
          <span className="properties-address"><b>{property.address}</b></span><br />
          {property.city}, {property.state}<br />
          Bedrooms: {property.bed} -
          Bathrooms: {property.bath}<br />
          Price: {property.price}<br />
        </Link>
      </p>
    )

    return (
      <div>
        {(renderAvailableProperties.length > 0) ? <div className="properties-header">New Listing</div> : <div className="properties-hide">New Listing</div>}
        {renderAvailableProperties}

        <div className="properties-header">Properties Sold</div>
        {renderSoldProperties}
      </div>
    )
  }
}

export default PropertiesList;
