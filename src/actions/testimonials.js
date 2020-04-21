const BASE_URL = "http://localhost:3000"
const TESTIMONIALS_URL = `${BASE_URL}/testimonials`

export const addTestimonial = testimonial => {

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      'comment': testimonial.comment,
      'source': testimonial.source,
      'client': testimonial.client,
      'agent_id': testimonial.agent_id
    })
  };

  return (dispatch) => {
    fetch(TESTIMONIALS_URL, configObj)
      .then(response => response.json())
      .then(testimonials => dispatch({ type: 'ADD_TESTIMONIAL', testimonials }));
  };

};

export const deleteTestimonial = testimonial => {

  let configObj = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      'id': testimonial
    })
  };

  return (dispatch) => {
    fetch(TESTIMONIALS_URL + `/${testimonial}`, configObj)
      .then(response => response.json())
      .then(testimonial => dispatch({ type: 'DELETE_TESTIMONIAL', testimonial }));
  };

};

export function fetchTestimonials() {

  return (dispatch) => {
    fetch(TESTIMONIALS_URL)
      .then(response => response.json())
      .then(testimonials => dispatch({ type: 'POPULATE_TESTIMONIALS', testimonials }));
  };
  
}
