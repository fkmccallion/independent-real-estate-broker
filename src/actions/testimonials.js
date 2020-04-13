export const addTestimonial = testimonial => {
  return {
    type: 'ADD_TESTIMONIAL',
    testimonial
  };
};

export const deleteTestimonial = testimonial => {
  return {
    type: 'DELETE_TESTIMONIAL',
    testimonial
  };
};

export function fetchTestimonials() {
  const BASE_URL = "http://localhost:3000"
  const TESTIMONIALS_URL = `${BASE_URL}/testimonials`

  return (dispatch) => {
    dispatch({ type: 'START_ADDING_TESTIMONIALS_REQUEST' });
    fetch(TESTIMONIALS_URL)
      .then(response => response.json())
      .then(testimonials => dispatch({ type: 'POPULATE_TESTIMONIALS', testimonials }));
  };
}
