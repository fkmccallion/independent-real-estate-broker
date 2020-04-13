class CreateTestimonials < ActiveRecord::Migration[5.2]
  def change
    create_table :testimonials do |t|
      t.text :comment
      t.string :source
      t.string :client
      t.integer :agent_id
      t.integer :property_id

      t.timestamps
    end
  end
end
