export default (state = { properties: [] }, action) => {

  switch (action.type) {
    case 'POPULATE_PROPERTIES':
      return {
        ...state,
        properties: action.properties
      }
    case 'ADD_PROPERTY':
      return {
        // add new property to existing state
        properties: [...state.properties, action.properties[action.properties.length - 1]]
      }
    case 'UPDATE_PROPERTY':
      return {
        // map through and replace updated property in state
        properties: state.properties.map(property => (property.id === action.property.id) ? action.property : property)
      }
    case 'DELETE_PROPERTY':
      // splice out deleted property from state
      let identifiedPropertyIndexInArray = state.properties.indexOf(state.properties.find(property => property.id === action.property.id))
      state.properties.splice(identifiedPropertyIndexInArray, 1)

      return {
        properties: state.properties
      }
    default:
      return state;
  }

}
