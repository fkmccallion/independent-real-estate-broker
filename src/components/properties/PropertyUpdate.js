import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateProperty } from '../../actions/properties';

class PropertyUpdate extends Component {

  state = {
    id: 0,
    address: "",
    city: "",
    state: "",
    zip: "",
    price: 0,
    sold: false,
    agent_id: 0,
    bed: 0,
    bath: 0,
    sqft: 0,
    transaction_date: "",
    client: ""
  }

  editExistingProperty = (event, property) => {
    event.preventDefault();
    this.setState({
      id: property.id,
      address: property.address ? property.address : "",
      city: property.city ? property.city : "",
      state: property.state ? property.state : "",
      zip: property.zip ? property.zip : "",
      price: property.price ? property.price : 0,
      sold: property.sold ? property.sold : false,
      agent_id: property.agent_id,
      bed: property.bed ? property.bed : 0,
      bath: property.bath ? property.bath : 0,
      sqft: property.sqft ? property.sqft : 0,
      transaction_date: property.transaction_date ? property.transaction_date : "",
      client: property.client ? property.client : ""
    });
    document.getElementById("adminUpdatePropertyUpdateForm").classList.remove("admin-hide")
  }

  handleUpdatePropertyChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handlePropertyUpdateSubmit = event => {
    event.preventDefault();
    this.props.updateProperty(this.state)
    this.setState({
      address: "",
      city: "",
      state: "",
      zip: "",
      price: 0,
      sold: false,
      agent_id: 0,
      bed: 0,
      bath: 0,
      sqft: 0,
      transaction_date: "",
      client: ""
    });
    document.getElementById("adminUpdatePropertyUpdateForm").classList.add("admin-hide")
  };

  render() {
    return(
      <div>
        <button onClick={event => this.editExistingProperty(event, this.props.property)}>Edit</button>
        <div id="adminUpdatePropertyUpdateForm" className="admin-hide">
          <form onSubmit={event => this.handlePropertyUpdateSubmit(event)}>
            <p>
              <label>
                Address:
                <input
                  name="address"
                  type="text"
                  onChange={event => this.handleUpdatePropertyChange(event)}
                  value={this.state.address}
                />
              </label>
            </p>
            <p>
              <label>
                City:
                <input
                  name="city"
                  type="text"
                  onChange={event => this.handleUpdatePropertyChange(event)}
                  value={this.state.city}
                />
              </label>
            </p>
            <p>
              <label>
                State:
                <input
                  name="state"
                  type="text"
                  onChange={event => this.handleUpdatePropertyChange(event)}
                  value={this.state.state}
                />
              </label>
            </p>
            <p>
              <label>
                Zip:
                <input
                  name="zip"
                  type="text"
                  onChange={event => this.handleUpdatePropertyChange(event)}
                  value={this.state.zip}
                />
              </label>
            </p>
            <p>
              <label>
                Price:
                <input
                  name="price"
                  type="text"
                  onChange={event => this.handleUpdatePropertyChange(event)}
                  value={this.state.price}
                />
              </label>
            </p>
            <p>
              <label>
                Sold?:
                <input
                  name="sold"
                  type="text"
                  onChange={event => this.handleUpdatePropertyChange(event)}
                  value={this.state.sold}
                />
              </label>
            </p>
            <p>
              <label>
                Number of Beds:
                <input
                  name="bed"
                  type="text"
                  onChange={event => this.handleUpdatePropertyChange(event)}
                  value={this.state.bed}
                />
              </label>
            </p>
            <p>
              <label>
                Number of Baths:
                <input
                  name="bed"
                  type="text"
                  onChange={event => this.handleUpdatePropertyChange(event)}
                  value={this.state.bath}
                />
              </label>
            </p>
            <p>
              <label>
                Square Footage:
                <input
                  name="sqft"
                  type="text"
                  onChange={event => this.handleUpdatePropertyChange(event)}
                  value={this.state.sqft}
                />
              </label>
            </p>
            <p>
              <label>
                Transaction Date:
                <input
                  name="transaction_date"
                  type="text"
                  onChange={event => this.handleUpdatePropertyChange(event)}
                  value={this.state.transaction_date}
                />
              </label>
            </p>
            <p>
              <label>
                Represented Buyer or Seller?:
                <input
                  name="client"
                  type="text"
                  onChange={event => this.handleUpdatePropertyChange(event)}
                  value={this.state.client}
                />
              </label>
            </p>
            <input type="submit" value="Submit Property Update" />
          </form>
        </div>
      </div>
    )
  }

}

const mapDispatchToProps = dispatch => {
  return {
    updateProperty: property => dispatch(updateProperty(property))
  };
};

export default connect(null, mapDispatchToProps)(PropertyUpdate);
