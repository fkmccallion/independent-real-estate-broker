class Property < ApplicationRecord
  belongs_to :agent
  has_many :images
  has_many :open_houses
  has_many :testimonials

end
