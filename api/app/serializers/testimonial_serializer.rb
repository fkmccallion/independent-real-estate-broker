class TestimonialSerializer

  def initialize(testimonial_object)
    @testimonial = testimonial_object
  end

  def to_serialized_json
    options = {
      except: [:updated_at, :created_at],
    }
    @testimonial.to_json(options)
  end

end
