class Testimonial < ApplicationRecord
    belongs_to :agent
    belongs_to :property
    
end
