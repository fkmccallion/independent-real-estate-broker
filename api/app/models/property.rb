class Property < ApplicationRecord
  belongs_to :agent
  has_many :images

end
