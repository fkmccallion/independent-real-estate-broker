import React from 'react'
import { Link } from 'react-router-dom';

// Bootstrap style
import Image from 'react-bootstrap/Image'

class PropertiesList extends React.Component {

  propertyImage = (property) => {
    const image = this.props.images.find(image => image.property_id === property.id)
    return image ? image.img_url : "https://firebasestorage.googleapis.com/v0/b/independent-real-estate-broker.appspot.com/o/images%2Fadd-image.png?alt=media&token=9bff3966-8370-4214-8cdb-7f540cc65984"
  }


  render() {
    // filter sold properties then sort by transaction date
    const renderSoldProperties = this.props.properties.filter(property => property.sold === true).sort((b,a) => (a.transaction_date > b.transaction_date) ? 1 : ((b.transaction_date > a.transaction_date) ? -1 : 0)).map(property =>
      <div key={property.id} className="properties-spacing">
        <Link key={property.id} onClick={this.props.hideNav} to={`/properties/${property.id}`}>
          <div className="properties-overlay-container">
            <Image thumbnail alt={property.title} src={this.propertyImage(property)} width="600"/>
            <span className="properties-overlay-text"><span>SOLD</span></span>
          </div>
          <span className="properties-header-text">{property.address}</span><br />
          <span className="properties-details">
            {property.city}, {property.state}<br />
            Bedrooms: {property.bed} -
            Bathrooms: {property.bath}<br />
            Price: ${property.price}
          </span>
        </Link>
      </div>
    )
    const renderAvailableProperties = this.props.properties.filter(property => property.sold === false).map(property =>
      <div key={property.id} className="properties-spacing">
        <Link key={property.id} onClick={this.props.hideNav} to={`/properties/${property.id}`}>
          <div>
            <Image thumbnail alt={property.title} src={this.propertyImage(property)} width="400" height="300" />
          </div>
          <span className="properties-header-text">{property.address}</span><br />
          <span className="properties-details">
            {property.city}, {property.state}<br />
            Bedrooms: {property.bed} -
            Bathrooms: {property.bath}<br />
            Price: ${property.price}<br />
          </span>
        </Link>
      </div>
    )

    return (
      <div>
        {(renderAvailableProperties.length > 0) ? <div className="properties-header properties-header-text">Featured Properties</div> : <div className="properties-hide">Featured Properties</div>}
        {renderAvailableProperties}

        <div className="properties-header properties-header-text">Properties Sold</div>
        {renderSoldProperties}
      </div>
    )
  }
}

export default PropertiesList;
