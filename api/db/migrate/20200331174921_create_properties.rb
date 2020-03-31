class CreateProperties < ActiveRecord::Migration[5.2]
  def change
    create_table :properties do |t|
      t.string :address
      t.string :city
      t.string :state
      t.string :zip
      t.integer :price
      t.boolean :sold

      t.timestamps
    end
  end
end
