export default (state = { properties: [], requesting: false}, action) => {

  const BASE_URL = "http://localhost:3000"
  const PROPERTIES_URL = `${BASE_URL}/properties`

  function addProperty() {
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        'address': action.property.address,
        'city': action.property.city,
        'state': action.property.state,
        'zip': action.property.zip,
        'price': action.property.price,
        'sold': action.property.sold,
        'agent_id': action.property.agent_id,
        'bed': action.property.bed,
        'bath': action.property.bath,
        'sqft': action.property.sqft,
        'transaction_date': action.property.transaction_date,
        'client': action.property.client
      })
    };
    fetch(PROPERTIES_URL, configObj);
  }

  function updateProperty() {
    let configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        'id': action.property.id,
        'address': action.property.address,
        'city': action.property.city,
        'state': action.property.state,
        'zip': action.property.zip,
        'price': action.property.price,
        'sold': action.property.sold,
        'agent_id': action.property.agent_id,
        'bed': action.property.bed,
        'bath': action.property.bath,
        'sqft': action.property.sqft,
        'transaction_date': action.property.transaction_date,
        'client': action.property.client
      })
    };
    fetch(PROPERTIES_URL + `/${action.property.id}`, configObj);
  }

  function deleteProperty() {
    let configObj = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        'id': action.property
      })
    };
    fetch(PROPERTIES_URL + `/${action.property}`, configObj);
  }

  switch (action.type) {
    case 'START_ADDING_PROPERTIES_REQUEST':
      return {
        ...state,
        properties: [...state.properties],
        requesting: true
      }
    case 'POPULATE_PROPERTIES':
      return {
        ...state,
        properties: action.properties,
        requesting: false
      }
    case 'ADD_PROPERTY':
      addProperty();
      return {
        ...state
      }
    case 'UPDATE_PROPERTY':
      updateProperty();
      return {
        ...state
      }
    case 'DELETE_PROPERTY':
      deleteProperty();
      return {
        ...state
      }
    default:
      return state;
  }

}
