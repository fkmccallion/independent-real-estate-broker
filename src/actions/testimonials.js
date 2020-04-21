const BASE_URL = "http://localhost:3000"
const TESTIMONIALS_URL = `${BASE_URL}/testimonials`

export const addTestimonial = testimonial => {

  function addTestimonial() {
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
    fetch(TESTIMONIALS_URL, configObj);
  }

  addTestimonial()

  return {
    type: 'ADD_TESTIMONIAL',
    testimonial
  };

};

export const deleteTestimonial = testimonial => {

  function deleteTestimonial() {
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
    fetch(TESTIMONIALS_URL + `/${testimonial}`, configObj);
  }

  deleteTestimonial()

  return {
    type: 'DELETE_TESTIMONIAL',
    testimonial
  };

};

export function fetchTestimonials() {

  return (dispatch) => {
    dispatch({ type: 'START_ADDING_TESTIMONIALS_REQUEST' });
    fetch(TESTIMONIALS_URL)
      .then(response => response.json())
      .then(testimonials => dispatch({ type: 'POPULATE_TESTIMONIALS', testimonials }));
  };
}
