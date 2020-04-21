export default (state = { images: [], requesting: false}, action) => {

  switch (action.type) {
    case 'POPULATE_IMAGES':
      return {
        ...state,
        images: action.images
      }
    case 'ADD_IMAGE':
      return {
        // add new agent to existing state
        images: [...state.images, action.images[action.images.length - 1]]
      }
    case 'DELETE_IMAGE':
      // splice out deleted agent from state
      let identifiedImageIndexInArray = state.images.indexOf(state.images.find(image => image.id === action.image.id))
      state.images.splice(identifiedImageIndexInArray, 1)
      return {
        images: state.images
      }
    default:
      return state;
  }

}
