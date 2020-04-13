class TestimonialsController < ApplicationController

  def index
    testimonials = Testimonial.all
    render json: TestimonialSerializer.new(testimonials).to_serialized_json
  end

  def show
    testimonial = Testimonial.find_by(id: params[:id])
    render json: TestimonialSerializer.new(testimonial).to_serialized_json
  end

  def create
    Testimonial.create(comment: params[:comment], source: params[:source], client: params[:client], agent_id: params[:agent_id])
    testimonials = Testimonial.all
    render json: TestimonialSerializer.new(testimonials).to_serialized_json
  end

  def update
    testimonial = Testimonial.find_by(id: params[:id])
    testimonial.update(comment: params[:comment], source: params[:source], client: params[:client], agent_id: params[:agent_id])
    render json: TestimonialSerializer.new(testimonial).to_serialized_json
  end

  def destroy
    testimonial = Testimonial.find_by(id: params[:id])
    testimonial.delete
    render json: TestimonialSerializer.new(testimonial).to_serialized_json
  end

end
