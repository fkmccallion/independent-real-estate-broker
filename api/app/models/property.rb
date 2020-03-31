class Property < ApplicationRecord
  belongs_to :agent
  has_many :images
  has_many :open_houses

end
