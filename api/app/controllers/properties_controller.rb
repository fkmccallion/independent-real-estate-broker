class PropertiesController < ApplicationController

  def index
    properties = Property.all
    render json: PropertySerializer.new(properties).to_serialized_json
  end

  def show
    property = Property.find_by(id: params[:id])
    render json: PropertySerializer.new(property).to_serialized_json
  end

  def create
    Property.create(address: params[:address], city: params[:city], state: params[:state], zip: params[:zip], price: params[:price], sold: params[:sold], transaction_date: params[:transaction_date], client: params[:client], bed: params[:bed], bath: params[:bath], sqft: params[:sqft], agent_id: params[:agent_id])
    properties = Property.all
    render json: PropertySerializer.new(properties).to_serialized_json
  end

  def update
    property = Property.find_by(id: params[:id])
    property.update(address: params[:address], city: params[:city], state: params[:state], zip: params[:zip], price: params[:price], sold: params[:sold], transaction_date: params[:transaction_date], client: params[:client], bed: params[:bed], bath: params[:bath], sqft: params[:sqft], agent_id: params[:agent_id])
    render json: PropertySerializer.new(property).to_serialized_json
  end

  def destroy
    property = Property.find_by(id: params[:id])
    property.delete
    render json: AgentSerializer.new(property).to_serialized_json
  end

end
