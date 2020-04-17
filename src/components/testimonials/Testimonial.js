import React from 'react'

const Testimonial = testimonial => {

  return (
    <div className="testimonial-card">
      {testimonial.testimonial.comment}
      <br />
      <div><b>~{testimonial.testimonial.client} on {testimonial.testimonial.source}</b></div>
    </div>
  )

}

export default Testimonial
