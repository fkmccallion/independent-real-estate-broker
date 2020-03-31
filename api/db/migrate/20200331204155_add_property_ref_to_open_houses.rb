class AddPropertyRefToOpenHouses < ActiveRecord::Migration[5.2]
  def change
    add_reference :open_houses, :property, foreign_key: true
  end
end
