import React from 'react'

const Testimonial = testimonial => {
  return (
    <div className="testimonial-card">
      {testimonial.testimonial.comment}
      <br />
      <div>~<b>{testimonial.testimonial.client}{testimonial.testimonial.source ? ` on ${testimonial.testimonial.source}` : null}</b></div>
      <hr />
  </div>
  )

}

export default Testimonial
