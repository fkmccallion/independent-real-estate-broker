class ImagesController < ApplicationController

  def index
    images = Image.all
    render json: ImageSerializer.new(images).to_serialized_json
  end

  def show
    image = Image.find_by(id: params[:id])
    render json: ImageSerializer.new(image).to_serialized_json
  end

  def create
    Image.create(title: params[:title], img_url: params[:img_url], property_id: params[:property_id])
    images = Image.all
    render json: ImageSerializer.new(images).to_serialized_json
  end

  def update
    image = Image.find_by(id: params[:id])
    image.update(title: params[:title], img_url: params[:img_url], property_id: params[:property_id])
    render json: ImageSerializer.new(image).to_serialized_json
  end

  def destroy
    image = Image.find_by(id: params[:id])
    image.delete
    render json: ImageSerializer.new(image).to_serialized_json
  end

end
