class PropertySerializer

  def initialize(property_object)
    @property = property_object
  end

  def to_serialized_json
    options = {
      except: [:updated_at, :created_at],
    }
    @property.to_json(options)
  end

end
