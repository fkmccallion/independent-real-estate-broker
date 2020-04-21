export default (state = { images: [], requesting: false}, action) => {

  switch (action.type) {
    case 'START_ADDING_IMAGES_REQUEST':
      return {
        ...state,
        images: [...state.images],
        requesting: true
      }
    case 'POPULATE_IMAGES':
      return {
        ...state,
        images: action.images,
        requesting: false
      }
    case 'ADD_IMAGE':
      return {
        ...state
      }
    case 'DELETE_IMAGE':
      return {
        ...state
      }
    default:
      return state;
  }

}
