export const addProperty = property => {
  return {
    type: 'ADD_PROPERTY',
    property
  };
};

export const updateProperty = property => {
  return {
    type: 'UPDATE_PROPERTY',
    property
  };
};

export const deleteProperty = property => {
  return {
    type: 'DELETE_PROPERTY',
    property
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
