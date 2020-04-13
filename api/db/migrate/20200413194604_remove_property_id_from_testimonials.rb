class RemovePropertyIdFromTestimonials < ActiveRecord::Migration[5.2]
  def change
    remove_column :testimonials, :property_id, :integer
  end
end
