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
