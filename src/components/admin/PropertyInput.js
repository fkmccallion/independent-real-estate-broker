import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProperty } from '../../actions/properties';

class PropertyInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
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
  }

  addNewProperty = (event, agentId) => {
    event.preventDefault();
    document.getElementById("adminAddPropertyUpdateForm").classList.remove("admin-hide");
    this.setState({
      agent_id: this.props.agentId
    })
  }

  handlePropertyChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handlePropertySubmit = event => {
    event.preventDefault();
    this.props.addProperty(this.state)
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
    document.getElementById("adminAddPropertyUpdateForm").classList.add("admin-hide")
  };

  handleSelection = event => {
    if (event.target.value !== "")
    {
      document.getElementById("adminAddPropertyUpdateForm").classList.remove("admin-hide")
      let selectedAgent = this.props.agents.find(agent => agent.id === parseInt(event.target.value, 10))
      this.setState({
        agent_id: selectedAgent.id
      })
    } else {
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
      document.getElementById("adminAddPropertyUpdateForm").classList.add("admin-hide")
    }
  }

  render() {
    return(
      <div>
        <h3>Add Property</h3>
        <select id="agentSelect" onChange={event => this.handleSelection(event)}>
          <option value="">Select Agent:</option>
          {this.props.agents.map(agent => <option key={agent.id} value={agent.id}>{agent.first_name + " " + agent.last_name}</option>)}
        </select>
        <div id="adminAddPropertyUpdateForm" className="admin-hide">
          <form onSubmit={event => this.handlePropertySubmit(event)}>
            <p>
              <label>
                Address:
                <input
                  name="address"
                  type="text"
                  onChange={event => this.handlePropertyChange(event)}
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
                  onChange={event => this.handlePropertyChange(event)}
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
                  onChange={event => this.handlePropertyChange(event)}
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
                  onChange={event => this.handlePropertyChange(event)}
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
                  onChange={event => this.handlePropertyChange(event)}
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
                  onChange={event => this.handlePropertyChange(event)}
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
                  onChange={event => this.handlePropertyChange(event)}
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
                  onChange={event => this.handlePropertyChange(event)}
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
                  onChange={event => this.handlePropertyChange(event)}
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
                  onChange={event => this.handlePropertyChange(event)}
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
                  onChange={event => this.handlePropertyChange(event)}
                  value={this.state.client}
                />
              </label>
            </p>
            <input type="submit" value="Submit New Property" />
          </form>
        </div>
      </div>

    )
  }

}

const mapDispatchToProps = dispatch => {
  return {
    addProperty: property => dispatch(addProperty(property))
  };
};

export default connect(null, mapDispatchToProps)(PropertyInput);
