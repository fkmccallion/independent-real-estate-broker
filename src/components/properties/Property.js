import React from 'react'

const Property = props => {

  return (
    <div>
      <p>
        <b>{props.property.address}</b><br />
        {`${props.property.city}, ${props.property.state} ${props.property.zip}`}<br />
        {props.property.transaction_date ? props.property.transaction_date : null }<br />
      </p>
    </div>
  )
}

export default Property
