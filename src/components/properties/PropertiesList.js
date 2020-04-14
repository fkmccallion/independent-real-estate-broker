import React from 'react'
import { Link } from 'react-router-dom';

class PropertiesList extends React.Component {

  propertyImage = (propertyId) => {
    const image = this.props.images.find(image => image.property_id === parseInt(propertyId, 10) + 1)
    return image ? image.img_url : "https://firebasestorage.googleapis.com/v0/b/independent-real-estate-broker.appspot.com/o/images%2Fadd-image.png?alt=media&token=9bff3966-8370-4214-8cdb-7f540cc65984"
  }

  render() {

    let renderProperties = Object.keys(this.props.properties).map(propertyId =>
      <Link key={parseInt(propertyId, 10) + 1} to={`/properties/${parseInt(propertyId, 10) + 1}`}>
        {console.log(this.propertyImage(parseInt(propertyId, 10) + 1))}
        <img src={this.propertyImage(propertyId)} />
        <div className="properties-address"><b>{this.props.properties[propertyId].address}</b></div>
        {this.props.properties[propertyId].city}, {this.props.properties[propertyId].state}<br />
        Bedrooms: {this.props.properties[propertyId].bed} -
        Bathrooms: {this.props.properties[propertyId].bath}<br />
        Price: {this.props.properties[propertyId].price}<br />
      </Link>
    )


    return (
      <div>
        {renderProperties}
      </div>
    )
  }
}

export default PropertiesList;
