class AgentSerializer

  def initialize(agent_object)
    @agent = agent_object
  end

  def to_serialized_json
    options = {
      except: [:updated_at, :created_at],
    }
    @agent.to_json(options)
  end

end
