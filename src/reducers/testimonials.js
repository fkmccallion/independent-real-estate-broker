export default (state = { testimonials: [] }, action) => {

  switch (action.type) {
    case 'POPULATE_TESTIMONIALS':
      return {
        ...state,
        testimonials: action.testimonials,
        requesting: false
      }
    case 'ADD_TESTIMONIAL':
      return {
        // add new testimonial to existing state
        testimonials: [...state.testimonials, action.testimonials[action.testimonials.length - 1]]
      }
    case 'DELETE_TESTIMONIAL':
      // splice out deleted testimonial from state
      let identifiedTestimonialIndexInArray = state.testimonials.indexOf(state.testimonials.find(testimonial => testimonial.id === action.testimonial.id))
      state.testimonials.splice(identifiedTestimonialIndexInArray, 1)
      return {
        testimonials: state.testimonials
      }
    default:
      return state;
  }

}
