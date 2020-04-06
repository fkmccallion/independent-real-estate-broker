export default (state = { properties: [], requesting: false}, action) => {

  const BASE_URL = "http://localhost:3000"
  const PROPERTIES_URL = `${BASE_URL}/properties`

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
    default:
      return state;
  }

}
