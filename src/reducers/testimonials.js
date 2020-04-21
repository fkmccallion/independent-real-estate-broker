export default (state = { testimonials: [], requesting: false}, action) => {

  switch (action.type) {
    case 'START_ADDING_TESTIMONIALS_REQUEST':
      return {
        ...state,
        testimonials: [...state.testimonials],
        requesting: true
      }
    case 'POPULATE_TESTIMONIALS':
      return {
        ...state,
        testimonials: action.testimonials,
        requesting: false
      }
    case 'ADD_TESTIMONIAL':
      return {
        ...state
      }
    case 'DELETE_TESTIMONIAL':
      return {
        ...state
      }
    default:
      return state;
  }

}
