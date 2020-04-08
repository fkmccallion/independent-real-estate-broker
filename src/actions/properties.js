export const addProperty = property => {
  return {
    type: 'ADD_PROPERTY',
    property
  };
};

export const deleteProperty = propertyId => {
  return {
    type: 'DELETE_PROPERTY',
    propertyId
  };
};

export function fetchProperties() {
  const BASE_URL = "http://localhost:3000"
  const PROPERTIES_URL = `${BASE_URL}/properties`

  return (dispatch) => {
    dispatch({ type: 'START_ADDING_PROPERTIES_REQUEST' });
    fetch(PROPERTIES_URL)
      .then(response => response.json())
      .then(properties => dispatch({ type: 'POPULATE_PROPERTIES', properties }));
  };
}
