const BASE_URL = "http://localhost:3000"
const PROPERTIES_URL = `${BASE_URL}/properties`

export const addProperty = property => {

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      'address': property.address,
      'city': property.city,
      'state': property.state,
      'zip': property.zip,
      'price': property.price,
      'sold': property.sold,
      'agent_id': property.agent_id,
      'bed': property.bed,
      'bath': property.bath,
      'sqft': property.sqft,
      'transaction_date': property.transaction_date,
      'client': property.client
    })
  };

  return (dispatch) => {
    fetch(PROPERTIES_URL, configObj)
      .then(response => response.json())
      .then(properties => {
        dispatch({ type: 'ADD_PROPERTY', properties })
      });
  };

};

export const updateProperty = property => {

  let configObj = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      'id': property.id,
      'address': property.address,
      'city': property.city,
      'state': property.state,
      'zip': property.zip,
      'price': property.price,
      'sold': property.sold,
      'agent_id': property.agent_id,
      'bed': property.bed,
      'bath': property.bath,
      'sqft': property.sqft,
      'transaction_date': property.transaction_date,
      'client': property.client
    })

  }

  return (dispatch) => {
    fetch(PROPERTIES_URL + `/${property.id}`, configObj)
      .then(response => response.json())
      .then(property => {
        dispatch({ type: 'UPDATE_PROPERTY', property })
      });
  };

};

export const deleteProperty = property_id => {

  let configObj = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      'id': property_id
    })
  };

  return (dispatch) => {
    fetch(PROPERTIES_URL + `/${property_id}`, configObj)
      .then(response => response.json())
      .then(property => {
        dispatch({ type: 'DELETE_PROPERTY', property })
      });
  };

};

export function fetchProperties() {
  return (dispatch) => {
    fetch(PROPERTIES_URL)
      .then(response => response.json())
      .then(properties => {
          dispatch({ type: 'POPULATE_PROPERTIES', properties })
        });
  };
}
