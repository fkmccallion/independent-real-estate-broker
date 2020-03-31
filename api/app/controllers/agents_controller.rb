class AgentsController < ApplicationController

  def index
    agents = Agent.all
    render json: AgentSerializer.new(agents).to_serialized_json
  end

  def show
    agent = Agent.find_by(id: params[:id])
    render json: AgentSerializer.new(agent).to_serialized_json
  end

end
