class AgentsController < ApplicationController

  def index
    agents = Agent.all
    render json: AgentSerializer.new(agents).to_serialized_json
  end

  def show
    agent = Agent.find_by(id: params[:id])
    render json: AgentSerializer.new(agent).to_serialized_json
  end

  def create
    Agent.create(first_name: params[:first_name], last_name: params[:last_name], biography: params[:biography], phone: params[:phone], email: params[:email], img_url: params[:img_url], bre_number: params[:bre_number], title: params[:title])
    agents = Agent.all
    render json: AgentSerializer.new(agents).to_serialized_json
  end

  def update
    agent = Agent.find_by(id: params[:id])
    agent.update(first_name: params[:first_name], last_name: params[:last_name], biography: params[:biography], phone: params[:phone], email: params[:email], img_url: params[:img_url], bre_number: params[:bre_number], title: params[:title])
    render json: AgentSerializer.new(agent).to_serialized_json
  end

  def destroy
    agent = Agent.find_by(id: params[:id])
    agent.delete
    render json: AgentSerializer.new(agent).to_serialized_json
  end

end
