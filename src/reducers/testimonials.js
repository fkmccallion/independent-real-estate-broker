export default (state = { testimonials: [], requesting: false}, action) => {

  const BASE_URL = "http://localhost:3000"
  const TESTIMONIALS_URL = `${BASE_URL}/testimonials`

  function addTestimonial() {
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        'comment': action.testimonial.comment,
        'source': action.testimonial.source,
        'client': action.testimonial.client,
        'agent_id': action.testimonial.agent_id
      })
    };
    fetch(TESTIMONIALS_URL, configObj);
  }

  function deleteTestimonial() {
    let configObj = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        'id': action.testimonial
      })
    };
    fetch(TESTIMONIALS_URL + `/${action.testimonial}`, configObj);
  }

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
      addTestimonial();
      return {
        ...state
      }
    case 'DELETE_TESTIMONIAL':
      deleteTestimonial();
      return {
        ...state
      }
    default:
      return state;
  }

}
