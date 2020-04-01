class OpenHouseSerializer

  def initialize(open_house_object)
    @open_house = open_house_object
  end

  def to_serialized_json
    options = {
      except: [:updated_at, :created_at],
    }
    @open_house.to_json(options)
  end

end
