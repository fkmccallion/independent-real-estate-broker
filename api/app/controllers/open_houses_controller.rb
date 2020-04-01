class OpenHousesController < ApplicationController

  def index
    open_houses = OpenHouse.all
    render json: OpenHouseSerializer.new(open_houses).to_serialized_json
  end

  def show
    open_house = OpenHouse.find_by(id: params[:id])
    render json: OpenHouseSerializer.new(open_house).to_serialized_json
  end

  def create
    OpenHouse.create(title: params[:title], content: params[:content], start_time: params[:start_time], property_id: params[:property_id])
    open_houses = OpenHouse.all
    render json: OpenHouseSerializer.new(open_houses).to_serialized_json
  end

  def update
    open_house = OpenHouse.find_by(id: params[:id])
    open_house.update(title: params[:title], content: params[:content], start_time: params[:start_time], property_id: params[:property_id])
    render json: OpenHouseSerializer.new(open_house).to_serialized_json
  end

end
